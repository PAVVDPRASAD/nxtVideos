import {Link} from 'react-router-dom'
import ModeContext from '../../context/ModeContext'
import {VideoText, VideoTitle} from './StyledComponent'

import './index.css'

const VideosList = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, id, channel, viewCount, publishedAt} = eachVideo
  const {profileImageUrl, name} = channel

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link
            to={`/videos/${id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
            className="each-video-cont-home"
          >
            <li>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-image"
              />
              <div className="video-details-cont">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="profile-logo"
                />
                <div>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <VideoText isDark={isDark}>{name}</VideoText>
                  <div className="view-publish-cont">
                    <VideoText isDark={isDark}>{viewCount}</VideoText>
                    <VideoText isDark={isDark}>{publishedAt}</VideoText>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default VideosList
