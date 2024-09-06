import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import {GiRoyalLove} from 'react-icons/gi'
import ModeContext from '../../context/ModeContext'

import {
  LeftSideBar,
  TopContainer,
  RouteText,
  RouteContainer,
  BottomContainer,
  SocialMediaLogo,
  ContactHeading,
  BottomDescription,
  MediaCont,
} from './StyledComponent'

const SideNavbar = () => (
  <ModeContext.Consumer>
    {value => {
      const {activeTab, isDark, changeTab} = value

      const activeTabBg = isDark ? '#475569' : '#cbd5e1'

      const onClickHome = () => {
        changeTab('Home')
      }

      const onClickTrending = () => {
        changeTab('Trending')
      }

      const onClickGaming = () => {
        changeTab('Gaming')
      }

      const onClickSavedVideos = () => {
        changeTab('SavedVideos')
      }

      return (
        <LeftSideBar isDark={isDark}>
          <TopContainer>
            <Link to="/" style={{textDecoration: 'none'}}>
              <RouteContainer
                key="home"
                onClick={onClickHome}
                bagColor={activeTab === 'Home' ? activeTabBg : 'none'}
              >
                <AiFillHome />
                <RouteText isDark={isDark}>Home</RouteText>
              </RouteContainer>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <RouteContainer
                key="trending"
                onClick={onClickTrending}
                bagColor={activeTab === 'Trending' ? activeTabBg : 'none'}
              >
                <HiFire />
                <RouteText isDark={isDark}>Trending</RouteText>
              </RouteContainer>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <RouteContainer
                key="gaming"
                onClick={onClickGaming}
                bagColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
              >
                <GiRoyalLove />
                <RouteText isDark={isDark}>Gaming</RouteText>
              </RouteContainer>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <RouteContainer
                key="savedVideos"
                onClick={onClickSavedVideos}
                bagColor={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
              >
                <CgPlayListAdd />
                <RouteText isDark={isDark}>Saved Videos</RouteText>
              </RouteContainer>
            </Link>
          </TopContainer>
          <BottomContainer>
            <ContactHeading isDark={isDark}>CONTACT US</ContactHeading>
            <MediaCont>
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </MediaCont>
            <BottomDescription isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </BottomDescription>
          </BottomContainer>
        </LeftSideBar>
      )
    }}
  </ModeContext.Consumer>
)

export default SideNavbar
