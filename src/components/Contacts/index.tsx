import * as React from "react";
import { Container, Wrapper } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import email from "../../../public/imgs/email2.svg";
import telefone from "../../../public/imgs/telefone.svg";
import Link from "next/link";

const Contacts = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Link
            className="link"
            href="https://github.com/murilo-simoes"
            target="_blank"
          >
            <div className="divIcons">
              <FontAwesomeIcon className="icone" icon={faGithub} />
              <h1>murilo-simoes</h1>
              
            </div>
          </Link>
          <Link href="mailto:murilorsimoes@gmail.com">
            <div className="divIcons">
              <Image src={email} alt="email" />
              <h1>murilorsimoes@gmail.com</h1>
            </div>
          </Link>
          <Link
            href="https://web.whatsapp.com/send?phone=5511942986698"
            target="_blank"
          >
            <div className="divIcons">
              <Image src={telefone} alt="telefone" />
              <h1>(11)94298-6698</h1>
            </div>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contacts;
