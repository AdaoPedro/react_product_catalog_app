import { createTheme } from "@mui/material";
import { lighten } from "polished";

export const colors = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
  };


  const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        },
        MyShopButton: {
            styleOverrides: {
                root: {
                    color: colors.white
                },
                primary: {
                    background: colors.primary,
                    "&:hover": {
                        background: lighten(0.05, colors.primary)
                    }
                },
                secondary: {
                    background: colors.secondary,
                    "&:hover": {
                        background: lighten(0.05, colors.secondary)
                    }
                }
            }
        }
    }
  })

  export default theme;