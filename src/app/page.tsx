'use client'

import React, { useContext } from "react";
import Calendar from "@/components/Calendar";
import { Grid, Stack, Input } from "@mui/joy";
import { Context } from "../components/Context";
import Layout from "@/components/Layout";
import { Box, Paper } from "@mui/material";
import Ticket from "@/components/Ticket";

export default function Home() {
  const context = useContext(Context);
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Box>
            <Paper elevation={1} sx={{padding: "25px", backgroundColor: "lightblue"}}>
              <Stack spacing={2}>
                <Stack flexDirection="row">
                  <Input placeholder="from"/>
                  <Input placeholder="to"/>
                </Stack>
                <Calendar />
                <Input placeholder="price"/>
                <Input placeholder="duration"/>
                <Input placeholder="seats"/>
              </Stack>
            </Paper>
          </Box>
        </Grid>

        <Grid xs={9}>
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