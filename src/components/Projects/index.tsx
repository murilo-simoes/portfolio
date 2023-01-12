import Image from "next/image";
import * as React from "react";
import { TitleDiv, Container, Wrapper, ProjetoImg, BigWrapper } from "./styled";
import images from "../../mock/projects.json";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <TitleDiv>
        <h1>Portfólio</h1>
      </TitleDiv>
      <Container>
        <BigWrapper>
          {images.map((item: any) => {
            return (
              <Wrapper key={item.key}>
                <div>
                  <Link href={item.link}>
                    <ProjetoImg src={item.img} alt={item.title} />
                  </Link>
                </div>

                <div className="divTexto">
                  <Link
                    href={item.link}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <h1>{item.title}</h1>
                  </Link>
                  <p>{item.text}</p>
                </div>
              </Wrapper>
            );
          })}
        </BigWrapper>
      </Container>
    </>
  );
};

export default Projects;
