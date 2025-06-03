import styled from "styled-components";
type ImageProps = {
    src: any;
    alt?: String;
}
export const ContainerProvider = styled.div`
margin-top: 50px;
display: grid;
justify-content: center;
gap: 1rem;
width: auto;
`;
export const ContainerProfiler = styled.div`
    background-color: ${props=>props.theme['gray-200']};
    padding: 0.875rem;
    display: grid;
    gap: 1rem;
    border-radius: 8px;
    max-width: 800px;
`;
export const ContainerProfilerVan= styled.div`
    background-color: ${props=>props.theme['gray-200']};
    padding: 0.875rem;
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    width: 350px;
    `;
export const ContainerProfilerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
`;
export const ProfilerBox = styled.div`
    color:${props=>props.theme['gray-600']};
`;
export const ProfilerButtonLogout = styled.button`
    background-color: ${props=>props.theme['red-700']};
    color: ${props=>props.theme['gray-100']};
    font-weight: 800;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
`;
export const ContainerProfilerConfirmed = styled.div`
    background-color: ${props=>props.theme['gray-200']};
    padding: 0.875rem;
    gap: 1rem;
    border-radius: 8px;
    width: 350px;
    h1{
        font-size: 15px;
    }


`;
export const ContainerImage = styled.img.attrs<ImageProps>(props => ({
    src: props.src,
    alt: props.alt,
}))`
width:50px;
height: 50px;
border-radius: 9999px;
`;