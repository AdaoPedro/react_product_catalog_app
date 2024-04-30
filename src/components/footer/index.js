import {Box, Button, Grid, List, ListItemText, Stack, Typography} from "@mui/material"
import { FooterTitle, SubscribeTextField } from "../../styles/footer"
import {colors} from "./../../styles/theme"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import SendIcon from "@mui/icons-material/Send"

export default function Footer(){
    return (
        <Box
            sx={{
                background: colors.shaft,
                color: colors.white,
                p: {xs: 4, md: 10},
                pt: 12,
                pb: 12,
                fontSize: {xs: "12px", md: "14px"}
            }}
        >
            <Grid
                container spacing={2} justifyContent="center"
            >
                <Grid
                    item md={6} lg={4}
                >
                    <FooterTitle variant="body1">
                        About us
                    </FooterTitle>
                    <Typography variant="caption2">
                        A lot of time and research goes into making these projects and if
                        you enjoy the videos, consider supporting the channel by sharing,
                        subscribing and liking.
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: colors.dove_gray
                        }}
                    >
                        <FacebookIcon sx={{mr: 1}} />
                        <TwitterIcon sx={{mr: 1}} />
                        <InstagramIcon  />
                    </Box>
                </Grid>
                <Grid
                    item
                    md={6}
                    lg={2}
                >
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">About us</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Order tracking</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Privacy &amp; Policy</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Terms &amp; Conditions</Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid
                    item
                    md={6}
                    lg={2}
                >
                    <FooterTitle variant="body1">My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Login</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">My Cart</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">My Account</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">Wishlist</Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid
                    item
                    md={6}
                    lg={4}
                >
                      <FooterTitle variant="body1">Newsletter</FooterTitle>
                      <Stack>
                        <SubscribeTextField
                            color="primary"
                            label="Email address"
                            variant="standard"
                        >
                        </SubscribeTextField>
                        <Button
                            startIcon={<SendIcon sx={{color: colors.white}} />}
                            sx={{mt: 4, md: 4}}
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                        
                      </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}