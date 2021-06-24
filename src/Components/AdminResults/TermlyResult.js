/* eslint-disable no-unused-vars, no-console */
import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
// import getYear from 'date-fns/getYear';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { showAlert } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  infoRoot: {
    display:       'flex',
    flexDirection: 'row',
    alignItems:    'center'
  },

  candidateInfo: {
    display:        'flex',
    flexDirection:  'row',
    justifyContent: 'space-between',
    alignItems:     'center'
  },
  formControl: {
    margin:                         theme.spacing(1),
    flexGrow:                       1,
    minWidth:                       200,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

const TermlyResult = ({ subjects, classList, terms, alert }) => {
  const { infoRoot, candidateInfo, formControl } = useStyles();

  // Student information
  const [basicInfo, setBasicInfo] = useState({
    id:               '',
    idError:          false,
    classResult:      '',
    classResultError: false,
    resultTerm:       '',
    resultYear:       new Date()
  });

  const {
    id,
    idError,
    classResult,
    resultTerm,
    resultYear,
    classResultError
  } = basicInfo;

  const handleBasicInfoChange = (props) => (e) => {
    console.log(e.target.value);
    setBasicInfo(prevState => ({ ...prevState, [props]: e.target.value }));
  };

  const columns = [
    {
      field: 'subject',
      title: 'Subject',
      type:  'string'
    },
    {
      field: 'avgMarksObtained',
      title: 'Average Marks Obtained',
      type:  'numeric'
    },
    {
      field: 'avgMarksObtainable',
      title: 'Average Marks Obtainable',
      type:  'numeric'
    },
    {
      field: 'marksObtained',
      title: 'Marks Obtained',
      type:  'numeric'
    },
    {
      field: 'classAvgMarks',
      title: 'Class Average Marks',
      type:  'numeric'
    },
    {
      field: 'position',
      title: 'Position',
      type:  'numeric'
    }
  ];

  // Use some defaults - generally subjects
  const generalSubjects = [
    {
      subject:            'Mathematics',
      avgMarksObtained:   0,
      avgMarksObtainable: 0,
      marksObtained:      0,
      classAvgMarks:      0,
      position:           0
    },
    {
      subject:            'English Language',
      avgMarksObtained:   0,
      avgMarksObtainable: 0,
      marksObtained:      0,
      classAvgMarks:      0,
      position:           0
    },
    {
      subject:            'Igbo Language',
      avgMarksObtained:   0,
      avgMarksObtainable: 0,
      marksObtained:      0,
      classAvgMarks:      0,
      position:           0
    }
  ];
  const [ scores, setScores ] = useState(generalSubjects);

  // The aim of this method is to stripe unnecessary score data
  // unnecessay data here are ones automatically added by material table; therbey submitting only the required data to server insead of junks
  const stripeData = (mark) => {
    return {
      subject:            mark.subject,
      avgMarksObtained:   mark.avgMarksObtained,
      avgMarksObtainable: mark.avgMarksObtainable,
      marksObtained:      mark.marksObtained,
      classAvgMarks:      mark.classAvgMarks,
      position:           mark.position
    };
  };

  const handleResultSubmit = () => {
    try {
      const data = scores.map(score => stripeData(score));
      console.log({ data });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Grid item xs={12} className={candidateInfo}>
        <Typography variant="h5" component="h6">Termly Result</Typography>
        <FormGroup row={true} className={infoRoot}>
          <FormControl className={formControl}>
            <TextField
              error={idError}
              label="Student ID"
              id="id"
              name="id"
              variant="outlined"
              autoComplete="off"
              value={id}
              onChange={handleBasicInfoChange('id')}
              size="small"
            />
          </FormControl>
          <FormControl variant="outlined" size="small" className={formControl} error={classResultError}>
            <InputLabel id="classResult">Student Class</InputLabel>
            <Select
              labelId="classResult"
              id="classResult"
              value={classResult}
              name="classResult"
              onChange={handleBasicInfoChange('classResult')}
              label="Student Class"
            >
              {classList.map((value, idx) => (
                <MenuItem
                  key={value}
                  value={value}
                  disabled={idx === 0}
                >{value.toUpperCase()}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" className={formControl} error={classResultError}>
            <InputLabel id="resultTerm">Term</InputLabel>
            <Select
              labelId="resultTerm"
              id="resultTerm"
              value={resultTerm}
              name="resultTerm"
              onChange={handleBasicInfoChange('resultTerm')}
              label="Term"
            >
              {terms.map((value, idx) => (
                <MenuItem
                  key={value}
                  value={value}
                  disabled={idx === 0}
                >{value.toUpperCase()}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={formControl}>
            <KeyboardDatePicker
              error={''}
              views={[ 'year' ]}
              label='Result Year'
              value={resultYear}
              onChange={handleBasicInfoChange('resultYear')}
              inputVariant='outlined'
              variant='dialog'
              autoOk={true}
              orientation='landscape'
              size="small"
              animateYearScrolling={true}
              disableFuture={true}
              maxDate={new Date()}
              minDate='2020-01-01'
            />
          </FormControl>
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <MaterialTable
          columns={columns}
          data={scores}
          options={{
            emptyRowsWhenPaging: false,
            showTitle:           false,
            search:              false,
            filtering:           false,
            sorting:             false,
            addRowPosition:      'last',
            paging:              false,
            actionsColumnIndex:  -1
          }}
          icons={{
            Add:    AddBoxIcon,
            Check:  CheckBoxIcon,
            Delete: HighlightOffIcon,
            Edit:   EditIcon,
            Clear:  CancelIcon
          }}
          editable={{
            onRowAdd: (rowData) => new Promise((resolve, reject) => {
              setTimeout(() => {
                setScores(prevState => ([...prevState, rowData]));
                console.log('Add', { rowData, scores });
                resolve();
              }, 500);
            }),

            onRowDelete: (oldScore) => new Promise((resolve, reject) => {
              setTimeout(() => {
                // make a copy of current score
                const scoreDelete = [ ...scores ];
                // Grab the index of the old score that need to be deleted
                const index = oldScore.tableData.id;
                // Remove score from scores
                scoreDelete.splice(index, 1);
                setScores([...scoreDelete]);
                resolve();
              }, 1000);
            }),

            onRowUpdate: (newScore, oldScore) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                // make a copy of original data
                  const scoreUpdate = [ ...scores ];
                  // Grab the index of the old data that needs to update
                  const index = oldScore.tableData.id;
                  // Replace score at index with updated score
                  scoreUpdate[ index ] = newScore;
                  // Set the copy as the current score
                  setScores([ ...scoreUpdate ]);
                  resolve();
                }, 1000);
              })
          }}
        />
      </Grid>
      <Button
        size="large"
        onClick={handleResultSubmit}
        color='primary'
        disableElevation
        variant="contained"
        style={{ marginTop: '3ch' }}
        disabled={scores.length < 5 ? true : false}
      >
        Submit result data
      </Button>
    </>
  );
};


const mapState = ({ staff }) => ({
  subjects:  staff.subjects,
  classList: staff.classList,
  terms:     staff.terms
});

const mapDispatch = (dispatch) => ({
  alert: (msg) => dispatch(showAlert({
    shouldOpen: true,
    message:    msg,
    severity:   'error' }))
});

export default connect(mapState, mapDispatch)(TermlyResult);
