import Container from '@/components/Container'
import Layout from '@/components/Layout'

import Head from 'next/head'

export default function Delivery({  preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>доставка</title>
        </Head>
        <Container>
          <h2>доставка</h2>

        </Container>
      </Layout>
    </>
  )
}

