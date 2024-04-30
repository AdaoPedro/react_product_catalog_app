import { ListItemText, ListItemButton, ListItemIcon, IconButton } from "@mui/material"
import {
    AppbarContainer,
    AppbarHeader,
    MyList,
} from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import Actions from "./actions"

const AppbarMobile = ({matches}) => {

    return ( 
            <AppbarContainer>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <AppbarHeader textAlign={"center"} variant="h4">
                    My Bags
                </AppbarHeader>
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <Actions matches={matches} />
            </AppbarContainer> 
    )
}

export default AppbarMobile