import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const Title = styled.div`
    position: relative;

    > *{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        letter-spacing: 2px;
        color: #2E2E2E;
        margin-bottom: 40px;
    }
    &::after{
        content: "";
        position: absolute;
        height: 1px;
        left: 40%;
        right: 40%;
        top: 43px;
        background: #DEDEDE;
    }
`;

export const Wrapper = styled.div`
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const FeaturedPosts = {
    Wrapper: styled(BgImage)`
        max-width: 460px;
        width: 100%;
        height: 280px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        position: relative;
        margin-bottom: 60px;
    `,
    Title: styled.div`
        > *{
            font-weight: 400;
            font-size: 27px;
            line-height: 30px;
            color: #FFFFFF;
            margin-bottom: 6px;
        }
    `,
    Subtitle: styled.div`
        font-size: 14px;
        line-height: 25px;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 12px;
    `,
    Inner: styled.div`
        display: flex;
        justify-content: space-between;
    `,
    Author: styled.div`
        font-size: 12px;
        line-height: 35px;
        color: #999999;
        display: flex;
        align-items: center;

        > *{
            margin-left: 10px;
        }
    `,
    Date: styled.p`
        font-size: 12px;
        line-height: 35px;
        color: #999999;
    `,
    Button: styled.button`
        font-size: 12px;
        line-height: 13px;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #DD783F;
        border: 1px solid #DD783F;
        border-radius: 2px;
        padding: 6px 9px;
        align-self: start;
        position: absolute;
        top: 20px;
    `,
};