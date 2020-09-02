import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { getProductForHome, getCollection, getProductByCollection } from '@/lib/api'
import Head from 'next/head'
import Catalog from './catalog'
import Product from '@/components/common/Product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToFavorite, removeFromFavorite } from '../redux/actions.js'
import { Cover } from '../components/common/Cover'
import styles from '@/components/contentPages/catalog/catalog.module.scss'
import Link from 'next/link'


const CollectionPreview = ({ name }) => {
  return (
    <Link href='/collections/[name]' as={`/collections/${name}`}>
      <a>

      </a>
    </Link>
  )
}


export default function Collections({ collections }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Collections</title>
        </Head>
        <Container>
          <Cover title={"collections"} />
          {collections.length !== 0 && collections.map(itemCollection => {
            // TODO вынести в отдельный компонент
            return <div>{itemCollection.name}</div>
          })}


          {
            collections.length !== 0
            && collections.map(collection => <CollectionPreview {...collection} />)
          }



        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const collections = (await getCollection()) || [];

  return {
    props: { collections },
  }
}

/* async function getStaticProps() {
  const homeProducts = (await getProductForHome()) || [];
  const collections = (await getCollection()) || [];
  let productsByCollection = []
  if (collections.length !== 0) {
    productsByCollection = await getProductByCollection(collections.name)
  }
  return {
    props: { homeProducts, collections, productsByCollection },
  }
}*/