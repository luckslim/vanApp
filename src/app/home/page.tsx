"use client";
import { IdentificationBadgeIcon, VanIcon } from "@phosphor-icons/react";
import {
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
export default function HomePage() {
  return (
    <ContainerProvider>
      <ContainerProfiler>
        <ContainerProfilerBox>
          <IdentificationBadgeIcon size={32} />
          <ProfilerBox>
            <p>Nome</p>
            <small>email@email.com</small>
          </ProfilerBox>
          <ProfilerButtonLogout>Sair</ProfilerButtonLogout>
        </ContainerProfilerBox>
        <Button title="Listar Nome" type="PRIMARY" />
      </ContainerProfiler>
      <ContainerProfilerVan>
        <VanIcon size={32} weight="fill" />
        <p>Acentos Vagos</p>
        <p>15</p>
      </ContainerProfilerVan>
      <ContainerProfilerConfirmed>
        <h1>Passageiros Confirmados:</h1>
      </ContainerProfilerConfirmed>
      <ContentCard
        image="https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg?semt=ais_items_boosted&w=740"
        name="Leonardo"
        dateTime="12-10-22"
      />
    </ContainerProvider>
  );
}
