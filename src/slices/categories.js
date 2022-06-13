import * as React from "react"
import { Link } from "gatsby"
import { Categories as CategoriesStyled, Wrapper } from "./categoriesView"

const Categories = (props) => {
    return (
        <CategoriesStyled.Section>
            <Wrapper>
                <CategoriesStyled.List>
                    {props.slice.items.map((item) => <Link to={`/${item.destination_page.uid}`} key={item.destination_page.uid}>{item.label}</Link>)}
                </CategoriesStyled.List>
          </Wrapper>
      </CategoriesStyled.Section>
    )
}

export default Categories