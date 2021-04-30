import  React from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
const useStyles = makeStyles(theme => ({
  hero: {
    border: '1px solid red'
  }
}));

const Hero = ({children}) => {
  const styles = useStyles();
  return (
    <Container className={styles.hero}>
      {children}
    </Container>
  );
};

export default Hero;
