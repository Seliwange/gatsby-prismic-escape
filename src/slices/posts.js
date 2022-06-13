import * as React from "react"
import { PrismicRichText } from "@prismicio/react";
import {Posts as PostsStyled, Wrapper, Title} from './postsView' 
import { GatsbyImage } from "gatsby-plugin-image";

const Posts = (props) => {
    return (
        <>
        <Title><PrismicRichText field={props.slice.primary.title.richText} /></Title>        
        <Wrapper>{props.slice.items.map((item, i) => {
            return (
                <PostsStyled.Wrapper key={i}>
                    <PostsStyled.Link to={`${item.destination_post.document.data.destination_page.uid}`}>                    
                        <GatsbyImage image={item.destination_post.document.data.post_image.gatsbyImageData} />
                        <PostsStyled.Header>
                        <PostsStyled.Title>
                            <PrismicRichText field={item.destination_post.document.data.title.richText} />
                        </PostsStyled.Title>
                        <PostsStyled.Subtitle>
                            <PrismicRichText field={item.destination_post.document.data.subtitle.richText} />
                        </PostsStyled.Subtitle>
                        </PostsStyled.Header>
                    </PostsStyled.Link>
                    <PostsStyled.Inner>
                        <PostsStyled.Author>
                            <GatsbyImage image={item.destination_post.document.data.avatar.gatsbyImageData} />
                            <PrismicRichText field={item.destination_post.document.data.author.richText} />
                        </PostsStyled.Author>
                        <PostsStyled.Date>{item.destination_post.document.data.date}</PostsStyled.Date>
                    </PostsStyled.Inner>
                </PostsStyled.Wrapper>
            )
        })}
        </Wrapper>
        </>
    );
}

export default Posts