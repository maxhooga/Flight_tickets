import { Grid } from "@mui/joy";

const Header = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <img src="https://placehold.co/120x70" />
      </Grid>
      <Grid xs={6}  justifyContent="flex-end">
        Breadcrumbs
      </Grid>
    </Grid>
  )
}

export default Header;