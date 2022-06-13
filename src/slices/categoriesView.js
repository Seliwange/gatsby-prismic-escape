import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
`;

export const Categories = {
    Section: styled.div`
        padding: 10px;
        background-color: #FFFFFF;
        margin-bottom: 60px;
    `,
    List: styled.ul`
        font-family: 'Lora';
        font-size: 14px;
        line-height: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        a{
            width: 139px;
            height: 36px;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #768088;
            transition: all 0.2s;
            
            &:hover{
                background-color: #e7e7e7;
            }
        }
    `,
};