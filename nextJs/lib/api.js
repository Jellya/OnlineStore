import { cloneElement } from "react"

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data?.allPosts
}

/*export async function getProductWithId() {
  const data = fetchAPI(
    `
    {
      products {
        id
      }
    }
  `)
  return data?.productWithId
}*/

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )
  return data?.posts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  )
  return data
}

export async function getProductForHome (id) {

  const data = await fetchAPI(
    `
    query Products($where: JSON){
      products(where: $where) {
        id
        name
        description
        price
        count
        image {
          url
        }
      }
    }
  `,
    {
      variables: {
        where: {
          id,
          // count: {_gt: 0}
        },
      },
    }
  )
  return data?.products
}



export async function getCollection(){
  const data = await fetchAPI(    `
  query Collections($where: JSON){
    collections(where: $where) {
      name
      title
    }
  }
`
)
  return data?.collections
}

export async function getProductByCollection (collectionName) {
  const data = await fetchAPI(
    `
    query ProductsByCollection($where: JSON){
      products(where: $where) {
        id
        name
        description
        price
        count
        image {
          url
        }
        collection {
          name
        }
      }
    }
  `,
    {
      variables: {
        where: {
          collection: {
            name: collectionName,
          }
        },
      },
    }
  )
  return data?.products
}

export async function getCategories(){
  const data = await fetchAPI(    `
  query Categories($where: JSON){
    categories(where: $where) {
      name
      slug
      image {
        url
      }
    }
  }
  `,
  {
    variables: {
      where: {

      }
    }
  }
)
  return data?.categories
}