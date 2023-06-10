'use client'

import Calendar from "@/components/Calendar";
import { Grid, Typography, Stack, Button } from "@mui/joy";
import Input from "@/components/Input";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Grid container spacing={2} sm={12} md={8}>
        <Grid xs={12}>
          <Typography level="h1">Welcome</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography level="h2">Choose your destination</Typography>
        </Grid>

        <Grid container xs={8}>
          <Grid xs={6}>
            <Input />
          </Grid>
          <Grid xs={6}>
            <Calendar />
          </Grid>
          <Grid xs={6}>
            <Input />
          </Grid>
          <Grid xs={6}>
            <Calendar />
          </Grid>
        </Grid>

        <Grid container xs={4}>
          <Button>SEARCH</Button>
        </Grid>
      </Grid>
    </Layout>
  )
}