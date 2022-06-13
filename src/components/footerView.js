import styled from 'styled-components';

export const List = styled.ul`
    font-family: 'Oxygen';
    font-size: 11px;
    line-height: 26px;
    letter-spacing: 1px;
    display: flex;
    flex-wrap: wrap;
    
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.6);
        padding: 0 20px;
        transition: all 0.2s;
        
        &:hover{
            color: #fcfcfc;
        }
    }
`;

export const Footer = {
    Section: styled.footer`
        padding: 32px;
        background: rgba(35, 47, 56, 0.6);
    `,
    Inner: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    `,
};