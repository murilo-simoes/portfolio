import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .divTitle {
    transition: 0.2s ease-in;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    &:hover {
      margin-bottom: 0.8rem;
      cursor: pointer;
    }
  }
  .title {
    font-size: 1.8rem;
    margin-left: 1rem;
    white-space: nowrap;
    font-weight: bold;
    font-style: italic;
    border-bottom: 4px solid #000;
    @media screen and (max-width: 422px) {
      margin-right: -5rem;
    }
  }

  p {
    font-size: 1.1rem;
    transition: 0.2s ease-in;
    &:hover {
      color: #7d7d7d;
      cursor: pointer;
    }
  }
  .pages {
    width: 350px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .divEmail {
    display: flex;
    flex-direction: row;
    width: 240px;

    align-items: center;
    transition: 0.2s ease-in;
    &:hover {
      margin-bottom: 0.8rem;
      cursor: pointer;
    }
  }
  .email {
    font-style: italic;
    margin-right: 1rem;
    margin-left: 0.5rem;
  }
`;

export const ItemsMenu = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
export const MobileMenu = styled.div`
  display: none;
  width: 40%;

  #icone {
    width: 30px;
    transition: 850ms;
    font-size: 2rem;
    &:hover {
      color: #7d7d7d;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 6rem;
  }
`;

export const MobileMenuItems = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  transition: 850ms;
  top: -100%;
  z-index: 998;
  right: 0;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .bigDiv {
    margin-top: 2rem;
  }
  #icone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2.53rem;
  }
  .pagesMobile {
    margin-top: 6rem;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .divEmail2 {
    display: flex;
    flex-direction: row;
    width: 240px;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s ease-in;
    margin-top: 0.5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
