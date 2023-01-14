import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 520px) {
    flex-direction: column;
    margin-top: 0;
  }
  h1 {
    color: #525252;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
  }
`;
