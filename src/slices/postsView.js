import styled from 'styled-components';
import { Link } from 'gatsby';

export const Title = styled.div`
    position: relative;

    > h2{
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
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 108px;
`;

export const Posts = {
    Wrapper: styled.div`
        max-width: 296px;
        width: 100%;
    `,
    Link: styled(Link)`
        display: block;
        text-decoration: none;
        background-color: #FFFFFF;
        margin-bottom: 1px;
    `,
    Header: styled.div`
        height: 93px;
        padding: 14px 13px;
    `,
    Title: styled.div`
        > *{
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #101315;
            margin-bottom: 6px;
        }
    `,
    Subtitle: styled.div`
        > *{
            font-size: 13px;
            line-height: 19px;
            color: #7A7A7A;
        }
    `,
    Inner: styled.div`
            background-color: #FCFCFC;
            padding: 12px 13px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
    `,
    Author: styled.div`
        font-size: 12px;
        line-height: 35px;
        display: flex;
        align-items: center;
        
        > *{
            color: #999999;
            margin-left: 10px;
        }
    `,
    Date: styled.p`
        font-size: 12px;
        line-height: 35px;
        color: #999999;
    `,
};