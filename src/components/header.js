import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { 
  Logo, 
  Header as HeaderStyled,
  List,
  Wrapper,
  Nav
} from "./headerView"

const Header = ({ siteTitle }) => {
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
    <HeaderStyled.Section>
      <Wrapper>
          <HeaderStyled.Inner>
              <Logo><Link to="/">Escape.</Link></Logo>
              <Nav>
                <List>
                  <Link to="/">Home</Link>
                  {result.prismicNavigation.data.menu_items.map(item => <Link to={`/${item.destination_page.uid}`} key={item.destination_page.uid}>{item.label}</Link>)}
                </List>
              </Nav>
            </HeaderStyled.Inner>
        </Wrapper>
    </HeaderStyled.Section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
