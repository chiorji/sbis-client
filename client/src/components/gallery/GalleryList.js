import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  gridItem: {
    width:  300,
    height: 250,
    border: `2px solid ${theme.palette.background.paper}`
  }
}));

const GalleryItem = ({image, description}) => {
  const {gridItem} = useStyles();
  return (
    <GridListTile className={gridItem}>
      <img src={image} alt="" />
      <GridListTileBar
        title={description}
      />
    </GridListTile>
  );
};

export default GalleryItem;
