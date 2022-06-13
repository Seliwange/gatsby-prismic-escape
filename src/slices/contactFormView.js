import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const ContactForm = {
    Section: styled(BgImage)`
        width: 100%;
    `,
    Wrapper: styled.div`
        padding: 80px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    Title: styled.div`
        position: relative;
        align-self: normal;

        > *{
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            text-align: center;
            color: #EFEFEF;
            margin-bottom: 40px;
        }
        &::after{
            content: "";
            position: absolute;
            height: 1px;
            left: 40%;
            right: 40%;
            top: 46px;
            background: #DEDEDE;
        }
    `,
}