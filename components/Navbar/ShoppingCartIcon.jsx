import React from "react";
import styles from './ShoppingCartIcon.module.css'
import { Basket } from "@components/SVGIcons";

const ShoppingCartIcon = ({cartCount, name}) => {
    const showCartCount = () => {
        if (!cartCount) {
            return '(0)'
        }
        if (cartCount > 9) {
            return (
                <span>
                    9<sup>+</sup>
                </span>
            )
        }
        return `(${cartCount})`
    }

    return (
        <div className={styles.container}>
            <Basket />
            <div className={styles.text}>
                {`${name} `}
                {showCartCount()}
            </div>
        </div>
    )
}

export default ShoppingCartIcon