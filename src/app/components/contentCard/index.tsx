import {
  Container,
  ContainerDateTime,
  ContainerImage,
  ContainerText,
} from "./style";
type Props = {
  name: string;
  image: any;
  dateTime: string;
};
export function ContentCard({ name, image, dateTime }: Props) {
  return (
    <>
      <Container>
        <ContainerImage src={image} alt="" />
        <ContainerText>{name}</ContainerText>
        <ContainerDateTime>{dateTime}</ContainerDateTime>
      </Container>
    </>
  );
}
