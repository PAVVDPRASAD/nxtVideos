import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f5f9')};

  padding: 2%;
`
export const HeaderLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const ModeButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const ModeImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 0px 15px 0px 15px;

  @media (max-width: 767px) {
    display: none;
  }
`

export const DarkCont = styled.div`
  display: flex;
  align-items: center;
`
