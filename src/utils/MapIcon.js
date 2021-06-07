import React from 'react';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import LibraryAddCheckRoundedIcon from '@material-ui/icons/LibraryAddCheckRounded';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PublishIcon from '@material-ui/icons/Publish';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdjustIcon from '@material-ui/icons/Adjust';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import FiberPinIcon from '@material-ui/icons/FiberPin';

const MapIcon = ({ name, props }) => {
  switch (name) {
  case 'overview':
    return <AllInclusiveIcon {...props}/>;

  case 'addStudent':
    return <PersonAddRoundedIcon {...props} />;

  case 'studentList':
    return <PeopleOutlineIcon {...props} />;

  case 'addStaff':
    return <PersonAddOutlinedIcon {...props}/>;

  case 'addResult':
    return <LibraryAddCheckRoundedIcon {...props}/>;

  case 'staffList':
    return <GroupIcon {...props}/>;

  case 'createSubject':
    return <LibraryBooksIcon {...props}/>;

  case 'subjects':
    return <ListAltIcon {...props}/>;

  case 'publishResult':
    return <PublishIcon {...props} />;

  case 'signOut':
    return <ExitToAppIcon {...props} />;

  case 'generatePin':
    return <FiberPinIcon {...props} />;

  default:
    return <AdjustIcon {...props} />;
  }
};

export default MapIcon;
