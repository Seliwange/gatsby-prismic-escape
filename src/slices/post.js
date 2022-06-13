import * as React from "react"
import { PrismicRichText } from "@prismicio/react";
import {Posts as PostsStyled, Wrapper } from './postsView' 
import { GatsbyImage } from "gatsby-plugin-image";

const Post = (props) => {
    return (
        <>    
        <Wrapper>{props.slice.items.map((item) => {
            return (
                <PostsStyled.Wrapper key={item.destination_page.uid}>
                        <GatsbyImage image={item.destination_page.document.data.post_image.gatsbyImageData} />
                        <div>
                        <PostsStyled.Title>
                            <PrismicRichText field={item.destination_page.document.data.title.richText} />
                        </PostsStyled.Title>
                        <PostsStyled.Subtitle>
                            <PrismicRichText field={item.destination_page.document.data.subtitle.richText} />
                        </PostsStyled.Subtitle>
                        <PostsStyled.Subtitle>
                            <PrismicRichText field={item.destination_page.document.data.content.richText} />
                        </PostsStyled.Subtitle>
                        </div>
                    <PostsStyled.Inner>
                        <PostsStyled.Author>
                            <GatsbyImage image={item.destination_page.document.data.avatar.gatsbyImageData} />
                            <PrismicRichText field={item.destination_page.document.data.author.richText} />
                        </PostsStyled.Author>
                        <PostsStyled.Date>{item.destination_page.document.data.date}</PostsStyled.Date>
                    </PostsStyled.Inner>
                </PostsStyled.Wrapper>
            )
        }).filter(post => post.id)}
        </Wrapper>
        </>

    );
}   

// export const query = graphql`
//     query PostByUid($uid: String){
//         prismicPost(uid: {eq: $uid}){
//             uid
//             data {
//                 author {
//                     richText
//                 }
//                 avatar {
//                     gatsbyImageData
//                 }
//                 post_image {
//                     gatsbyImageData
//                 }
//                 subtitle {
//                     richText
//                 }
//                 title {
//                     richText
//                 }
//                 content {
//                     richText
//                 }
//                 date
//             }
//         }
//     }
// `

export default Post