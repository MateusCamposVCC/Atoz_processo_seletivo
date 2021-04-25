import logo from "./logo.svg";
import "./App.css";
import {
  CContainer,
  CCard,
  CFormControl,
  CFormLabel,
  CForm,
  CButton,
} from "@coreui/react";
import React, { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cell, setCell] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    //Valida email por Regex
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Valida celular por Regex
    const cellConfirmation = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    //Valida senha parcialmente por Regex
    const passwordValidation = /^[A-Za-z]*$/;

    //seta o error em caso de um dos requisitos estar fora do permitido e a cor da border.
    if (!emailValidation.test(String(email).toLowerCase())) {
      document.getElementById("InputEmail").style.borderColor = "red";
      return setError("E-Mail Inválido.");
    } else document.getElementById("InputEmail").style.borderColor = "#32cd32";

    if (!passwordValidation.test(String(password).toLowerCase())) {
      document.getElementById("InputPassword1").style.borderColor = "red";
      document.getElementById("InputPassword2").style.borderColor = "red";
      return setError(
        "Senha Inválida. Utilizar apenas letras maiusculas ou minúsculas"
      );
    } else {
      document.getElementById("InputPassword1").style.borderColor = "#32cd32";
      document.getElementById("InputPassword2").style.borderColor = "#32cd32";
    }

    if (cell.length > 0) {
      if (!cellConfirmation.test(String(cell).toLowerCase()))
        return setError(
          "Celular Inválido. Deve conter os 9 digitos mais o DDD, ou não preencha este campo.",
          (document.getElementById("InputCell").style.borderColor = "red")
        );
    } else document.getElementById("InputCell").style.borderColor = "#32cd32";

    if (!isNaN(name)) {
      document.getElementById("InputName").style.borderColor = "red";
      return setError("Seu nome deve ser composto apenas por letras.");
    } else document.getElementById("InputName").style.borderColor = "#32cd32";

    if (password.length < 8) {
      document.getElementById("InputPassword1").style.borderColor = "red";
      document.getElementById("InputPassword2").style.borderColor = "red";
      return setError("A senha deve conter mais de 8 caracteres ");
    } else {
      document.getElementById("InputPassword1").style.borderColor = "#32cd32";
      document.getElementById("InputPassword2").style.borderColor = "#32cd32";
    }

    if (confirmPassword !== password) {
      document.getElementById("InputCell").style.borderColor = "red";
      return setError("As Senhas não conferem.");
    } else document.getElementById("InputCell").style.borderColor = "#32cd32";

    if (name?.length < 6) {
      document.getElementById("InputName").style.borderColor = "red";
      return setError("Por favor, digite o seu nome.");
    } else document.getElementById("InputName").style.borderColor = "#32cd32";

    return setError(""), alert("Envio feito com sucesso.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="h1">
        <h1>Formulário</h1>
      </div>
      {/*Exibe o erro*/}
      {error && <div className="Error">{error}</div>}
      <div className="Div-CContainer">
        <CContainer className="form-div">
          <CCard className="App-CCard">
            <CForm className="Form-Label">
              <div className="Div-Form">
                <CFormLabel className="Form-Label">Nome:</CFormLabel>
                <br />
                <CFormControl
                  type="Username"
                  id="InputName"
                  placeholder="Nome. Campo Obrigatório."
                  className="Input-Control"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <h3 className="h3">Mínimo 6 caracteres.</h3>
              </div>
              <div className="Div-Form">
                <CFormLabel className="Form-Label">Senha:</CFormLabel>
                <br />
                <CFormControl
                  type="password"
                  id="InputPassword1"
                  placeholder="Senha. Campo Obrigatório."
                  className="Input-Control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <h3 className="h3">Use apenas letras, deve possuir no mínimo 8 caracteres.</h3>
              </div>
              <div className="Div-Form">
                <CFormLabel className="Form-Label">Confirmar Senha:</CFormLabel>
                <br />
                <CFormControl
                  type="password"
                  id="InputPassword2"
                  placeholder="Confirme a Senha. Campo Obrigatório."
                  className="Input-Control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </CForm>
          </CCard>
          <CCard className="App-CCard">
            <CForm>
              <div className="Div-Form">
                <CFormLabel className="Form-Label">Celular*:</CFormLabel>
                <br />
                <CFormControl
                  type="string"
                  id="InputCell"
                  aria-describedby="basic-addon1"
                  placeholder="Ex: (85) 96565-5017"
                  className="Input-Control"
                  onChange={(e) => setCell(e.target.value)}
                />
                <br />
                <h3 className="h3">*Este campo não é obrigatorio.</h3>
              </div>
              <div className="Div-Form">
                <CFormLabel className="Form-Label">Email:</CFormLabel>
                <br />
                <CFormControl
                  type="email"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Email Ex: atoz@atoz.vc"
                  className="Input-Control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="Div-Button">
                <CButton className="Button" onClick={(e) => submitForm(e)}>
                  Enviar Formulário
                </CButton>
              </div>
            </CForm>
          </CCard>
        </CContainer>
      </div>
    </div>
  );
}

export default App;
