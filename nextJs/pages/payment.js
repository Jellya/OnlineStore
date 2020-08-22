import Container from '@/components/Container'
import Layout from '@/components/Layout'

import Head from 'next/head'

export default function Payment({  preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Payment</title>
        </Head>
        <Container>
          <h2>Payment page</h2>

        </Container>
      </Layout>
    </>
  )
}