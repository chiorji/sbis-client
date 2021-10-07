import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  banner: {
    minHeight: '75vh'
  },
  carouselBox: {
    height: '75vh'
  },
  carouselImg: {
    height: '100%',
    width:  'auto'
  },
  textBox: {
    backgroundColor: theme.palette.primary.dark,
    color:           theme.palette.grey[200],
    display:         'flex',
    flexDirection:   'column',
    justifyContent:  'center'
  }
}));

const Banner = () => {
  const { banner, textBox, carouselBox, carouselImg } = useStyles();

  return (
    <Box width={1} className={banner}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <Typography component="div" className={carouselBox}>
          <div className={clsx(carouselImg, textBox)}>
            <Typography variant="h1">Success Builders</Typography>
            <Typography variant="h4">We&#39;re into the art of building dreams</Typography>
          </div>
        </Typography>
        <Typography component="div" className={carouselBox}>
          <div className={clsx(carouselImg, textBox)}>
            <Typography variant="h1">Success Builders</Typography>
            <Typography variant="h4">Equiping pupils for the greater good</Typography>
          </div>
        </Typography>
        <Typography component="div" className={carouselBox}>
          <div className={clsx(carouselImg, textBox)}>
            <Typography variant="h1">Success Builders</Typography>
            <Typography variant="h4" component="em">You dream, we build...</Typography>
          </div>
        </Typography>
      </Carousel>
    </Box>
  );
};

export default Banner;
