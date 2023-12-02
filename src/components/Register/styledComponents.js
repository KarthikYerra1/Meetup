import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  padding: 20px;
`
export const FormImageContainer = styled(RegisterContainer)`
  height: 70%;
  width: 80%;
  padding: 10px;
`
export const RegisterImage = styled.img`
  height: 100%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 10px;
  font-family: 'Roboto';
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 50px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 14px;
  color: #64748b;
  font-weight: bold;
`
export const Input = styled.input`
  height: 40px;
  padding: 10px 15px;
  width: 100%;
  color: #475569;
  border: solid 1px #cbd5e1;
  border-radius: 3px;
  margin-top: 5px;
  outline: none;
  margin-bottom: 20px;
  cursor: pointer;
`
export const Select = styled(Input)`
  font-family: 'Roboto';
`

export const Option = styled.option`
  font-family: 'Roboto';
  padding: 10px 20px;
  color: #475569;
`
export const SubmitBtn = styled.button`
  height: 40px;
  width: 130px;
  background-color: #3b82f6;
  border-style: none;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  color: #fff;
  padding: 10px;
  margin-top: 15px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  margin: 0;
  padding: 0;
`
