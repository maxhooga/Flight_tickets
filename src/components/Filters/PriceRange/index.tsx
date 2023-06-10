import * as React from 'react';
import { Box, Slider } from '@mui/material';

function valuetext(value: number) {
  return `${value}°C`;
}

const PriceRange = () => {

  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  )
}

export default PriceRange