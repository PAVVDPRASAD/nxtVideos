import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 1%;
  height: 100%;
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const SearchInput = styled.input`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-size: 12px;
  padding: 8px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  border: 1px solid #909090;
  height: 30px;
  width: 50%;
  outline: none;
`

export const SearchIconButton = styled.button`
  font-family: 'Roboto';
  color: #909090;
  font-size: 10px;
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f5f9')};
  border: 1px solid #909090;
  height: 30px;
  cursor: pointer;
`
