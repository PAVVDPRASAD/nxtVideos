import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 14px;
  background-color: #cccccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`

export const MenuList = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
`

export const ButtonCancel = styled.button`
  background-color: transparent;
  color: #ebebeb;
  font-family: 'Roboto';
  font-size: 10px;
  border: 1px solid #ebebeb;
  padding: 8px;
  border-radius: 4px;
  margin-right: 10px;
`
export const MenuBarButton = styled.button`
  color: #000000;
  font-family: 'Roboto';
  border-width: 0px;
  cursor: pointer;
  backgroun-color: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`
