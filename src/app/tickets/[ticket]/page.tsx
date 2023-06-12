'use client'

import { Context } from "@/components/Context";
import { useContext } from "react";
import { Grid } from "@mui/joy";
import Layout from "@/components/Layout";

type Props = {
  params: {
    ticket: string
  }
}
const page = ({ params }:Props) => {
  const context = useContext(Context);
  const { from, to, departure, arrival, duration, price } = { ...context.filter((item) => item.id.toString() === params.ticket)[0] }
  
  return(
    <Layout>
      <Grid container spacing={2} sm={12} md={8}>
        <Grid xs={12}> pocet cestujicit select number</Grid>
        <Grid xs={6}>
          people information
        </Grid>
        <Grid xs={6}>
          information about flight
        </Grid>
      </Grid>
    </Layout>
  )
}

export default page