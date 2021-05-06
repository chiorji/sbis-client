import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  }
}));


const PinAndId = () => {
  /* eslint-disable no-console */
  const {textFields} = useStyles();
  const [formValues, setFormValues] = useState({
    pin:        '',
    pinError:   false,
    schId:      '',
    schIdError: false
  });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues(prevState => ({...prevState, [name]: value}));
  };

  const validateInputs = () => {
    const {pin, schId} = formValues;
    setFormValues(prevState => ({
      ...prevState,
      pinError:   false,
      schIdError: false
    }));

    if (!pin && !schId) {
      setFormValues(prevState => ({
        ...prevState,
        pinError:   true,
        schIdError: true
      }));
      return false;
    }

    if (!pin) {
      setFormValues(prevState => ({...prevState, pinError: true}));
      return false;
    }

    if (!schId) {
      setFormValues(prevState => ({...prevState, schIdError: true}));
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {pin, schId} = formValues;
    if (validateInputs()) {
      console.log('validated', {pin, schId});
    } else {
      console.log('validation error', {pin, schId});
    }
  };

  const {pin, pinError, schId, schIdError} = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          type="text"
          error={pinError}
          id="pin"
          name="pin"
          label="Scratch card pin"
          variant="outlined"
          helperText="12 character length"
          autoComplete="off"
          className={textFields}
          value={pin}
          onChange={handleChange}
        />

        <TextField
          type="text"
          error={schIdError}
          id="sch_id"
          name="schId"
          label="School issued ID"
          variant="outlined"
          helperText="This could be your registration number"
          autoComplete="off"
          className={textFields}
          value={schId}
          onChange={handleChange}
        />
        <Button {...{
          variant: 'outlined',
          type:    'submit',
          color:   'primary'
        }}
        >
          Validate and continue
        </Button>
      </form>
    </Grid>
  );
};

export default PinAndId;
