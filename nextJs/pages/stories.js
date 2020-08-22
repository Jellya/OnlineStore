import Container from '@/components/Container'
import Layout from '@/components/Layout'

import Head from 'next/head'

export default function Stories({  preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Stories</title>
        </Head>
        <Container>
          <h2>Stories</h2>

        </Container>
      </Layout>
    </>
  )
}