import * as React from "react"
import { PrismicRichText } from "@prismicio/react";
import {ContactForm as ContactFormStyled} from './contactFormView'
import Form from "./form";
import Footer from "../components/footer";

const ContactForm =(props) => {
    return (
        <>
        <ContactFormStyled.Section image={props.slice.primary.background_image.gatsbyImageData}>
            <ContactFormStyled.Wrapper>
                <ContactFormStyled.Title>
                    <PrismicRichText field={props.slice.primary.title.richText} />
                </ContactFormStyled.Title>
                <Form />
            </ContactFormStyled.Wrapper>
            <Footer />
        </ContactFormStyled.Section>
        </>
    )
}

export default ContactForm