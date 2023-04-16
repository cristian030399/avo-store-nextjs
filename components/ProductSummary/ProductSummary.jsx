import React from "react";
import { Item, Label } from "semantic-ui-react";
import ProductAttributes from "./ProductAttributes";
import AddToCart from "./AddToCart";

const ProductSummary = ({ product }) => (
    <>
        <Item.Group as='section'>
            <Item style={{alignItems: 'center'}}>
                <Item.Image size="medium">
                    <img src={product.image} alt={product.name} />
                </Item.Image>
                <Item.Content>
                    <Item.Header as={'h1'}>{product.name}</Item.Header>
                    <Item.Description>
                        <p>{product.price}</p>
                        <Label>{`SKU: ${product.sku}`}</Label>
                    </Item.Description>
                    <Item.Extra>
                        <AddToCart product={product}/>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
        <ProductAttributes {...product.attributes} />
    </>
)

export default ProductSummary