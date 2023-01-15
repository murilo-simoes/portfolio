import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 50%;
  padding-top: 3rem;
  padding-bottom: 1rem;
  height: 100%;
  border: 1px solid #ababab;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 1280px) {
    width: 62%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Wrapper = styled.form`
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .inputDiv {
    margin-bottom: 3rem;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .mensagem {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  label {
    font-size: 1.1rem;
    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }
  textarea {
    margin-top: 1.7rem;
    resize: none;
    width: 97%;
    height: 150px;
    font-size: 1.1rem;
    color: #838383;
    padding-left: 3%;
    padding-top: 3%;
    transition: 550ms;
    border-radius: 1rem;
    border: 1px solid #cbcbcb;
    @media screen and (max-width: 900px) {
      width: 95%;
      font-size: 0.9rem;
      padding-left: 5%;
      padding-top: 5%;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    margin-top: 1.7rem;
    width: 90%;
    height: 65px;
    transition: 550ms;
    font-size: 1rem;
    color: #838383;
    padding-left: 10%;
    border-radius: 5rem;
    border: 1px solid #cbcbcb;

    @media screen and (max-width: 900px) {
      font-size: 0.9rem;
    }
  }
  input:hover {
    border: 1px solid #000;
  }
  textarea:hover {
    border: 1px solid #000;
  }
  input:focus {
    color: #000;
  }

  .divButton {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
  }
  button {
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
    @media screen and (max-width: 900px) {
      width: 100%;
      font-size: 1rem;
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
`;
