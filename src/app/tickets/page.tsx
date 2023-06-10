'use client'

import React, { useContext } from "react";
import { Grid } from "@mui/joy";
import Layout from "@/components/Layout";
import Ticket from "@/components/Ticket";
import Filters from "@/components/Filters";
import { Context } from "../../components/Context";

export default function Tickets() {
  const context = useContext(Context);
  return (
    <Layout>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid xs={12}>otkud-kam</Grid>
        <Grid xs={4} sx={{ border: 1, padding: "5px" }}>
          <Filters />
        </Grid>
        <Grid xs={8} sx={{ border: 1 , padding: "5px" }}>
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