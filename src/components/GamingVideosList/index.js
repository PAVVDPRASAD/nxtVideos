import {Link} from 'react-router-dom'
import ModeContext from '../../context/ModeContext'

import './index.css'

const GamingVideosList = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, id, viewCount} = eachVideo

  return (
    <ModeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link
            to={`/videos/${id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
            className="each-video-cont"
          >
            <li className="trending-list-cont">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-image"
              />
              <p
                className="video-title"
                style={{color: isDark ? '#f9f9f9' : '#181818'}}
              >
                {title}
              </p>
              <p className="video-name">{viewCount} Waching Worldwide</p>
            </li>
          </Link>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default GamingVideosList
