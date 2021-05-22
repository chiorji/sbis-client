import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { validatePin } from '../../store/result/resultThunk';

const useStyles = makeStyles(theme => ({
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  }
}));


const PinAndId = ({ handlePinValidation=f => f }) => {
  const { textFields } = useStyles();
  const [formValues, setFormValues] = useState({
    pin:         '',
    pinError:    false,
    serial:      '',
    serialError: false
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  };

  const validateInputs = () => {
    const { pin, serial } = formValues;
    setFormValues(prevState => ({
      ...prevState,
      pinError:    false,
      serialError: false
    }));

    if (!pin && !serial) {
      setFormValues(prevState => ({
        ...prevState,
        pinError:    true,
        serialError: true
      }));
      return false;
    }

    if (!pin || !validator.isLength(pin, { min: 12, max: 12 })) {
      setFormValues(prevState => ({ ...prevState, pinError: true }));
      return false;
    }

    if (!serial || !validator.isLength(serial, 13)) {
      setFormValues(prevState => ({ ...prevState, serialError: true }));
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pin, serial } = formValues;
    if (validateInputs()) {
      handlePinValidation({ pin, serial });
    } else {

    }
  };

  const { pin, pinError, serial, serialError } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          type="text"
          error={pinError}
          id="pin"
          name="pin"
          label="Card pin"
          variant="outlined"
          helperText={`Card pin, must be 12 characters; ${pin.length}/12`}
          autoComplete="off"
          className={textFields}
          value={pin}
          onChange={handleChange}
        />

        <TextField
          type="text"
          error={serialError}
          id="serial"
          name="serial"
          label="Card serial number"
          variant="outlined"
          helperText="Card serial number"
          autoComplete="off"
          className={textFields}
          value={serial}
          onChange={handleChange}
        />
        <Button {...{
          variant: 'outlined',
          type:    'submit',
          color:   'primary',
          id:      'pinSerialBtn',
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
