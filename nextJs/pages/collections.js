import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { getCollection } from '@/lib/api'
import Head from 'next/head'
import { Cover } from '../components/common/Cover'
import styles from '@/components/contentPages/collections/collections.module.scss'
import Link from 'next/link'



const CollectionPreview = ({ name, title}) => {
  return (
      <Link key={name} href='/collections/[name]' as={`/collections/${name}`}>
        <a >
            <p className={styles.title}>{title}</p>      
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
          {
            collections.length !== 0
            && collections.map(collection => <CollectionPreview {...collection}/>)
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
