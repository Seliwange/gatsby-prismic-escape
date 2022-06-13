import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
`;

export const Hero = {
    Wrapper: styled(BgImage)`
        width: 100%;
    `,
    Inner: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    Section: styled.section`
        padding: 110px 0 157px;
    `,
    Title: styled.div`
        > *{
            font-weight: 400;
            font-size: 50px;
            line-height: 51px;
            text-align: center;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }
    `,
    Subtitle: styled.div`
        > *{
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            text-align: center;
            color: rgba(255, 255, 255, 0.63);
            margin-bottom: 31px;
        }
    `,
    Link: styled(Link)`
        font-size: 13px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
        background: #DD783F;
        border: 1px solid #DD783F;
        border-radius: 3px;
        padding: 12px 31px;
        cursor: pointer;

        &:hover{
            background: rgba(221, 120, 63, 0.7);
            border: 1px solid rgba(221, 120, 63, 0.7);
        }
    `,
}