"use client";
import { UsersThreeIcon } from "@phosphor-icons/react";
import { ButtonLogin } from "../components/buttonLogin";
import { ContainerLogin, ContainerProvider } from "./style";

export default function LoginPage() {
  return (
    <>
      <ContainerProvider>
        <ContainerLogin>
            <h1>Login</h1>
            <UsersThreeIcon size={32} weight="fill" />
        </ContainerLogin>
        <p>Faça Login para acessar a lista da van</p>
        <ButtonLogin
          title="Logar com  google "
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
        />
        <ButtonLogin
          title="Logar com  Instagram"
          image="https://img.freepik.com/vetores-premium/icone-de-logotipo-de-vetor-do-instagram-logotipo-de-midia-social_901408-392.jpg?semt=ais_hybrid&w=740"
        />
        <ButtonLogin
          title="Logar com  Github"
          image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
        <ButtonLogin
          title="Logar com  Microsoft"
          image="https://learn.microsoft.com/pt-br/virtualization/windowscontainers/manage-containers/media/microsoft_logo.svg"
        />
        <ButtonLogin
          title="Logar com  X"
          image="https://png.pngtree.com/png-vector/20230817/ourlarge/pngtree-twitter-social-platform-icon-vector-png-image_9183350.png"
        />
      </ContainerProvider>
    </>
  );
}
