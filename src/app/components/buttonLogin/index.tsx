import { Button} from "./style";
type Props = {
    title: String;
    image: any;
    onClick:()=>void
}
export function ButtonLogin({image,title,onClick}:Props){
    return(
        <Button onClick={onClick}>
            <img src={image} alt="imagemLogo" />
            <p>{title}</p>
        </Button>
    )
}