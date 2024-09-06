import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'

import {
  LogButton,
  LogIconButton,
  PopupContainer,
  PopupHeading,
  ButtonCancel,
  ButtonConfirm,
  ButtonPopupCont,
} from './StyledComponent'

const PopupDesign = props => {
  const onClickConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const {isDark} = props

  return (
    <>
      <Popup
        modal
        trigger={
          <LogIconButton type="button" isDark={isDark}>
            <FiLogOut size="25px" />
          </LogIconButton>
        }
        className="popup-content"
      >
        {close => (
          <PopupContainer>
            <PopupHeading>Are you sure, you want to logout</PopupHeading>
            <ButtonPopupCont>
              <ButtonCancel type="button" onClick={() => close()}>
                Cancel
              </ButtonCancel>
              <ButtonConfirm type="button" onClick={onClickConfirm}>
                Confirm
              </ButtonConfirm>
            </ButtonPopupCont>
          </PopupContainer>
        )}
      </Popup>
      <Popup
        modal
        trigger={
          <LogButton type="button" isDark={isDark}>
            Logout
          </LogButton>
        }
        className="popup-content"
      >
        {close => (
          <PopupContainer>
            <PopupHeading>Are you sure, you want to logout</PopupHeading>
            <ButtonPopupCont>
              <ButtonCancel type="button" onClick={() => close()}>
                Cancel
              </ButtonCancel>
              <ButtonConfirm type="button" onClick={onClickConfirm}>
                Confirm
              </ButtonConfirm>
            </ButtonPopupCont>
          </PopupContainer>
        )}
      </Popup>
    </>
  )
}
export default withRouter(PopupDesign)
