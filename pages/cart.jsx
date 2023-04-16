import CartItemList from "@components/CartItemList/CartItemList";
import CartSummary from "@components/CartSummary/CartSummary";
import Layout from "@components/Layaout/Layout";
import { useCart, useCartMutations } from "@store/Cart";
import React from "react";
import { Divider } from "semantic-ui-react";

const CartPage = () => {
    const { items, count } = useCart()
    const { removeFromCart } = useCartMutations()

    return (
        <Layout>
            <CartItemList items={items} removeFromCart={removeFromCart}/>
            <Divider />
            <CartSummary totalAmount={count} />
            
        </Layout>
    )
}

export default CartPage