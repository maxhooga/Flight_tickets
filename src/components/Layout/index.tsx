import React, { useContext } from "react";
import { Sheet } from "@mui/joy"
import Header from "./Header";
import { Context } from "../Context";


type Props = {
  children: 
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[];
}

const Layout = ({ children }: Props) => {
  const context = useContext(Context);
  return (
    <Context.Provider value={context}>
      <Sheet variant="outlined" sx={{ padding: "10px" }}>
        <Header />
        { children }
      </Sheet>
    </Context.Provider>
  )
}

export default Layout