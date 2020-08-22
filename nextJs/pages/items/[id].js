import { useRouter } from "next/router"
import ErrorPage from 'next/error'
import { getProductForHome, getProductWithId} from '@/lib/api'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Product from '@/components/common/Product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToFavorite, removeFromFavorite } from '../../redux/actions.js'


export default function Item() {
    const router = useRouter();
    return (
        <Layout>
            <Container>
            
                <h1>Item {router.query.id}</h1>
                
            </Container>
        </Layout>

    )
}
