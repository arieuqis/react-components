import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviarForm }) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviarForm({ nome, sobreNome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        onChange={(event) => {
          setNome(event.target.value);
        }}
        value={nome}
        id="nome"
        name="nome"
        variant="outlined"
        label="Nome"
        fullWidth
        margin="normal"
        required
      />

      <TextField
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        value={sobreNome}
        id="sobrenome"
        name="sobrenome"
        variant="outlined"
        label="Sobrenome"
        fullWidth
        margin="normal"
        required
      />

      <TextField
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validarCampos}
        value={cpf}
        id="cpf"
        name="cpf"
        variant="outlined"
        label="CPF"
        fullWidth
        margin="normal"
        required
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            checked={promocoes}
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            checked={novidades}
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
