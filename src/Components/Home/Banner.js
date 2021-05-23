import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import first from '../../assets/img/8.jpg';
import second from '../../assets/img/7.jpg';

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
  }
}));

const Banner = () => {
  const { banner, carouselBox, carouselImg } = useStyles();

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
          <img alt="first slide" src={second} className={carouselImg}/>
          <p>First carousel slide</p>
        </Typography>
        <Typography component="div" className={carouselBox}>
          <img alt="second slide" src={first} className={carouselImg}/>
          <p>Second carousel slide</p>
        </Typography>
        <Typography component="div" className={carouselBox}>
          <img alt="third slide" src={second} className={carouselImg}/>
          <p>Third carousel slide</p>
        </Typography>
      </Carousel>
    </Box>
  );
};

export default Banner;
