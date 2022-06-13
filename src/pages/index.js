import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import { SliceZone } from "@prismicio/react"

import { createGlobalStyle } from 'styled-components';
import { components } from "../slices"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #EFEFEF;
  }
  p,
  button{
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const query = graphql`
  {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageDataBodyCategories {
            id
            slice_type
            items {
              label
              destination_page {
                uid
              }
            }
          }
          ... on PrismicHomepageDataBodyContacts {
            id
            slice_type
            primary {
              title {
                richText
              }
              background_image {
                gatsbyImageData
              }
            }
          }
          ... on PrismicHomepageDataBodyMostRecent {
            id
            primary {
              title {
                richText
              }
            }
            slice_type
            items {
              destination_post {
                document {
                  ... on PrismicPost {
                    uid
                    id
                    data {
                      author {
                        richText
                      }
                      avatar {
                        gatsbyImageData
                      }
                      post_image {
                        gatsbyImageData
                      }
                      subtitle {
                        richText
                      }
                      title {
                        richText
                      }
                      date
                      destination_page{
                        uid
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageDataBodyFeaturedPosts {
            id
            slice_type
            primary {
              title {
                richText
              }
            }
            items {
              title {
                richText
              }
              subtitle {
                richText
              }
              has_a_button
              date(formatString: "LL")
              background_image {
                gatsbyImageData
              }
              avatar {
                gatsbyImageData
              }
              author {
                richText
              }
            }
          }
          ... on PrismicHomepageDataBodyHero {
            id
            slice_type
            primary {
              background_image {
                gatsbyImageData
              }
              title {
                richText
              }
              subtitle {
                richText
              }
              destination_page {
                uid
              }
              destination_label_text
            }
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  return (
    <Layout>
      <SliceZone slices={props.data.prismicHomepage.data.body} components={components} />
      <GlobalStyle />
    </Layout>
  )
}

export default IndexPage
