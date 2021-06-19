import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const IOSSwitch = withStyles((theme) => ({
  root: {
    width:       60,
    height:      26,
    padding:     0,
    marginLeft:  theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  switchBase: {
    padding:     1,
    '&$checked': {
      transform:    'translateX(35px)',
      color:        theme.palette.common.white,
      '& + $track': {
        backgroundColor: theme.palette.primary.dark,
        opacity:         1,
        border:          'none'
      }
    },
    '&$focusVisible $thumb': {
      color:  '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width:  24,
    height: 24
  },
  track: {
    borderRadius:    26 / 2,
    border:          `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.common.white,
    opacity:         1,
    transition:      theme.transitions.create(['background-color', 'border'])
  },
  checked:      {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root:       classes.root,
        switchBase: classes.switchBase,
        thumb:      classes.thumb,
        track:      classes.track,
        checked:    classes.checked
      }}
      {...props}
    />
  );
});

const Switches = ({ startLabel, endLabel, onChange, isTermly }) => {
  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <span>{startLabel || 'Off'}</span>
        <FormControlLabel
          control={<IOSSwitch checked={isTermly} onChange={onChange}/>}
          label={endLabel || 'On'}
        />
      </Grid>
    </Typography>
  );
};

export default Switches;
