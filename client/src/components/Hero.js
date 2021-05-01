import  React from 'react';
import Box from '@material-ui/core/Box';

const Hero = ({children}) => {
  return (
    <Box width={1}>
      {children}
    </Box>
  );
};

export default Hero;
