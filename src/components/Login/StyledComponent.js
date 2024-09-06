import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  @media (max-width: 767px) {
    height: 90vh;
  }
`
export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  box-shadow: 0px 4px 16px 2px #bfbfbf;
  width: 40%;
  padding: 3%;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const LoginLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  margin-bottom: 8px;
`
export const LoginInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #94a3b8;
  outline: none;
  height: 30px;
  border-radius: 4px;
  padding: 5px;
  font-family: 'Roboto';
  font-size: 10px;
  color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
