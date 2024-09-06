import styled from 'styled-components'

export const LeftSideBar = styled.div`
  width: 20%;
  height: 100vh;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => (props.isDark ? '#231f20' : '#f1f5f9')};
  @media (max-width: 767px) {
    display: none;
  }
`
export const TopContainer = styled.ul`
  list-style-type: none;
`
export const BottomContainer = styled.div``

export const RouteContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const RouteText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  margin-left: 10px;
  outline: none;
  text-decoration: none;
`
export const SocialMediaLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 8px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  font-weight: bold;
  margin-bottom: 10px;
`
export const BottomDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
`
export const MediaCont = styled.div``
