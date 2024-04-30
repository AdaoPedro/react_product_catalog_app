import { Typography, TextField} from "@mui/material"
import styled from "@emotion/styled"
import {colors} from "./../theme"


export const FooterTitle = styled(Typography)(() => ({
    textTransform: "uppercase",
    marginBottom: "1em"
}))

export const SubscribeTextField = styled(TextField)(() => ({
    ".MuiInputLabel-root": {
        color: colors.secondary
    },
    ".MuiInput-root:before": {
        borderBottom: `1px solid ${colors.secondary}`
    }
}))