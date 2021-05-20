/* eslint-disable no-unused-vars, no-console */
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import subjectsDummyData from '../../utils/subjectList.json';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {updateSubject} from '../../store/staff/actions';

const SubjectsList = ({subjects, update}) => {

  const updateSub = (data) => {
    return update(data);
  };

  return (
    <MaterialTable
      title="Subject List"
      editable={{
        onRowUpdate: (newData) => {
          new Promise((resolve, reject) => {
            setTimeout(() => {
              try {
                updateSub(newData);
                resolve();
              } catch (error) {
                reject();
              }
            }, 50);
          });
        }
      }}
      columns={[
        {title: 'Name', field: 'name', editable: 'always'},
        {title: 'Code', field: 'code', editable: 'always'},
        {
          title:         'Teacher',
          field:         'teacher',
          editable:      'always',
          editComponent: props => (
            <TextField
              type="text"
              select
              value={props.value}
              onChange={e => props.onChange(e.target.value)}
            > {/* replace with staff name list */}
              {['Henry', 'Bright', 'Michael', 'Joy'].map(value => (
                <MenuItem key={value} value={value}>{value}</MenuItem>
              ))}
            </TextField>
          )},
        {
          title:         'Category',
          field:         'category',
          editable:      'always',
          editComponent: props => (
            <TextField
              type="text"
              select
              value={props.value}
              onChange={e => props.onChange(e.target.value)}
            >
              {['General', 'Sciences', 'Arts', 'Finance'].map(value => (
                <MenuItem key={value} value={value}>{value}</MenuItem>
              ))}
            </TextField>
          )
        }
      ]}
      data={subjects.lenght > 0 ? subjects : subjectsDummyData}
      options={{
        search:             false,
        sorting:            false,
        actionsColumnIndex: -1,
        paging:             false,
        draggable:          false
      }}
      icons={{
        Edit:  EditIcon,
        Check: DoneIcon,
        Clear: CancelIcon
      }}
    />
  );
};

const mapState = ({staff}) => ({
  subjects: staff.subjects
});

const mapDispatch = (dispatch) => ({
  update: (payload) => dispatch(updateSubject(payload))
});

export default connect(mapState, mapDispatch)(SubjectsList);
