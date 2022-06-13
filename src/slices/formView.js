import styled from 'styled-components';

export const Form = {
    Wrapper: styled.form`
        max-width: 500px;
        width: 100%;
    `,
    Input: styled.input`
        max-width: 375px;
        width: 100%;
        height: 50px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #817F83;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 3px 0px 0px 3px;
        padding: 0 35px;
    `,
    Button: styled.button`
        width: 125px;
        height: 50px;
        font-family: 'Roboto';
        font-size: 12px;
        line-height: 14px;
        color: #F8F8F8;
        background: rgba(255, 255, 255, 0.28);
        border: 1px solid rgba(255, 255, 255, 0.28);
        border-radius: 0px 3px 3px 0px;
        cursor: pointer;
        
        &:hover{
            background: rgba(255, 255, 255, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.7);
        }
    `,
}