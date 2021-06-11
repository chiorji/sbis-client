import React from 'react';
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

const StudentsTable = ({ students, isLoading, getById }) => {
  return (
    <MaterialTable
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
        showTitle:           false,
        pageSize:            10,
        pageSizeOptions:     [ 10, 20, 30, 40, 50, 100 ],
        emptyRowsWhenPaging: false
      }}
      actions={[
        {
          icon:    VisibilityIcon,
          tooltip: 'View',
          onClick: (event, rowData) => getById(rowData.id)
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
  students:  staff.stats.students,
  isLoading: staff.isLoading
});

export default connect(mapState)(StudentsTable);
