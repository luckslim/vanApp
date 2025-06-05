import styled from "styled-components";
export type ButtonTypeStyleProps = 'PRIMARY'|'SECONDARY';
type Props = {
    type: ButtonTypeStyleProps;
}
export const Container = styled.button<Props>`
    padding: 0.875rem;
    border-radius: 8px;
    border: none;
    background-color:${({theme,type})=> type === 'PRIMARY' ? theme['green-500']: theme['red-500']};
    &:disabled{
        cursor: not-allowed;
        background-color:${({theme,type})=> type === 'PRIMARY' && theme['gray-300']};
    }
    &:hover{
        opacity: calc(80%);
    }
`;
export const Title = styled.text`
    color: ${props=>props.theme['gray-100']};
    font-weight: 900;
    font-size: 1rem;
`;