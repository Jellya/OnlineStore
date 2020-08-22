import Container from '@/components/Container'
import Layout from '@/components/Layout'

import Head from 'next/head'

export default function Search({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Search</title>
        </Head>
        <Container>
          <h2>Search</h2>

        </Container>
      </Layout>
    </>
  )
}