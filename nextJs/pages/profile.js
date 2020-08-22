import Container from '@/components/Container'
import Layout from '@/components/Layout'

import Head from 'next/head'

export default function Profile({  preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Profile</title>
        </Head>
        <Container>
          <h2>User profile setting</h2>

        </Container>
      </Layout>
    </>
  )
}