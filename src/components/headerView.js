import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
`;

export const Logo = styled.div`
    font-size: 26px;
    line-height: 26px;
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    font-family: 'Oxygen';
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.6px;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 0 20px;
        transition: all 0.2s;
        
        &:hover{
            color: #ffd5ba;
        }
    }
`;

export const Header = {
    Section: styled.header`
        padding: 17px;
    `,
    Inner: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    `,
};