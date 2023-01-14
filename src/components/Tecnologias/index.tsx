import Image from "next/image";
import * as React from "react";
import tecnologias from "../../../public/imgs/tecnologias.png";
import { Container, Wrapper } from "./styled";

const Tecnologias = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="divText">
            <h1>Tecnologias</h1>
            <p>
              Essas são algumas das tecnologias que domino e tenho mais
              afinidade para utilizar. Entre elas, minhas preferidas são o
              Next.Js e o TypeScript, que também foram as tecnologias que
              utilizei para desenvolver essa aplicação.
            </p>
          </div>
          <div className="divImg">
            <Image className="image" src={tecnologias} alt="Tecnologias" />
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Tecnologias;
