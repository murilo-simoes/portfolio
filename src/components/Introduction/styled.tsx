import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 47rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 991px) {
    height: 100%;
  }
  @media screen and (max-width: 450px) {
    margin-top: 3rem;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;
export const WrapperImg = styled.div`
  width: 40%;
  height: 100%;
  .image {
    object-fit: contain;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 6rem;
    transition: transform 0.2s;
    @media screen and (max-width: 650px) {
      border-radius: 3rem;
    }
  }
  @media screen and (max-width: 991px) {
    width: 50%;
    margin-top: 3rem;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
    margin-top: 2rem;
  }
`;

export const WrapperText = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  @media screen and (max-width: 991px) {
    width: 90%;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    margin-top: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  h1 {
    font-size: 4.5rem;
    line-height: 5rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 1050px) {
      font-size: 3.5rem;
      line-height: 4rem;
    }
    @media screen and (max-width: 991px) {
      margin-bottom: 2rem;
      text-align: center;
      font-size: 3rem;
    }
    @media screen and (max-width: 650px) {
      font-size: 2.2rem;
      line-height: 2.5rem;
    }
  }
  p {
    color: #838383;
    line-height: 1.8rem;
    word-spacing: 0.3rem;
    font-size: 1.1rem;
    @media screen and (max-width: 991px) {
      line-height: 1.3rem;
    }
    @media screen and (max-width: 650px) {
      font-size: 1rem;
    }
  }
`;
