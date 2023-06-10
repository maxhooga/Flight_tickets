import { Box, MenuItem, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Seats = () => {
  return (
    <Box sx={{width: "100%"}}>
      <Typography>Available Seats</Typography>
      <Select label="Type of Event" placeholder="Select Type" sx={{width: "100%"}}>
        <MenuItem>fldjsa</MenuItem>
      </Select>
    </Box>
  )
}

export default Seats