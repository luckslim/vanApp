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
  image?: any;
  dateTime?: string;
};
export default function HomePage() {
  const { data: session, status } = useSession();
const [list, setlist] = useState<listProps[]>([]);
  const [seats] = useState(15);
  const ConfirmUserListed = list.some(
    (user) => user.name === session?.user?.name
  );
  const totalSeats = seats - list.length;
  function handleListUser({ name, image, dateTime }: listProps) {
    if (!name) return;
    const alreadyListed = list.some((user) => user.name === name);
    if (alreadyListed) {
      console.log("Usuário já está na lista");
      return;
    }
    setlist([...list, { name, image, dateTime }]);
    console.log(list);
  }
  function handleDeleteUserList({ name }: listProps) {
    setlist((prevList) => prevList.filter((user) => user.name !== name));
  }
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
          disabled={ConfirmUserListed}
        />
      </ContainerProfiler>
      <ContainerProfilerVan>
        <VanIcon size={32} weight="fill" />
        <p>Acentos Vagos</p>
        <p>{totalSeats}</p>
      </ContainerProfilerVan>
      <ContainerProfilerConfirmed>
        <h1>Passageiros Confirmados:</h1>
        {ConfirmUserListed && (
          <Button
            title="Retirar Nome"
            type="SECONDARY"
            onclick={() =>
              handleDeleteUserList({
                name: session?.user?.name,
              })
            }
          />
        )}
      </ContainerProfilerConfirmed>
      {list.map((profile) => (
        <ContentCard image={profile.image} name={profile.name} />
      ))}
    </ContainerProvider>
  );
}
