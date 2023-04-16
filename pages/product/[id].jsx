import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layaout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

const ProductItem = () => {
    const [product, setProduct] = useState(null);
    const { query: { id } } = useRouter()
    useEffect(() => {
        id && window
            .fetch(`/api/avo/${id}`)
            .then(response => response.json())
            .then((data) => setProduct(data))
    }, [id])

    return (
        <Layout>
            {product && <ProductSummary product={product} />}
        </Layout>
        
    )
}

export default ProductItem