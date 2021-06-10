import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { fetchStaffList } from '../../store/staff/actions';

const StaffListing = ({ staff, isLoading, fetchStaffList }) => {

  useEffect(() => {
    fetchStaffList();
  }, [fetchStaffList]);

  return (
    <>
      <Typography variant="h4" gutterBottom>Staff member list</Typography>
      <MaterialTable
        columns={[
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Gender', field: 'gender' },
          { title: 'Form Class', field: 'form_class' },
          { title: 'Email', field: 'email' }
        ]}
        data={staff}
        options={{
          search:              true,
          sorting:             true,
          actionsColumnIndex:  -1,
          toolbar:             false,
          emptyRowsWhenPaging: false,
          pageSize:            10,
          pageSizeOptions:     [10, 20, 30]
        }}
        actions={[
          {
            icon:    VisibilityIcon,
            tooltip: 'View',
            onClick: (event, rowData) => alert('You viewed ' + rowData.first_name)
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
