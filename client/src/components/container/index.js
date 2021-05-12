import Nav from '../nav';

const Wrapper = ({links, children}) => {
  return (
    <>
      <Nav links={links} topName="Admin Dashboard" />
      {children}
    </>
  );
};

export default Wrapper;
