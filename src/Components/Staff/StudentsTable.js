import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { makeStyles } from '@material-ui/styles';
import { fetchAllStudents } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5)
  },
  header: {
    marginBottom: theme.spacing(3)
  }
}));

const StudentsTable = ({ students, isLoading, getListing }) => {
  const { root } = useStyles();
  const history = useHistory();

  useEffect(() => {
    getListing();
  }, [getListing]);

  return (
    <Grid container spacing={2} className={root}>
      <Grid item xs={12}>
        <MaterialTable
          title="Student List"
          columns={[
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Current Class', field: 'current_class' },
            { title: 'Student ID', field: 'id' },
            { title: 'Sex', field: 'gender' }
          ]}
          data={students}
          options={{
            search:              true,
            sorting:             true,
            actionsColumnIndex:  -1,
            pageSize:            10,
            pageSizeOptions:     [ 10, 20, 30, 40, 50, 100 ],
            emptyRowsWhenPaging: false
          }}
          actions={[
            {
              icon:    VisibilityIcon,
              tooltip: 'View',
              onClick: (e, rowData) => {
                history.push('/dashboard/students/info?id='+rowData.id);
              }
            }
          ]}
          icons={{
            Search:       SearchIcon,
            ResetSearch:  ClearIcon,
            SortArrow:    ArrowDropUpIcon,
            PreviousPage: ArrowLeftIcon,
            NextPage:     ArrowRightIcon,
            FirstPage:    SkipPreviousIcon,
            LastPage:     SkipNextIcon
          }}
          tableLayout="fixed"
          isLoading={isLoading}
        />
      </Grid>
    </Grid>
  );
};

const mapState = ({ staff }) => ({
  students:  staff.stats.students,
  isLoading: staff.isLoading
});

const mapDispatch = (dispatch) => ({
  getListing: () => dispatch(fetchAllStudents())
});

export default connect(mapState, mapDispatch)(StudentsTable);
