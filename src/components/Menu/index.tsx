import Image from "next/image";
import * as React from "react";
import {
  Container,
  Wrapper,
  MobileMenu,
  ItemsMenu,
  MobileMenuItems,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import email from "../../../public/imgs/email.svg";
import Link from "next/link";

const Menu = () => {
  const [show, setShow] = React.useState(0);
  return (
    <>
      <Container>
        <Wrapper style={{ color: "#000" }}>
          <div className="divTitle">
            <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
              <h1 className="title">Murilo Simões</h1>
            </Link>
          </div>
          <ItemsMenu>
            <div className="pages">
              <Link style={{ textDecoration: "none", color: "#000" }} href="/">
                <p>Home</p>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                href="/sobre"
              >
                <p>Sobre</p>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                href="/portfolio"
              >
                <p>Portfólio</p>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                href="/contato"
              >
                <p>Contato</p>
              </Link>
            </div>
            <div className="divEmail">
              <Image className="image" src={email} alt="email" />
              <h1 className="email">murilorsimoes@gmail.com</h1>
            </div>
          </ItemsMenu>
          <MobileMenu>
            {show == 1 ? (
              <FontAwesomeIcon
                style={{ zIndex: "999" }}
                onClick={() => setShow(0)}
                className="bars"
                icon={faBarsStaggered}
              />
            ) : (
              <FontAwesomeIcon
                style={{ zIndex: "999" }}
                onClick={() => setShow(1)}
                className="bars"
                icon={faBars}
              />
            )}

            {show === 0 ? (
              <MobileMenuItems>
                <div className="bigDiv">
                  <div className="pagesMobile">
                    <p>Home</p>
                    <p>Portfólio</p>
                    <p>Sobre</p>
                    <p>Contato</p>
                    <div className="divEmail2">
                      <Image className="image" src={email} alt="email" />
                      <h1 className="email">murilorsimoes@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </MobileMenuItems>
            ) : (
              <MobileMenuItems
                style={{ top: "0", transition: "350ms", color: "#000" }}
              >
                <div className="bigDiv">
                  <div className="pagesMobile">
                    <Link
                      style={{ textDecoration: "none", color: "#000" }}
                      href="/"
                    >
                      <p>Home</p>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "#000" }}
                      href="/sobre"
                    >
                      <p>Sobre</p>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "#000" }}
                      href="/portfolio"
                    >
                      <p>Portfólio</p>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "#000" }}
                      href="/contato"
                    >
                      <p>Contato</p>
                    </Link>
                    <div className="divEmail2">
                      <Image className="image" src={email} alt="email" />
                      <h1 className="email">murilorsimoes@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </MobileMenuItems>
            )}
          </MobileMenu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
