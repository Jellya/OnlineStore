import Layout from '@/components/Layout'
import { getProductForHome, getCollection, getCategories } from '@/lib/api'
import Head from 'next/head'
import Product from '@/components/common/Product'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToFavorite, removeFromFavorite } from '../redux/actions.js'
import Quote from "../components/contentPages/main/Quote"
import Preview from "../components/contentPages/main/Preview"
import Collections from './collections'
import AboutBlock from '@/components/contentPages/main/AboutBlock'
import FollowBlock from '@/components/contentPages/main/FollowBlock'
import { PopularBlock } from "../components/contentPages/main/PopularBlock"
import { CatalogBlock } from "../components/contentPages/main/CatalogBlock"
import { FullscreenVideo } from "../components/contentPages/main/FullscreenVideo"
import Container from '@/components/Container'

const PopularItems = [
  {
    imageLink: '/popular-grid1.png',
    title: 'Chiffon Wrap Dress',
    price: '$150'
  }, {
    imageLink: '/popular-grid2.png',
    title: 'Chiffon Wrap Dress',
    price: '$180'
  }, {
    imageLink: '/popular-grid3.png',
    title: 'Coat',
    price: '$210'
  }, {
    imageLink: '/popular-grid4.png',
    title: 'Trench Coat',
    price: '$200'
  },
];

export default function Index({ homeProducts, preview, collections, categories }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites)

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <Layout preview={preview}>
        <Preview 
          hrefLink={"/new"} 
          title={"the new collection"} 
          subTitle={"summer 2020"} 
          buttonText={"view collection"} 
        />

        <PopularBlock popularItems={PopularItems} />
        <FullscreenVideo srcVideo={"https://www.youtube.com/embed/jLA_Zlfc4g4"} />
        <CatalogBlock categories={categories} />
        <Quote 
          author={'CHRISTIAN DIOR'} 
          text={"The ability to dress rests on three pillars - simplicity, good taste and the habit of taking care of yourself — "} 
          textBold={"and it's not at all expensive."} 
          />

        <AboutBlock />
        <FollowBlock />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const homeProducts = (await getProductForHome({ limit: 10 })) || [];
  const collections = (await getCollection()) || [];
  const categories = (await getCategories()) || []; 

  return {
    props: { homeProducts, preview, collections, categories },
  }
}
