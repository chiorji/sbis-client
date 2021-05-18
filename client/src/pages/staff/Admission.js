import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AdmissionForm from '../../components/staff/AdmissionForm';

const Admission = () => {
  return (
    <Box width={1} component="section">
      <Typography variant="h4">Register Student</Typography>
      <AdmissionForm />
    </Box>
  );
};



export default Admission;














/*

As a staff, I should be able to enroll a candidate with their
- First Name
- Last Name
- Middle Name
- Guardian name
- Guardian home address
- Guardian contact details
- Class on initial admission
- Gender
- Nationality
- Religion
- Blood group
- Genotype
- State of origin
- State of residence
- Local Govt of origin
- Local govt of residence

*/