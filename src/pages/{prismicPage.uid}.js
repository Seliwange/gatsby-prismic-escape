import * as React from "react"
import { graphql, Link } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/layout"
import Header from '../components/header'
import Footer from "../components/footer"
import { components } from "../slices"

const Page = (props) => {
    return (
        <Layout>
            <Header />
            <SliceZone slices={props.data.prismicPage.data.body} components={components} />
            <Link to="/">Go back to the homepage</Link>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query PageQuery($id: String){
        prismicPage(id: {eq: $id}){
            data{
                body {
                  ... on PrismicPageDataBodyPost {
                    id
                    slice_type
                    items {
                      destination_page {
                        document {
                          ... on PrismicPost {
                            id
                            data {
                              author {
                                richText
                              }
                              avatar {
                                gatsbyImageData
                              }
                              categories
                              content {
                                richText
                              }
                              date
                              destination_page {
                                uid
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
                            }
                          }
                        }
                        uid
                      }
                    }
                  }
                }
                page_title{
                    text
                    richText
                }
            }
        }
    }
`

export default Page