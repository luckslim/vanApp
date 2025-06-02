import styled from "styled-components";

export const ContainerProvider = styled.div`
    display:grid;
    flex: 1;
    gap: 1rem;
    justify-content: center;
    margin-top: 100px;
    P{
        color: ${props=>props.theme['gray-600']};
    }
`;
export const ContainerLogin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;