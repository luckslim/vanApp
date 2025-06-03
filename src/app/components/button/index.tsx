import { ButtonTypeStyleProps, Container, Title } from "./style";
type Props = {
    title: string,
    type?: ButtonTypeStyleProps;
    onclick:()=>void;
}
export function Button({title,type='PRIMARY',onclick}:Props){
    return(
        <Container onClick={onclick} type={type}>
            <Title>{title}</Title>
        </Container>
    )
}