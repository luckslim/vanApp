import { ButtonTypeStyleProps, Container, Title } from "./style";
type Props = {
    title: string,
    type?: ButtonTypeStyleProps;
    disabled?: boolean;
    onclick?:()=>void;

}
export function Button({title,type='PRIMARY',onclick, disabled }:Props){
    return(
        <Container disabled={disabled} onClick={onclick} type={type}>
            <Title>{title}</Title>
        </Container>
    )
}