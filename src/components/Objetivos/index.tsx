import Image from "next/image";
import * as React from "react";
import { Container, Wrapper, WrapperText, WrapperImg } from "./styled";
import teclado from "../../../public/imgs/teclado.jpg";

const Objetivos = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperText>
            <h1>Meus objetivos</h1>
            <p>
              Já realizei muitos projetos grandes que me desafiaram mais e mais
              a melhorar, hoje se tenho muito conhecimento foi por causa de
              muito treino e dedicação. Nunca trabalhei na área mas estou em
              busca da minha primeira oportunidade para colocar meu conhecimento
              a prova.
            </p>
          </WrapperText>
          <WrapperImg>
            <Image className="image" src={teclado} alt="Teclado" />
          </WrapperImg>
        </Wrapper>
      </Container>
    </>
  );
};

export default Objetivos;
