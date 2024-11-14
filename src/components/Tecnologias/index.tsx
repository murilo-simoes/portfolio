import Image from "next/image";
import * as React from "react";
import tecnologias from "../../../public/imgs/salve.png";
import { Container, Wrapper, Img } from "./styled";

const Tecnologias = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="divText">
            <h1>Tecnologias</h1>
            <p>
              Essas são algumas das tecnologias que domino e tenho mais
              afinidade para utilizar. Gosto muito de aprender novas linguagens
              e adquirir mais conhecimento então não fico limitado a apenas as
              linguagens que sei atualmente.
            </p>
          </div>
          <div className="divImg">
            <Img
              src={"https://i.postimg.cc/WzyftDJs/zyro-image-2.png"}
              alt="Tecnologias"
            />
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Tecnologias;
