import React from 'react';
import Slider from 'react-slick';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { listing } from '../../utils';

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
  },
  card: {
    border:    `1px solid ${theme.palette.grey[300]}`,
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  media: {
    height: 200
  },
  mediaHeading: {
    color: theme.palette.primary.dark
  },
  cardWrap: {
    margin: theme.spacing(2)
  }
}));

const Staff = () => {
  const { root, heading } = useStyles();
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
              <AdministratorsList {...staff} key={idx} />
            ))}
          </Slider>
        </Typography>
      </Container>
    </Box>
  );
};

function AdministratorsList({ avatar, name, description }) {
  const { media, meadiHeading, cardWrap } = useStyles();
  return (
    <div className={cardWrap}>
      <Card title={name}>
        <CardActionArea>
          <CardMedia
            title={name}
            image={avatar}
            className={media}
          />
          <CardContent>
            <Typography variant="h5" className={meadiHeading}>{name}</Typography>
            <Typography variant="body2" component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Staff;
