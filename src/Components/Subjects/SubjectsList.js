import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { listSubjects } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom:             theme.spacing(8),
    height:                   '500px',
    width:                    '100%',
    '& .subject-list-header': {
      backgroundColor: theme.palette.primary.light,
      color:           theme.palette.grey[300]
    }
  }
}));

const SubjectsList = ({ subjects, listSubjects }) => {
  const { root } =useStyles();

  useEffect(() => {
    listSubjects();
  }, [listSubjects]);

  const columns = [
    {
      id:              1,
      headerName:      'Name',
      description:     'Subject name',
      field:           'name',
      width:           200,
      headerClassName: 'subject-list-header'
    },
    {
      id:              2,
      headerName:      'Code',
      description:     'Subject code (optional)',
      field:           'code',
      width:           200,
      headerClassName: 'subject-list-header'
    },
    {
      id:              3,
      headerName:      'Teacher',
      description:     'Subject teacher',
      field:           'teacher',
      width:           200,
      flex:            1, // makes teacher name span columns,
      headerClassName: 'subject-list-header'
    },
    {
      id:              4,
      headerName:      'Category',
      description:     'Subject category',
      field:           'category',
      width:           200,
      headerClassName: 'subject-list-header'
    },
    {
      id:              5,
      headerName:      'Date created',
      description:     'Date subject was added to curriculum',
      field:           'created_at',
      width:           200,
      headerClassName: 'subject-list-header',
      type:            'date',
      valueFormatter:  ({ value }) => {
        return new Date(value).toDateString();
      }
    }
  ];

  return (
    <div className={root}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Subjects in the curriculum</Typography>
          <DataGrid
            columns={columns}
            rows={subjects}
            pageSize={8}
            autoHeight
            disableColumnMenu
            hideFooterSelectedRowCount
            disableColumnSelector
          />
        </div>
      </div>
    </div>
  );
};

const mapState = ({ staff }) => ({
  subjects: staff.subjects
});

const mapDispatch = (dispatch) => ({
  listSubjects: () => dispatch(listSubjects())
});

export default connect(mapState, mapDispatch)(SubjectsList);
