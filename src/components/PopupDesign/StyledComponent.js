import styled from 'styled-components'

export const LogButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 10px;
  border: 1px solid #3b82f6;
  width: 60px;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  border-color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  @media (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #383838;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`
export const PopupHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #e2e8f0;
  margin-bottom: 15px;
  font-weight: 500;
`
export const ButtonPopupCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonCancel = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  border: 1px solid #ebebeb;
  padding: 8px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`
export const ButtonConfirm = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  border: 1px solid #3b82f6;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`
export const LogIconButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 767px) {
    background-color: transparent;
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    border-width: 0px;
    cursor: pointer;
  }
`
