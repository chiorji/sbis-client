import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { fetchAllStudents } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom:     theme.spacing(5),
    '& .list-header': {
      backgroundColor: theme.palette.primary.light,
      color:           theme.palette.grey[300]
    }
  },
  header: {
    marginBottom: theme.spacing(3)
  },
  viewProfileLink: {
    color:     theme.palette.primary.dark,
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}));

const StudentsTable = ({ students, isLoading, getListing }) => {
  const { root, viewProfileLink } = useStyles();

  useEffect(() => {
    getListing();
  }, [ getListing ]);

  const columns = [
    {
      headerName:      'First Name',
      field:           'first_name',
      id:              1,
      width:           200,
      headerClassName: 'list-header'
    },
    {
      headerName:      'Last Name',
      field:           'last_name',
      id:              2,
      width:           200,
      headerClassName: 'list-header'
    },
    {
      headerName:      'Current Class',
      field:           'current_class',
      id:              3,
      width:           200,
      headerClassName: 'list-header'
    },
    {
      headerName:      'Student ID',
      field:           'id',
      id:              4,
      width:           200,
      flex:            1,
      headerClassName: 'list-header'
    },
    {
      headerName:      'Sex',
      field:           'gender',
      id:              5,
      width:           200,
      headerClassName: 'list-header'
    },
    {
      headerName:      'View Profile',
      field:           'user_id',
      id:              6,
      width:           200,
      headerClassName: 'list-header',
      renderCell:      ({ value }) => <Link className={viewProfileLink} to={`/dashboard/students/profile/${value}`}>View profile</Link>
    }
  ];

  return (
    <>
      <Typography variant="h5" gutterBottom>Student Listing</Typography>
      <div style={{ height: 500, width: '100%' }} className={root}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              columns={columns}
              rows={students}
              loading={isLoading}
              autoHeight
              disableColumnMenu
              hideFooterSelectedRowCount
              disableColumnSelector
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = ({ staff }) => ({
  students:  staff.stats.students,
  isLoading: staff.isLoading,
  info:      staff.studentInfo
});

const mapDispatch = (dispatch) => ({
  getListing: () => dispatch(fetchAllStudents())
});

export default connect(mapState, mapDispatch)(StudentsTable);
