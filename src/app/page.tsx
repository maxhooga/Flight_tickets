'use client'

import React, { useContext, useState } from "react";
import Calendar from "@/components/Calendar";
import { Grid, Stack, Input } from "@mui/joy";
import { Context } from "../components/Context";
import Layout from "@/components/Layout";
import { Box, Paper } from "@mui/material";
import Ticket from "@/components/Ticket";


const filterTikets = (context, ticket) => {
  let result = context
  for(const key in ticket){
    if(ticket[key] !== ""){
      result = result.filter((flight) => flight[key] == ticket[key])
    }
  }
  return result
}

const Home = () => {
  const context = useContext(Context);
  const [fromState, setFromState] = useState("");
  const [toState, setToState] = useState("");
  const [priceState, setPriceState] = useState("");
  const [durationState, setDurationState] = useState("");

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Box>
            <Paper elevation={1} sx={{padding: "25px", backgroundColor: "lightblue"}}>
              <Stack spacing={2}>
                <Stack flexDirection="row">
                  <Input
                    placeholder="from"
                    onChange={(e) => {setFromState(e.target.value)}}
                  />
                  <Input placeholder="to"
                    onChange={(e) => {setToState(e.target.value)}}
                  />
                </Stack>
                <Calendar />
                <Input 
                  placeholder="price"
                  onChange={(e) => {setPriceState(e.target.value)}}
                />
                <Input
                  placeholder="duration"
                  onChange={(e) => {setDurationState(e.target.value + "h")}}
                />
              </Stack>
            </Paper>
          </Box>
        </Grid>

        <Grid xs={9}>
          {
            filterTikets(context, {
              from: fromState,
              to: toState,
              price: priceState,
              duration: durationState
            }).map((ticket: {
              from: string,
              to: string,
              departure: string,
              arrival: string,
              duration: string,
              price: number,
              id: number
            }, index: number) => {
              return (
                <Ticket
                  key={index}
                  {...ticket}
                />
              )
            })
          }
        </Grid>
      </Grid>
      
    </Layout>
  )
}

export default Home;