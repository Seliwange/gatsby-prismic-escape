import * as React from "react"
import { PrismicRichText } from "@prismicio/react";
import { FeaturedPosts as FeaturedPostsStyled, Wrapper, Title } from "./featuredPostsView";
import { GatsbyImage } from "gatsby-plugin-image";

const FeauteredPosts = (props) => {
    return(
        <>
        <Title><PrismicRichText field={props.slice.primary.title.richText} /></Title>
        <Wrapper>{props.slice.items.map((item, i) => {
            return (
                <FeaturedPostsStyled.Wrapper key={i} image={item.background_image.gatsbyImageData} hasAButton={item.has_a_button}>
                    {!!item.has_a_button && 
                        <FeaturedPostsStyled.Button>
                            Adventure
                        </FeaturedPostsStyled.Button>
                    }
                    <FeaturedPostsStyled.Title>
                        <PrismicRichText field={item.title.richText} />
                    </FeaturedPostsStyled.Title>
                    <FeaturedPostsStyled.Subtitle>
                        <PrismicRichText field={item.subtitle.richText} />
                    </FeaturedPostsStyled.Subtitle>
                    <FeaturedPostsStyled.Inner>
                        <FeaturedPostsStyled.Author>
                            <GatsbyImage image={item.avatar.gatsbyImageData} alt="avatar" />
                            <PrismicRichText field={item.author.richText} />
                        </FeaturedPostsStyled.Author>
                        <FeaturedPostsStyled.Date>{item.date}</FeaturedPostsStyled.Date>
                    </FeaturedPostsStyled.Inner>
                </FeaturedPostsStyled.Wrapper>
            );
        })}
        </Wrapper>
        </>
    );
}

export default FeauteredPosts