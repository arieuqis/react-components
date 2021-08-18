import React, { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { useEffect } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviarForm, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(()=>{
    if( etapaAtual === formularios.length-1){
      aoEnviarForm(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviarForm={coletarDados} />,
    <DadosPessoais aoEnviarForm={coletarDados} />,
    <DadosEntrega aoEnviarForm={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step>
      <StepLabel>Login</StepLabel>
    </Step>
    <Step>
      <StepLabel>Pessoal</StepLabel>
    </Step>
    <Step>
      <StepLabel>Entrega</StepLabel>
    </Step>
    <Step>
      <StepLabel>Finalização</StepLabel>
    </Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

export default FormularioCadastro;
