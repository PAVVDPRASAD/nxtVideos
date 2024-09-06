import {Link} from 'react-router-dom'
import {VideoText, VideoTitle} from './StyledComponent'
import ModeContext from '../../context/ModeContext'

import './index.css'

const AllListVideos = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, id, channel, viewCount, publishedAt} = eachVideo
  const {name} = channel
  console.log(eachVideo)

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link
            to={`/videos/${id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
            className="each-video-cont-Trend"
          >
            <li className="trending-list-conta">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-image-view"
              />
              <div className="video-details-cont">
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <VideoText isDark={isDark}>{name}</VideoText>
                <div className="view-publish-cont">
                  <VideoText isDark={isDark}>{viewCount}</VideoText>
                  <VideoText isDark={isDark}>{publishedAt}</VideoText>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default AllListVideos
