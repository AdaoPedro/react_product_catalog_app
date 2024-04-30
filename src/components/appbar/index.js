import { useMediaQuery, useTheme } from "@mui/material"
import AppbarMobile from "./appbarMobile"
import AppbarDesktop from "./appbarDesktop"

const Appbar = () => {
   const theme = useTheme()

   //if it is true then that's means we the client is a mobile/tablet device
   const matches = useMediaQuery(theme.breakpoints.down("md"))
   
    return (
        <>
            {matches
                ? <AppbarMobile matches={matches} />
                : <AppbarDesktop matches={matches} />
            }
        </>
    )
}

export default Appbar