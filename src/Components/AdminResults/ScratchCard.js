import React, { useEffect, useState } from 'react';
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
import MaterialTable from 'material-table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { getCards, generateCard, deleteCard } from '../../store/staff/actions';

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

const ScratchCard = ({ genCards, pins, getAllCard, isLoading, deleteCard }) => {
  const { gridItem, rowText, submitBtn } = useStyles();
  const [quantity, setQuantity] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    genCards(quantity);
  };

  useEffect(() => {
    getAllCard();
  }, [getAllCard]);

  return (
    <Container>
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
        <Grid item xs={12}>
          <MaterialTable
            title={`Total: ${pins.length}`}
            columns={[
              { title: 'Pin.', field: 'pin' },
              { title: 'Serial', field: 'serial' },
              { title: 'Usage', field: 'usage_count' },
              { title: 'Generated on', field: 'created_at', type: 'date', dateSetting: { locale: 'en-NG', format: 'dd/MM/yyyy' } },
              { title: 'Expiration', field: 'updated_at', type: 'date', dateSetting: { locale: 'en-NG', format: 'dd/MM/yyyy' } }
            ]}
            options={{
              search:              false,
              sorting:             false,
              actionsColumnIndex:  -1,
              paging:              true,
              pageSize:            10,
              pageSizeOptions:     [10, 20, 50, 100],
              debounceInterval:    600,
              emptyRowsWhenPaging: false,
              tableLayout:         'auto'
            }}
            data={pins}
            actions={[
              {
                icon:    DeleteForeverIcon,
                tooltip: 'Delete',
                onClick: (e, rowData) => {
                  deleteCard({ pin: rowData.pin, serial: rowData.serial });
                }
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
            isLoading={isLoading}
          />
        </Grid>
        <small>&copy; Brightside Technologies {new Date().getFullYear()}
          {'||'} All Right Reserved</small>
      </Grid>
    </Container>
  );
};

const mapDispatch = (dispatch) => ({
  genCards:   (qty) => dispatch(generateCard(qty)),
  getAllCard: () => dispatch(getCards()),
  deleteCard: (pin) => dispatch(deleteCard(pin))
});

const mapState = ({ staff }) => ({
  pins:      staff.pins,
  isLoading: staff.isLoading
});

export default connect(mapState, mapDispatch)(ScratchCard);
