/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import { fetchStaffList } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& .list-header': {
      backgroundColor: theme.palette.primary.light,
      color:           theme.palette.grey[300]
    }
  }
}));

const StaffListing = ({ staff, isLoading, fetchStaffList }) => {
  const { root } = useStyles();
  useEffect(() => {
    fetchStaffList();
  }, [ fetchStaffList ]);

  const columns = [
    {
      headerName:      'First Name',
      field:           'first_name',
      width:           200,
      id:              1,
      headerClassName: 'list-header'
    },
    {
      headerName:
        'Last Name',
      field:           'last_name',
      width:           200,
      id:              2,
      headerClassName: 'list-header'
    },
    {
      headerName:
        'Gender',
      field:           'gender',
      width:           200,
      id:              3,
      headerClassName: 'list-header'
    },
    {
      headerName:      'Form Class',
      field:           'form_class',
      width:           200,
      id:              4,
      headerClassName: 'list-header'
    },
    {
      headerName:
        'Email',
      field:           'email',
      width:           200,
      flex:            1,
      id:              5,
      headerClassName: 'list-header'
    }
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>Staff member list</Typography>
      <div style={{ height: 500, width: '100%' }} className={root}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              autoHeight
              columns={columns}
              rows={staff}
              disableColumnMenu
              hideFooterSelectedRowCount
              disableColumnSelector
              onRowClick={({ row:{ email } }, e) => console.log({ email })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = ({ staff }) => ({
  staff:     staff.stats.staff,
  isLoading: staff.isLoading
});

const mapDispatch = (dispatch) => ({
  fetchStaffList: () => dispatch(fetchStaffList())
});

export default connect(mapState, mapDispatch)(StaffListing);
