import styled from "styled-components";

export const TitleDiv = styled.div`
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4.6rem;
    @media screen and (max-width: 400px) {
      font-size: 3rem;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BigWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  .divTexto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 8rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  .divImg {
    margin-top: 4rem;
    @media screen and (max-width: 700px) {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 2.2rem;
    color: #000;
    word-spacing: 0.2rem;
    font-style: italic;
    @media screen and (max-width: 1030px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
    }
  }
  p {
    color: #777990;
    font-size: 1.2rem;
    line-height: 1.5rem;
    display: block;
    @media screen and (max-width: 1030px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.9rem;
    }
  }
`;

export const ProjetoImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  transition: transform 0.2s;
  border-radius: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 8px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 4px 3px -1px;
  &:hover {
    transform: scale(1.05);
  }
`;
