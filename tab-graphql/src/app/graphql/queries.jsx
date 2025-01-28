import { gql } from "@apollo/client"

export const GET_POSTS = gql`
  query Post {
    posts {
      id
      title
      slug
      excerpt
      date
      createdBy {
        createdAt
        name
      }
      content {
        text
        html
      }
      coverImage {
        id
        url
        size
      }
    }
  }
`

export const GET_POST = gql`
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      title
      coverImage {
        size
        url
      }
      slug
      excerpt
    }
  }
`
