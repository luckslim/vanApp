"use client";
import { VanIcon } from "@phosphor-icons/react";
import {
  ContainerImage,
  ContainerProfiler,
  ContainerProfilerBox,
  ContainerProfilerConfirmed,
  ContainerProfilerVan,
  ContainerProvider,
  ProfilerBox,
  ProfilerButtonLogout,
} from "./style";
import { Button } from "../components/button";
import { ContentCard } from "../components/contentCard";
import { useSession } from "next-auth/react";
import { useState } from "react";
type listProps = {
  name: String | null | undefined;
  image: any;
  dateTime: string;
};
export default function HomePage() {
  const { data: session, status } = useSession();
  const [seats]= useState(15)
  const [list, setlist] = useState<listProps[]>([]);
  function handleListUser({ name, image, dateTime }: listProps) {
    if (!name) return;

    const alreadyListed = list.some((user) => user.name === name);
    if (alreadyListed) {
      console.log("Usuário já está na lista");
      return;
    }
    setlist([...list, { name, image, dateTime }]);
  }
  const totalSeats = seats - list.length
  console.log(list);
  return (
    <ContainerProvider>
      <ContainerProfiler>
        <ContainerProfilerBox>
          <ContainerImage src={session?.user?.image} />
          <ProfilerBox>
            <p>{session?.user?.name}</p>
            <small>{session?.user?.email}</small>
          </ProfilerBox>
          <ProfilerButtonLogout>Sair</ProfilerButtonLogout>
        </ContainerProfilerBox>
        <Button
          onclick={() =>
            handleListUser({
              name: session?.user?.name,
              image: session?.user?.image,
              dateTime: new Date().toISOString(),
            })
          }
          title="Listar Nome"
          type="PRIMARY"
        />
      </ContainerProfiler>
      <ContainerProfilerVan>
        <VanIcon size={32} weight="fill" />
        <p>Acentos Vagos</p>
        <p>{totalSeats}</p>
      </ContainerProfilerVan>
      <ContainerProfilerConfirmed>
        <h1>Passageiros Confirmados:</h1>
      </ContainerProfilerConfirmed>
      {list.map((profile) => (
        <ContentCard
          image={profile.image}
          name={profile.name}
        />
      ))}
    </ContainerProvider>
  );
}
