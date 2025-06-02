import styled from "styled-components";
type ImageProps = {
    src: string;
    alt?: string;
}
export const Container = styled.div`
    background-color: ${props => props.theme['gray-200']};
    padding: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    border-radius: 8px;
    width: 350px;
    &:hover{
        background-color: ${props=>props.theme['green-500']};
        color: aliceblue;
        font-weight: 800;
    }
`;
export const ContainerImage = styled.img.attrs<ImageProps>(props => ({
    src: props.src,
    alt: props.alt || 'imagem',
}))`
width:50px;
height: 50px;
border-radius: 9999px;
`;
export const ContainerText = styled.div``;
export const ContainerDateTime = styled.div``;