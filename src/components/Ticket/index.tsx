import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { Context } from "../Context";
import { useContext } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


type Props = {
  from: string,
  to: string,
  departure: string,
  arrival: string,
  duration: string,
  price: number
}

const Ticket = ({ from, to, departure, arrival, duration, price }:Props) => {
  const context = useContext(Context)

  return (
    <Box>
      <Paper elevation={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: "25px" }}>
          <Stack>
            <Typography>{from}</Typography>
            <Typography>{departure}</Typography>
          </Stack>
          <ArrowForwardIcon />
          <Stack>
            <Typography>{to}</Typography>
            <Typography>{arrival}</Typography>
          </Stack>

          <Button>Reservovat</Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Ticket