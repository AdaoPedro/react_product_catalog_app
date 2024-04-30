import { Typography, styled, Box, List } from "@mui/material"
import { colors } from "./../theme"
import "@fontsource/montez"

//container
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px"
}))

//header
export const AppbarHeader = styled(Typography)( () => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"Montez", "cursive"',
    color: colors.secondary,
}) )

//list
export const MyList = styled(List)(({type}) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center"
}))


export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: "flex",
    background: colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    zIndex: 99,
    borderTop: `1px solid ${colors.border}`
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))