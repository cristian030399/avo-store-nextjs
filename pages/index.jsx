import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layaout/Layout';
import ProductList from '@components/ProductList/ProductList';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default Home;
