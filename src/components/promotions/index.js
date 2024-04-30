import { useEffect, useRef, useState } from "react"
import { MessageText, PromotionsContainer } from "../../styles/promotions"
import {Box, useTheme, Slide} from "@mui/material"

const messages = [
    "20% off on your first order",
    "Summer sale starts now, visit any store",
    "Please like and subscribe :)"
]

export default function Promotions() {

    const containerRef = useRef()
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => {  
        
        setTimeout(() => {
            setShow(false)
        }, 3000)

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)

            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 4000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const theme = useTheme()

    return (
        <PromotionsContainer
            theme={theme}
            ref={containerRef}
        >
            <Slide
                direction={show ? "left" : "right"}
                in={show}
                timeout={{enter: 500, exit: 100}}
                container={containerRef.current}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <MessageText theme={theme}>{messages[messageIndex]}</MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}