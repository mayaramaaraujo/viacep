import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const FormContainer = styled.div `
  width: 50%;
  text-align: justify;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
export const InputCEP = styled.div `
  display: flex;
  flex-direction: row;
  margin: 50px;
  align-items: top;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: auto;
    margin: 20px 10px;
  }
`
export const SearchButton = styled(Button) `
  margin: 0px 10px;
  width: 40%;
  max-height: 40px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0px 0px;
  }
`