import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"

export default function Banner() {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))


    return (
        <BannerContainer theme={theme}>
            <BannerImage src="./images/banner/banner.png" theme={theme} />

            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
                    tempor incididunt ut labore et dolore magna
                </BannerDescription>    
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}