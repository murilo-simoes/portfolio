import Image from "next/image";
import * as React from "react";
import { Container, WrapperImg, WrapperText, Wrapper } from "./styled";
import murilo from "../../../public/imgs/muriloSobre.png";

const Introduction = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperImg>
            <Image className="image" src={murilo} alt="Murilo" />
          </WrapperImg>
          <WrapperText>
            <div>
              <h1>Me chamo Murilo Simões, sou Desenvolvedor Full-Stack</h1>
              <p>
                Em 2020, quando eu ainda tinha 15 anos, comecei minha caminhada
                como desenvolvedor em um curso técnico de Informática para
                Internet, desde então me apaixonei por essa área e não consigo
                me ver fazendo outra coisa.
              </p>
            </div>
          </WrapperText>
        </Wrapper>
      </Container>
    </>
  );
};

export default Introduction;
