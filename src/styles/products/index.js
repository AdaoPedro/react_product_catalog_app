import {styled, Box, IconButton, Button} from "@mui/material"
import {colors} from "./../theme"
import {slideInBottom, slideInRight} from "./../../animation"
import { rootShouldForwardProp, slotShouldForwardProp } from "@mui/material/styles/styled"


export const Product = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        position: "relative"
    }
}))

export const ProductImage = styled("img")(({src, theme}) => ({
    src: `url(${src})`,
    width: "100%",
    background: colors.light_gray,
    padding: "10px",
    [theme.breakpoints.down("md")]: {
        width: "80%",
        padding: "24px"
    }
}))

export const ProductActionButton = styled(IconButton)(() => ({
    background: colors.white,  
    margin: 4
}))

export const ProductFavButton = styled(
    ProductActionButton,
    {shouldForwardProp: (prop) => prop !== "isFav"}
)(({isFav, theme}) => ({
    color: isFav ? colors.primary : colors.light,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 0,
        top: 0
    }
}))

export const ProductAddToCart = styled(
    Button,
    {shouldForwardProp: (prop) => prop !== "isFav"}
)(({show, theme}) => ({
    background: colors.secondary,
    opacity: 0.9,
    width: "120px",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "2%",
        width: "300px",
        padding: "10px 5px"
    },
    animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
}))


export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}))


export const ProductActionWrapper = styled(Box)(({show, theme}) => ({
    [theme.breakpoints.up("md")]: {
        display: show ? "visible" : "none",
        position: "absolute",
        right: 0,
        top: "20%",
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    }
}))