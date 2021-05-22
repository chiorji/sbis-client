import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
    <MaterialTable
      title="Staff List"
      columns={[
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        { title: 'Form Class', field: 'form_class' },
        { title: 'id', field: 'id' }
      ]}
      data={staff}
      options={{
        search:             true,
        sorting:            true,
        actionsColumnIndex: -1
      }}
      actions={[
        {
          icon:    VisibilityIcon,
          tooltip: 'View',
          onClick: (event, rowData) => alert('You viewed ' + rowData.id)
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
