import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 8rem;
  margin-bottom: 8rem;
  justify-content: center;
  @media screen and (max-width: 991px) {
    margin-top: 16rem;
    margin-bottom: 16rem;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }

  .divImg {
    width: 40%;
    display: flex;

    @media screen and (max-width: 991px) {
      justify-content: center;
      width: 90%;
    }
  }

  .divText {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 991px) {
      justify-content: center;
      align-items: center;

      width: 90%;
      margin-bottom: 3rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 991px) {
      text-align: center;
    }
    @media screen and (max-width: 650px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  p {
    font-size: 1.1rem;
    color: #838383;
    line-height: 1.8rem;
    @media screen and (max-width: 650px) {
      font-size: 1rem;
    }
  }
`;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
