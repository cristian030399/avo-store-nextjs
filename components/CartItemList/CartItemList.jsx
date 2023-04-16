import Link from "next/link";
import React from "react";
import { Button, Item, Loader, Message } from "semantic-ui-react";

const CartItemList = ({items, removeFromCart, loading = false}) => {
    if(loading) return <Loader active inline='centered' />

    if(items.length === 0) {
        return (
            <Message warning as="section">
                <Message.Header>Your cart is empty</Message.Header>
                <p>You will need to add some items to the cart before you can checkout.</p>
            </Message>
        )
    }

    const mapCartItemsToItems = (items) => {
        return items.map((cartItem) => {
            const {id, name, quantity, price, image} = cartItem

            return {
                childKey: id,
                header: (
                    <Link href="/product/[id]" as={`/product/${id}`} passHref>
                        <Item.Header>{name}</Item.Header>
                    </Link>
                ),
                image: (
                    <Item.Image 
                        src={image}
                        alt={name}
                        size="small"
                        style={{background: '#f2f2f2'}}
                    />
                ),
                meta: `${quantity} x ${price}`,
                description: 'Some more information goes here...',
                extra: (
                    <Button 
                        basic
                        icon="remove"
                        floated="right"
                        onClick={() => removeFromCart(cartItem)}
                    />
                )
            }
        })
    }

    return <Item.Group divided items={mapCartItemsToItems(items)} as="section" />
}

export default CartItemList