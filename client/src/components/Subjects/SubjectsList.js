/* eslint-disable no-unused-vars, no-console */
import React from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import subjectsDummyData from '../../utils/subjectList.json';

const SubjectsList = ({subjects}) => {
  return (
    <MaterialTable
      title="Subject List"
      columns={[
        {title: 'Name', field: 'name', editable: 'onUpdate'},
        {title: 'Code', field: 'code',editable: 'never'},
        {title: 'Teacher', field: 'teacher', editable: 'onUpdate'},
        {title: 'Category', field: 'category', editable: 'onUpdate'}
      ]}
      data={subjects.lenght > 0 ? subjects : subjectsDummyData}
      options={{
        search:             false,
        sorting:            false,
        actionsColumnIndex: -1,
        paging:             false
      }}
      actions={[
        {
          icon:    EditIcon,
          tooltip: 'Edit',
          onClick: (event, rowData) => alert('You edited ' + rowData.name)
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
    />
  );
};

const mapState = ({staff}) => ({
  subjects: staff.subjects
});

export default connect(mapState)(SubjectsList);
