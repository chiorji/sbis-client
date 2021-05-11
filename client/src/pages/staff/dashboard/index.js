import Wrapper from './Wrapper';
import {useQuery} from '../../../utils';

const Dashboard = () => {
  const query = useQuery();
  return (
    <Wrapper tab={query.get('tab')} />
  );
};

export default Dashboard;
