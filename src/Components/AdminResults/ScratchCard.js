import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  gridItem: {
    display:        'flex',
    justifyContent: 'start',
    flexDirection:  'column',
    marginTop:      theme.spacing(3)
  },
  rowText: {
    flexGrow: 1,
    margin:   theme.spacing(1)
  },
  submitBtn: {
    margin: theme.spacing(1)
  }
}));


const ScratchCard = ({ generatePin=f => f }) => {
  const { gridItem, rowText, submitBtn } = useStyles();
  const [quantity, setQuantity] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePin(quantity);
  };

  return (
    <Container>
      <Typography variant="h4">Scratch Card</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={gridItem}>
          <form noValidate onSubmit={handleSubmit}>
            <FormGroup row={true}>
              <FormControl variant="outlined" size="small" className={rowText}>
                <InputLabel id="quantity">Quantity</InputLabel>
                <Select
                  labelId="qty"
                  id="qty"
                  value={quantity}
                  name="qty"
                  onChange={e => setQuantity(e.target.value)}
                  label="Quantity"
                >
                  {[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
                    .map(value => (
                      <MenuItem
                        key={value}
                        value={value}
                      >
                        {value}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                id='submit'
                color="primary"
                size="small"
                className={submitBtn}
                disableElevation={true}
              >Generate pin</Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatch = (dispatch) => ({
  generatePin: (pin) => console.log({ pin }) // eslint-disable-line
});

export default connect(null, mapDispatch)(ScratchCard);
