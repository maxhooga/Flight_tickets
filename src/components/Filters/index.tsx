import { Box, Stack } from "@mui/material"
import Seats from "./Seats"
import PriceRange from "./PriceRange"
import Duration from "./Duration"

const Filters = () => {
  return (
    <Box sx={{ padding: "25px" }}>
      <Stack direction="column" spacing={5}>
        <Seats />
        <PriceRange />
        <Duration />
      </Stack>
    </Box>
  )
}

export default Filters