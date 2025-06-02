import styled from "styled-components";
export const Button = styled.button`
    background-color: ${props=>props.theme["gray-200"]};
    border:none;
    border-radius: 4px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    cursor: pointer;
    &:hover{
        background-color: ${props=>props.theme['green-500']};
        p{
            color: aliceblue;
        }
    }    
    img{
        width: 35px;
    }
    p{
        color: ${props=>props.theme["gray-800"]};
        font-weight: 500;
        font-size: larger;

    }
`;