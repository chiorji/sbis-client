import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import makeStyles from '@material-ui/styles/makeStyles';
import GalleryList from './GalleryList';
import {items} from './items';

const useStyles = makeStyles(theme => ({
  header: {
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  gridContainer: {
    display:         'flex',
    flexWrap:        'wrap',
    justifyContent:  'space-around',
    overflow:        'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop:       theme.spacing(5),
    marginBottom:    theme.spacing(5)
  }
}));

const Gallery = () => {
  const {header, gridContainer} = useStyles();
  return (
    <>
      <Container component="section">
        <Grid container component="header" className={header}>
          <Grid item sm={6}>
            <Paper elevation={0}>
              <Typography variant="h4">Gallery</Typography>
              <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam, ipsam officiis fugit tempore aliquid esse corporis eligendi maxime! Repellat nemo inventore delectus illum magnam. Vel harum hic eius ex.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container component="section" className={gridContainer}>
        <GridList cellHeight="auto" spacing={12}>
          {items.map((item, index) => (
            <GalleryList {...item} key={index} />
          ))}
        </GridList>
      </Container>
    </>
  );
};

export default Gallery;
