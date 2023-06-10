'use client'

import React, { useContext } from "react";
import Calendar from "@/components/Calendar";
import { Grid, Stack, Input } from "@mui/joy";
import { Context } from "../components/Context";
import Layout from "@/components/Layout";
import { Paper } from "@mui/material";
import Ticket from "@/components/Ticket";

export default function Home() {
  const context = useContext(Context);
  return (
    <Layout>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid xs={12}>
          <Paper elevation={1} sx={{padding: "25px", backgroundColor: "lightblue"}}>
            <Stack direction="row" justifyContent="space-around">
              <Input placeholder="from"/>
              <Input placeholder="to"/>
              <Calendar />
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12}>
          <Paper elevation={1} sx={{padding: "25px", backgroundColor: "lightblue"}}>
            <Stack direction="row" justifyContent="space-around">
              <Input placeholder="price"/>
              <Input placeholder="duration"/>
              <Input placeholder="seats"/>
            </Stack>
          </Paper>
        </Grid>

        <Grid xs={12} sx={{ padding: "5px" }}>
          {context.map((ticket, index) => {
            return (
              <Ticket
                from={ticket.from}
                to={ticket.to}
                departure={ticket.departure}
                arrival={ticket.arrival}
                duration={ticket.duration}
                price={ticket.price}
              />
            )
          })}
        </Grid>
      </Grid>
    </Layout>
  )
}