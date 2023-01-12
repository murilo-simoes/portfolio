import styled from "styled-components";

export const Container = styled.div`
  height: 10rem;
  width: 100%;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
  h1 {
    color: #5d5d5d;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
  }
`;
