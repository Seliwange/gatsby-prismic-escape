import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Footer as FooterStyled, List } from "./footerView"
import {Logo, Wrapper, Nav} from './headerView'

const Footer = () => {
  const result = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          menu_items {
            label
            destination_page {
              uid
            }
          }
        }
      }
    }
  `)

  return (
    <FooterStyled.Section>
      <Wrapper>
          <FooterStyled.Inner>
              <Logo><Link to="/">Escape.</Link></Logo>
              <Nav>
                <List>
                  <Link to="/">Home</Link>
                  {result.prismicNavigation.data.menu_items.map(item => <Link to={`/${item.destination_page.uid}`} key={item.destination_page.uid}>{item.label}</Link>)}
                </List>
              </Nav>
            </FooterStyled.Inner>
        </Wrapper>
    </FooterStyled.Section>
  )
}

export default Footer
