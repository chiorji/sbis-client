import React, {useState} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import {validatePin} from '../../store/result/resultThunk';

const useStyles = makeStyles(theme => ({
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  }
}));


const PinAndId = ({handlePinValidation=f => f}) => {
  const {textFields} = useStyles();
  const [formValues, setFormValues] = useState({
    pin:        '',
    pinError:   false,
    regno:      '',
    regnoError: false
  });

  // handle input changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues(prevState => ({...prevState, [name]: value}));
  };

  const validateInputs = () => {
    const {pin, regno} = formValues;
    setFormValues(prevState => ({
      ...prevState,
      pinError:   false,
      regnoError: false
    }));

    if (!pin && !regno) {
      setFormValues(prevState => ({
        ...prevState,
        pinError:   true,
        regnoError: true
      }));
      return false;
    }

    if (!pin || !validator.isLength(pin, {min: 12, max: 12})) {
      setFormValues(prevState => ({...prevState, pinError: true}));
      return false;
    }

    if (!regno) {
      setFormValues(prevState => ({...prevState, regnoError: true}));
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {pin, regno} = formValues;
    if (validateInputs()) {
      handlePinValidation({pin, regno});
    } else {

    }
  };

  const {pin, pinError, regno, regnoError} = formValues;
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
          helperText={`Must be 12 characters; ${pin.length}/12`}
          autoComplete="off"
          className={textFields}
          value={pin}
          onChange={handleChange}
        />

        <TextField
          type="text"
          error={regnoError}
          id="regno"
          name="regno"
          label="Reg. number"
          variant="outlined"
          helperText="Your registration number"
          autoComplete="off"
          className={textFields}
          value={regno}
          onChange={handleChange}
        />
        <Button {...{
          variant: 'outlined',
          type:    'submit',
          color:   'primary',
          id:      'validatePinReg',
          size:    'large'
        }}
        >
          Validate and continue
        </Button>
      </form>
    </Grid>
  );
};

const mapDispatch = (dispatch) => ({
  handlePinValidation: (payload) => dispatch(validatePin(payload))
});

export default connect(null, mapDispatch)(PinAndId);