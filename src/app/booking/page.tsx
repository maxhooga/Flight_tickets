'use client'

import { Grid } from "@mui/joy";
import Layout from "@/components/Layout";

export default function Booking() {
  return (
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