import * as React from "react";
import { Container, Wrapper, Card } from "./styled";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [assunto, setAssunto] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  const notify = () => toast.warning("Preencha os campos corretamente!");
  const notify2 = () => toast.success("Mensagem enviada com sucesso!");

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (
      nome === "" ||
      email === "" ||
      telefone === "" ||
      assunto === "" ||
      mensagem === ""
    ) {
      return notify();
    }
    emailjs
      .sendForm(
        "service_32474d3",
        "template_9jandxj",
        e.target,
        "IZ9MwYC4-q08MezXL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    notify2();
    setNome("");
    setEmail("");
    setTelefone("");
    setAssunto("");
    setMensagem("");
  };
  return (
    <>
      <Container>
        <Card>
          <Wrapper onSubmit={sendEmail}>
            <div className="inputDiv">
              <label>Nome</label>
              <input
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome Completo"
                type="text"
                name="name"
                value={nome}
              />
            </div>
            <div className="inputDiv">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                name="email"
                value={email}
              />
            </div>
            <div className="inputDiv">
              <label>Telefone</label>
              <input
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(**)****-****"
                type="text"
                name="numero"
                value={telefone}
              />
            </div>
            <div className="inputDiv">
              <label>Assunto</label>
              <input
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Assunto"
                type="text"
                name="assunto"
                value={assunto}
              />
            </div>
            <div className="mensagem">
              <label>Mensagem</label>
              <textarea
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva aqui sua mensagem..."
                name="message"
                value={mensagem}
              />
            </div>
            <div className="divButton">
              <button>Enviar Mensagem</button>
            </div>
          </Wrapper>
        </Card>
      </Container>
      <ToastContainer theme="dark" />
    </>
  );
};

export default ContactForm;
