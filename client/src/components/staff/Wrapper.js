import Nav from '../nav';

const Wrapper = ({links, children}) => {
  return (
    <>
      <Nav links={links} />
      {children}
    </>
  );
};

export default Wrapper;
