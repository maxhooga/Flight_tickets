import { Box, MenuItem, Typography } from '@mui/material';
import Select from '@mui/material/Select';

const Duration = () => {
  return (
    <Box sx={{width: "100%"}}>
      <Typography>Duration</Typography>
      <Select label="Type of Event" placeholder="Select Type" sx={{width: "100%"}}>
        <MenuItem>fldjsa</MenuItem>
      </Select>
    </Box>
  )
}

export default Duration