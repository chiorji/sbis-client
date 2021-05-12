import {connect} from 'react-redux';
import ResponsiveDrawer from '../staff/Nav';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding:  theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar
}));

const Container = ({username, children}) => {
  const {root, toolbar, content} = useStyles();
  return (
    <section className={root}>
      <ResponsiveDrawer username={username} />
      <main className={content}>
        <div className={toolbar} />
        {children}
      </main>
    </section>
  );
};

const mapState = ({staff}) => ({
  username: staff.userData.username
});

export default connect(mapState)(Container);
