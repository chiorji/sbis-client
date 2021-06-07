import ResponsiveDrawer from '../Staff/Nav';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding:  theme.spacing(4)
  },
  toolbar: theme.mixins.toolbar
}));

const Container = ({ children }) => {
  const { root, toolbar, content } = useStyles();
  return (
    <section className={root}>
      <ResponsiveDrawer />
      <main className={content}>
        <div className={toolbar} />
        {children}
      </main>
    </section>
  );
};


export default Container;
