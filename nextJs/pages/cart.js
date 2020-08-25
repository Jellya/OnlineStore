import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, resetCart, removeFromCart } from '../redux/actions.js'
import { getProductForHome, getCollection } from '@/lib/api'
import styles from '@/components/common/Product/product.module.scss'
import Head from 'next/head'
import { Cover } from '@/components/common/Cover/index.js'



const CartProduct = ({id, name, price,image, removeProduct}) => {
  return (<div className={styles.productItem}>
    {image.length !==0 && image.map(({url}) => {
                const imageUrl = `${
                    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
                }${url}`
                return <img className={styles.productImg} src={imageUrl} alt={name} />
            })}
            <h3 className={styles.productTitle}>{name}</h3>  
            <p className={styles.productPrice}>{price}$</p>
    <button onClick={() => removeProduct(id)} className={styles.productCart}>Delete</button>
  </div>)
    
  
}

export default function New({  preview, homeProducts=[] }) {
  const dispatch = useDispatch();
  const cartIds = useSelector((state) => state.cart)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Cart</title>
        </Head>
        <Container>
          <Cover title={"cart"}/>
          <div className={styles.flexItems}>
        {
          homeProducts.length !== 0 && 
            homeProducts
              .filter(product => cartIds.includes(product.id))
              .map(filteredProductProps => <CartProduct {...filteredProductProps} removeProduct={(id) => dispatch(removeFromCart(id))} />)
        }

        </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const homeProducts = (await getProductForHome()) || [];
  const collections = (await getCollection()) || [];

  return {
    props: { homeProducts, preview },
  }
}
