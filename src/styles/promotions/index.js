import {Box, styled, Typography} from "@mui/material"
import {colors} from "./../theme"

export const PromotionsContainer = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    background: colors.secondary,
    [theme.breakpoints.up("md")]: {
        padding: "40px 0px"
    },
}))

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: ["Montez", "cursive"].join(","),
    color: colors.white,
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem"
    },
}))