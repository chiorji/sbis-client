import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import makeStyles from '@material-ui/styles/makeStyles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { items } from './items';

const useStyles = makeStyles(theme => ({
  root: {
    display:                      'flex',
    flexDirection:                'column',
    justifyContent:               'center',
    [theme.breakpoints.up('md')]: {
      minHeight: '900px'
    }
  },
  header: {
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign:    'center',
    '& section':  {
      margin: '0 auto'
    }
  },
  gridItem: {
    width:  300,
    height: 250,
    border: `2px solid ${theme.palette.background.paper}`
  },
  gridWrap: {
    backgroundColor: 'transparent',
    marginTop:       theme.spacing(5),
    marginBottom:    theme.spacing(5)
  },
  gridContainer: {
    display:        'flex',
    flexWrap:       'wrap',
    justifyContent: 'center',
    overflow:       'hidden'
  }
}));

const Gallery = () => {
  const { root, header, gridWrap, gridContainer } = useStyles();
  return (
    <Container className={root} maxWidth="xl" id="gallery">
      <Container component="section">
        <Grid container component="header" className={header}>
          <Grid item sm={6} component="section">
            <Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
              <Typography variant="h4" gutterBottom>Gallery</Typography>
              <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam, ipsam officiis fugit tempore aliquid esse corporis eligendi maxime! Repellat nemo inventore delectus illum magnam. Vel harum hic eius ex.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container component="section" className={gridWrap}>
        <GridList cellHeight="auto" spacing={12} className={gridContainer}>
          {items.map((item, index) => (
            <GalleryItem {...item} key={index} />
          ))}
        </GridList>
      </Container>
    </Container>
  );
};

function GalleryItem({ image, description }) {
  const { gridItem } = useStyles();
  return (
    <GridListTile className={gridItem}>
      <img src={image} alt="" />
      <GridListTileBar
        title={description}
      />
    </GridListTile>
  );
};


export default Gallery;
