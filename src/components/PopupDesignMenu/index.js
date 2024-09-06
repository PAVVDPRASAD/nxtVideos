import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FiMenu} from 'react-icons/fi'

import {PopupContainer, MenuBarButton, MenuList} from './StyledComponent'

const PopupDesignMenu = () => (
  <Popup
    trigger={
      <MenuBarButton type="button">
        <FiMenu size="25px" />
      </MenuBarButton>
    }
  >
    {close => (
      <PopupContainer>
        <Link to="/" onClick={close} style={{textDecoration: 'none'}}>
          <MenuList>Home</MenuList>
        </Link>
        <Link to="/trending" onClick={close} style={{textDecoration: 'none'}}>
          <MenuList>Trending</MenuList>
        </Link>
        <Link to="/gaming" onClick={close} style={{textDecoration: 'none'}}>
          <MenuList>Gaming</MenuList>
        </Link>
        <Link
          to="/saved-videos"
          onClick={close}
          style={{textDecoration: 'none'}}
        >
          <MenuList>Saved Videos</MenuList>
        </Link>
      </PopupContainer>
    )}
  </Popup>
)

export default withRouter(PopupDesignMenu)
