import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import ModeContext from '../../context/ModeContext'
import AllListVideos from '../AllListVideos'

import './index.css'

const SavedVideos = () => (
  <div>
    <Header />
    <div className="home-main-container">
      <SideNavbar />
      <div data-testid="savedVideos">
        <div className="trending-container">
          <div className="heading-cont">
            <CgPlayListAdd
              size="16px"
              color="#ffffff"
              style={{
                height: '40px',
                width: '40px',
                borderRadius: '20px',
                backgroundColor: '#000000',
                padding: '8px',
              }}
            />
            <h1 className="trending-heading">Saved Videos</h1>
          </div>
          <ModeContext.Consumer>
            {value => {
              const {savedVideosData, isDark} = value

              return savedVideosData.length > 0 ? (
                <ul style={{backgroundColor: isDark ? '#0f0f0f' : '#f9f9f9'}}>
                  {savedVideosData.map(eachVideo => (
                    <AllListVideos eachVideo={eachVideo} />
                  ))}
                </ul>
              ) : (
                <div
                  className="failure-container"
                  style={{backgroundColor: isDark ? '#0f0f0f' : '#f9f9f9'}}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="failure-image"
                  />
                  <h1 style={{color: isDark ? '#f9f9f9' : '#0f0f0f'}}>
                    No saved videos found
                  </h1>
                  <p style={{color: isDark ? '#f9f9f9' : '#0f0f0f'}}>
                    Save your videos by clicking a button
                  </p>
                </div>
              )
            }}
          </ModeContext.Consumer>
        </div>
      </div>
    </div>
  </div>
)

export default SavedVideos
