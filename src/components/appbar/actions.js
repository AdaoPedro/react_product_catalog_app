import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
    MyList,
    ActionIconsContainerMobile,
    ActionIconsContainerDesktop
} from "../../styles/appbar";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
import { colors } from "./../../styles/theme"

export default function Actions ({matches}) {
    const Component = matches
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop

    return (
        <Component>
            <MyList type = "row">
                <ListItemButton
                    sx={{justifyContent: "center"}}
                >
                    <ListItemIcon
                        sx={{justifyContent: "center", alignItems: "center", color: matches && colors.secondary}}
                    >
                        <ShoppingCardIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{justifyContent: "center"}}
                >
                    <ListItemIcon
                        sx={{justifyContent: "center", alignItems: "center", color: matches && colors.secondary}}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{justifyContent: "center"}}
                >
                    <ListItemIcon
                        sx={{justifyContent: "center", alignItems: "center", color: matches && colors.secondary}}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    )
}