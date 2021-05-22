import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function AddressForm(props) {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" className="title">Endereço</Typography>        
        <Typography variant="body1"><strong>CEP: </strong>{props.cep}</Typography>
        <Typography variant="body1"><strong>Logradouro: </strong>{props.logradouro}</Typography>
        <Typography variant="body1"><strong>Complemento: </strong>{props.complemento ? props.complemento : "Sem complemento"}</Typography>
        <Typography variant="body1"><strong>Bairro: </strong>{props.bairro}</Typography>
        <Typography variant="body1"><strong>Localidade: </strong>{props.localidade}</Typography>
        <Typography variant="body1"><strong>UF: </strong>{props.uf}</Typography>
      </CardContent>
    </Card>
  )
}

export default AddressForm;