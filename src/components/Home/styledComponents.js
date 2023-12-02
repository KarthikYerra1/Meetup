import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  font-family: 'Roboto';
`
export const HomeHeading = styled.h1`
  color: ${props => (props.registered ? '#2563eb' : '#334155')};
  font-size: ${props => (props.registered ? '50px' : '45px')};
  font-weight: 500;
  margin: 0;
  padding: 0;
`
export const HomeDescription = styled.p`
  margin-top: 20px;
  color: ${props => (props.registered ? ' #334155' : '#475569')};
  font-size: ${props => (props.registered ? '30px' : '25px')};
  font-weight: ${props => (props.registered ? 'bold' : '')};
`

export const RegisterButton = styled.button`
  height: 40px;
  width: 100px;
  padding: 10px;
  color: #fff;
  background-color: #3b82f6;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  :hover {
    scale: 1.07;
  }
`

export const HomeImage = styled.img`
  height: 55%;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
