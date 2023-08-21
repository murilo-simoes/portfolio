import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import murilo from "../../../public/imgs/murilo.png";
import { Container, Wrapper } from "./styled";

const Banner = () => {
  return (
    <Container>
      <Wrapper style={{ width: "30%" }}>
        <div>
          <h1 className="title">Olá, Eu sou o Murilo</h1>
        </div>
        <div>
          <h1 className="desc">Desenvolvedor Full-Stack</h1>
        </div>
        <div className="divButton">
          <Link href="/portfolio">
            <button className="button">Meus Projetos</button>
          </Link>
        </div>
      </Wrapper>
      <Wrapper style={{ width: "40%" }}>
        <div>
          <Image className="murilo" src={murilo} alt="Murilo" />{" "}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Banner;
