import Link from 'next/link';
import React from 'react';
import { Card } from 'semantic-ui-react';

const mapProductsToCards = (products) => {
    return products.map(({ name, id, price, image }) => (
        <Link key={id} href='/product/[id]' as={`/product/${id}`} passHref>
            <Card
                header={name}
                image={image}
                meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
            />
        </Link>
    ))
}

const ProductList = ({ products }) => (
    <Card.Group itemsPerRow={2} stackable centered
        style={{ gap: '15px' }}>
        {mapProductsToCards(products)}
    </Card.Group>
)

export default ProductList