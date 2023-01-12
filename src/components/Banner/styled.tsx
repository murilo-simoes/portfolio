import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 790px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 790px) {
    text-align: center;
    align-items: center;
  }
  .title {
    font-size: 1.5rem;
    white-space: nowrap;
    color: #53506a;
    @media screen and (max-width: 1150px) {
      font-size: 1rem;
    }
  }
  .desc {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 4.8rem;
    @media screen and (max-width: 1150px) {
      font-size: 3.2rem;
    }
    @media screen and (max-width: 790px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  .divButton {
    height: 60px;
  }
  .button {
    padding: 30px 60px;
    background-color: #000;
    color: #fff;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 400;
    transition: 300ms;
    border: none;
    @media screen and (max-width: 1150px) {
      padding: 24px 40px;
    }
    @media screen and (max-width: 700px) {
      padding: 20px 120px;
    }
    &:hover {
      color: #000;
      background-color: #fff;
      margin-top: -0.5rem;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
  }
  .murilo {
    width: 550px;
    height: 600px;

    @media screen and (max-width: 1280px) {
      width: 500px;
      height: 550px;
    }
    @media screen and (max-width: 1150px) {
      width: 350px;
      height: 400px;
    }
    @media screen and (max-width: 700px) {
      margin-top: 1rem;
    }
    @media screen and (max-width: 600px) {
      width: 325px;
      height: 350px;
    }
  }
`;
