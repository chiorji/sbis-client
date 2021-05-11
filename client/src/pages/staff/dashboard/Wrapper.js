import Overview from './Overview';

const Wrapper = ({tab}) => {
  switch (tab) {
  case 'overview':
    return <Overview />;

  default:
    return <h1>Oops! not implmented yet!</h1>;
  }
};

export default Wrapper;
