import { Button, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviarForm }) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  
  const validacoes = useContext(ValidacoesCadastro);
  console.log(validacoes);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviarForm({email, senha});
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onBlur={validarCampos}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
