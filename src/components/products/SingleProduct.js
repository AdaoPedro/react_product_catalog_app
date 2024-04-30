import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"

export default function SingleProduct({product, matches, theme}) {
    return (
        <>
            <Product>
                <ProductImage src={product.image} theme={theme} />
                <ProductMeta product={product} theme={theme} matches={matches} />
                <ProductActionWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton color="primary">
                            <ShareIcon />
                        </ProductActionButton>
                        <ProductActionButton color="primary">
                            <FitScreenIcon />
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductAddToCart variant="contained">
                Add to Cart
            </ProductAddToCart>
        </>
    )
}