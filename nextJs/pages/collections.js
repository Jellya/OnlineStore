import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { getProductForHome, getCollection, getProductByCollection } from '@/lib/api'
import Head from 'next/head'
import Catalog from './catalog'
import Product from '@/components/common/Product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions.js'

export default function Collections({  homeProducts, preview, collections, productsByCollection }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  return (
    <>
      <Layout>
        <Head>
          <title>Collections</title>
        </Head>
        <Container>

          <h2>Collections</h2>
          {collections.length !== 0 && collections.map(itemCollection => {
            // TODO вынести в отдельный компонент
            return <div>{itemCollection.name}</div>
          })}

          {
            productsByCollection.length !==0 && 
            productsByCollection.map(product => (
            <Product {...product} cart={cart} addToCart={(id) => dispatch(addToCart(id))}/>))
          }

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({preview = null}) {
  const homeProducts = (await getProductForHome()) || [];
  const collections = (await getCollection()) || [];
  let productsByCollection = []
  if (collections.length !== 0) {
    productsByCollection = await getProductByCollection(collections[1].name)
  }
  return {
    props: { homeProducts, preview, collections, productsByCollection },
  }
}