import { useCartMutations } from "@store/Cart";
import React, { useState } from "react";
import { Icon, Input, Transition } from "semantic-ui-react";

const addToCartRequest = () => {
    return new Promise((resolve, reject) => {
        window.setTimeout(resolve, 600)
    })
}

const validate = (quantity) => {
    let error = ''
    if (quantity < 1) error = "Can't be blank"
    return error
}

const AddToCart = ({ product }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [visible, setVisible] = useState(false)
    const { addTocart } = useCartMutations()

    const toggleMessage = () => {
        setTimeout(() => {
            setVisible(false)
        }, 1000)
    }

    const handleSubmit = async () => {
        const error = validate(quantity)
        setError(error)

        if (!error) {
            setLoading(true)
            addToCartRequest().then(() => {
                addTocart(product, quantity)
                setLoading(false)
                setQuantity(quantity)
                setVisible(true)
                toggleMessage()
            }).catch((err) => {
                setError(`Error: ${err}` || 'Something went wrong')
                setLoading(false)
            })
        }
    }

    const handleChange = ({ target }) => setQuantity(parseInt(target.value, 10))

    return (
        <>
            <Input 
                type="number"
                placeholder="Quantity"
                value={quantity}
                min={1}
                step={1}
                error={!!error}
                onChange={handleChange}
                action={{
                    color: 'green',
                    content: 'Add to Cart',
                    icon: 'plus cart',
                    onClick: handleSubmit,
                    loading,
                    disabled: loading
                }}
            />
            {error && (
                <div style={{color: 'red', position: 'absolute'}}>{error}</div>
            )}
            <Transition duration={{hide: 500, show: 500}} visible={visible}>
                <div style={{color: 'green', position: 'absolute'}}>
                    <Icon name="check" />
                    Added to cart
                </div>
            </Transition>
        </>
    )
}

export default AddToCart