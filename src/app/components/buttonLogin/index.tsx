import { Button} from "./style";
type Props = {
    title: String;
    image: any;
}
export function ButtonLogin({image,title}:Props){
    return(
        <Button>
            <img src={image} alt="imagemLogo" />
            <p>{title}</p>
        </Button>
    )
}