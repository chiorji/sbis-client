/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';
import { getCards, generateCard } from '../../store/staff/actions';

/**
 * @TODO: Remove the card delete feature, card should be auto-removed
 */
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

const ScratchCard = ({ genCards, pins, getAllCard, isLoading }) => {
  const { gridItem, rowText, submitBtn } = useStyles();
  const [quantity, setQuantity] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    genCards(quantity);
  };

  useEffect(() => {
    getAllCard();
  }, [getAllCard]);

  const columns = [
    {
      id:         1,
      headerName: 'Pin',
      field:      'pin',
      width:      200,
      flex:       1
    },
    {
      id:         2,
      headerName: 'Serial',
      field:      'serial',
      width:      200
    },
    {
      id:         3,
      headerName: 'Usage',
      field:      'usage_count',
      width:      200
    },
    {
      id:             4,
      headerName:     'Generated on',
      field:          'created_at',
      type:           'date',
      width:          250,
      valueFormatter: ({ value }) => {
        return new Date(value).toDateString();
      }
    },
    {
      id:             5,
      headerName:     'Expiration',
      field:          'updated_at',
      type:           'date',
      width:          200,
      valueFormatter: ({ value }) => {
        return new Date(value).toDateString();
      }
    }
  ];

  return (
    <>
      <Typography variant="h4">Scratch Card</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} className={gridItem}>
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
                  {[20, 50, 80, 100 ]
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
        <Grid item xs={12}>
          <DataGrid
            columns={columns}
            rows={pins}
            loading={isLoading}
            pageSize={10}
            autoHeight
            disableColumnMenu
            hideFooterSelectedRowCount
            disableColumnSelector
            onRowClick={({ row: { pin, serial } }, e) => {
              console.log({ pin, serial });
            }
            }
          />
        </Grid>
        <small>&copy; Brightside Technologies {new Date().getFullYear()}
          {'||'} All Right Reserved</small>
      </Grid>
    </>
  );
};

const mapDispatch = (dispatch) => ({
  genCards:   (qty) => dispatch(generateCard(qty)),
  getAllCard: () => dispatch(getCards())
});

const mapState = ({ staff }) => ({
  pins:      staff.pins,
  isLoading: staff.isLoading
});

export default connect(mapState, mapDispatch)(ScratchCard);
