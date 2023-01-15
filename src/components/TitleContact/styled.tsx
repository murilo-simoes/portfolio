import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: 18rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 12rem;

  @media screen and (max-width: 900px) {
    width: 80%;
    height: 10rem;
  }

  h1 {
    font-size: 4.5rem;
    @media screen and (max-width: 900px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    color: #838383;
    word-spacing: 0.1rem;
    text-align: center;
    line-height: 1.5rem;
    @media screen and (max-width: 1280px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`;
