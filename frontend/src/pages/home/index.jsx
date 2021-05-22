import React, { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';
import AddressForm from '../../components/AddressForm';
import TextField from '@material-ui/core/TextField';
import { FormContainer, InputCEP, SearchButton } from './style';

function Home() {
  const [inputCep, setInputCep] = useInput('');
  const [{ id, cep, logradouro, complemento, bairro, localidade, uf }, setAddress] = useState({});
  const [error, setError] = useState({isError: false, message: ""})

  const searchAddress = async () => {
    setAddress({id: ""});
    setError({isError: false, message: ""})

    await axios.get(`http://localhost:3333/address/${inputCep}`)
      .then((res) => {
        setAddress(res.data[0])
      })
      .catch((err) => {

        if(err.response.data.includes("Invalid")) {
          setError({isError: true, message: "Formato inválido."})
        }
        
        if(err.response.data.includes("replace")) {
          setError({isError: true, message: "CEP inválido!"})
        }

        if(err.response.data.includes("large")) {
          setError({isError: true, message: "CEP inválido!"})
        }

      });
  }

  useEffect(() => { }, [id, error])

  return (
    <FormContainer>
      <InputCEP>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          placeholder="cep"
          value={inputCep}
          onChange={(e) => setInputCep(e)}
          fullWidth
          error={error.isError}
          helperText={error.message}
        />
        <SearchButton onClick={searchAddress} variant="contained" color="primary">Buscar endereço</SearchButton>
      </InputCEP>

      {id &&
        <AddressForm
          cep={cep}
          logradouro={logradouro}
          complemento={complemento}
          bairro={bairro}
          localidade={localidade}
          uf={uf}
        />
      }
    </FormContainer>
  )
}

export default Home;