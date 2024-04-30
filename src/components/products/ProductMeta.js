import { ProductMetaWrapper } from "../../styles/products";
import {Typography} from "@mui/material"

export default function ProductMeta({product, theme, matches}) {
    return (
        <ProductMetaWrapper theme={theme}>
            <Typography
                variant= {matches ? "h6" : "h5"}
                lineHeight={2}
            >
                {product.name}
            </Typography>
            <Typography
                variant= {matches ? "caption" : "body1"}
            >
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}