import {Component} from 'react'
import Cookies from 'js-cookie'
import ModeContext from '../../context/ModeContext'
import {
  MainContainer,
  LoginLabel,
  LoginInput,
  LoginContainer,
} from './StyledComponent'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg: `*${errorMsg}`})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeChecked = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state

    return (
      <ModeContext.Consumer>
        {value => {
          const {isDark} = value
          const loginImage = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <MainContainer isDark={isDark}>
              <LoginContainer isDark={isDark}>
                <img
                  src={loginImage}
                  alt="website logo"
                  className="companyLogo"
                />
                <form className="form-cont" onSubmit={this.onSubmitForm}>
                  <LoginLabel htmlFor="userName" isDark={isDark}>
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    onChange={this.onChangeUsername}
                    value={username}
                    id="userName"
                    placeholder="Username"
                    isDark={isDark}
                    type="text"
                  />
                  <LoginLabel htmlFor="password" isDark={isDark}>
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    onChange={this.onChangePassword}
                    value={password}
                    id="password"
                    placeholder="Password"
                    isDark={isDark}
                    type={showPassword ? 'text' : 'password'}
                  />
                  <input
                    onChange={this.onChangeChecked}
                    value={showPassword}
                    id="checkbox"
                    type="checkbox"
                  />
                  <LoginLabel htmlFor="checkbox" isDark={isDark}>
                    Show Password
                  </LoginLabel>
                  <button className="login-button" type="submit">
                    Login
                  </button>
                  <p className="error_msg">{errorMsg}</p>
                </form>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default Login
