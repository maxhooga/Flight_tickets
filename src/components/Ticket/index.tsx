
import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';

type Props = {
  from: string,
  to: string,
  departure: string,
  arrival: string,
  duration: string,
  price: number,
  id: number
}

const Ticket = ({ from, to, departure, arrival, duration, price, id }:Props) => {
  const router = useRouter();
  

  return (
    <Box>
      <Paper elevation={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: "25px" }}>
          <Stack>
            <Typography>{from}</Typography>
            <Typography>{departure}</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIcon />
            <Typography>{duration}</Typography>
          </Stack>
          <Stack>
            <Typography>{to}</Typography>
            <Typography>{arrival}</Typography>
          </Stack>

          <Button onClick={() => router.push(`tickets/${id}`)}>
            <Stack>
              <Typography>Reservovat</Typography>
              <Typography>za</Typography>
              <Typography>{price}kč</Typography>
            </Stack>
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Ticket