import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    margin-left: 0.5rem;
    font-size: 1.1rem;
    color: #4e4b66;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: #4e4b66;
  }
  .github {
    width: 1.7rem;
    text-decoration: none;
    color: #4e4b66;
  }
  .divIcons {
    display: flex;
    align-items: center;
    @media screen and (max-width: 900px) {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 1280px) {
    width: 70%;
  }
`;
