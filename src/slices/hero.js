import * as React from "react"
import { PrismicRichText } from "@prismicio/react";
import { Hero as HeroStyled, Wrapper } from "./heroView";
import Header from '../components/header'

const Hero = (props) => {
    return (
        <HeroStyled.Wrapper image={props.slice.primary.background_image.gatsbyImageData}>
            <Header />
            <HeroStyled.Section>
                <Wrapper>
                    <HeroStyled.Inner>
                        <HeroStyled.Title>
                            <PrismicRichText field={props.slice.primary.title.richText} />
                        </HeroStyled.Title>
                        <HeroStyled.Subtitle>
                            <PrismicRichText field={props.slice.primary.subtitle.richText} />
                        </HeroStyled.Subtitle>
                        <HeroStyled.Link to={`${props.slice.primary.destination_page.uid}`}>
                            {props.slice.primary.destination_label_text}
                        </HeroStyled.Link>
                    </HeroStyled.Inner>
                </Wrapper>
            </HeroStyled.Section>
        </HeroStyled.Wrapper>
    );
};

export default Hero;