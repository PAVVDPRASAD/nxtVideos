import {Link, withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import PopupDesign from '../PopupDesign'
import PopupDesignMenu from '../PopupDesignMenu'
import ModeContext from '../../context/ModeContext'

import {
  Navbar,
  HeaderLogo,
  ModeButton,
  ModeImage,
  DarkCont,
} from './StyledComponent'

const Header = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDark, toggleDarkMode} = value
      const onClickDarkModesBtn = () => {
        toggleDarkMode()
      }

      const isLogoImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <Navbar isDark={isDark}>
          <Link to="/">
            <HeaderLogo src={isLogoImage} alt="website logo" />
          </Link>
          <DarkCont>
            <ModeButton
              type="button"
              data-testid="theme"
              onClick={onClickDarkModesBtn}
            >
              {isDark ? (
                <FiSun size="30px" color="#ffffff" />
              ) : (
                <FaMoon size="30px" />
              )}
            </ModeButton>
            <ModeImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <PopupDesignMenu />
            <PopupDesign isDark={isDark} />
          </DarkCont>
        </Navbar>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Header)
