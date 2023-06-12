'use client'

import { Context } from "@/components/Context";
import { useContext } from "react";


type Props = {
  params: {
    ticket: string
  }
}
const page = ({ params }:Props) => {
  const context = useContext(Context);
  const result = context.filter((item) => item.id.toString() === params.ticket)[0]
  return(
    <>
    
    </>
  )
}

export default page