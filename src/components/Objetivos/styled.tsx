import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const WrapperText = styled.div`
  width: 45%;
  h1 {
    font-size: 2.5rem;
    @media screen and (max-width: 991px) {
      text-align: center;
    }
    @media screen and (max-width: 650px) {
      font-size: 2rem;
    }
  }
  p {
    margin-top: 3rem;
    font-size: 1.1rem;
    color: #838383;
    line-height: 2rem;
    @media screen and (max-width: 650px) {
      font-size: 1rem;
      line-height: 1.5rem;
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 991px) {
    width: 90%;
    margin-top: 4rem;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperImg = styled.div`
  width: 50%;

  @media screen and (max-width: 991px) {
    width: 90%;
    margin-top: 2rem;
  }
  .image {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 3rem;

    @media screen and (max-width: 650px) {
      border-radius: 1.5rem;
    }
  }
`;
