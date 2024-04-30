import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import { useState } from "react";

export default function SingleProductDesktop({product, matches, theme}) {

    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true)
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} theme={theme} />
                <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                {
                    showOptions &&
                    <ProductAddToCart show={showOptions} variant="contained">
                        Add to Cart
                    </ProductAddToCart>
                }
                
                <ProductActionWrapper show={showOptions}>
                    <Stack direction="column">
                        <ProductActionButton color="primary">
                            <ShareIcon />
                        </ProductActionButton>
                        <ProductActionButton color="primary">
                            <FitScreenIcon />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductMeta product={product} theme={theme} matches={matches} />
        </>
    )
}