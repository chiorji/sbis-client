import React from 'react';
import Slider from 'react-slick';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import StaffList from './StaffList';
import {listing} from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:                theme.palette.grey[200],
    paddingTop:                     theme.spacing(8),
    paddingBottom:                  theme.spacing(12),
    borderTop:                      `1px solid ${theme.palette.grey[300]}`,
    display:                        'block',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  heading: {
    textAlign:    'center',
    marginTop:    theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const Staff = () => {
  const {root, heading} = useStyles();
  return (
    <Box className={root}>
      <Container>
        <Typography variant="h4" className={heading}>
          Meet Our Administrators
        </Typography>
        <Typography component="section">
          <Slider {...{
            className:      '',
            centerMode:     true,
            infinite:       true,
            centerPadding:  '60px',
            slidesToShow:   3,
            speed:          500,
            autoplay:       true,
            draggable:      true,
            adaptiveHeight: true,
            responsive:     [
              {
                breakpoint: 1024,
                settings:   {
                  slidesToShow:   3,
                  slidesToScroll: 3,
                  infinite:       true,
                  dots:           true
                }
              },
              {
                breakpoint: 600,
                settings:   {
                  slidesToShow:   2,
                  slidesToScroll: 2,
                  initialSlide:   1
                }
              },
              {
                breakpoint: 480,
                settings:   {
                  slidesToShow:   1,
                  slidesToScroll: 1
                }
              }
            ]
          }}
          >
            {listing.map((staff, idx) => (
              <StaffList {...staff} key={idx} />
            ))}
          </Slider>
        </Typography>
      </Container>
    </Box>
  );
};

export default Staff;
