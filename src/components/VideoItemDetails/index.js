import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import ModeContext from '../../context/ModeContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    getdata: [],
    homeApiStatus: apiStatusConstants.initial,
    liked: false,
    disliked: false,
    isSave: false,
  }

  componentDidMount() {
    this.getHomeData()
  }

  filteredData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
  })

  getHomeData = async () => {
    this.setState({homeApiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(this.props)
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)

    if (response.ok) {
      const formattedData = this.filteredData(data.video_details)

      // console.log(formattedData)
      this.setState({
        getdata: formattedData,
        homeApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        homeApiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickLikeBtn = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disliked: false,
    }))
  }

  onClickDislikeBtn = () => {
    this.setState(prevState => ({
      disliked: !prevState.disliked,
      liked: false,
    }))
  }

  homeSuccessView = () => (
    <ModeContext.Consumer>
      {value => {
        const {getdata, liked, disliked, isSave} = this.state
        const {
          videoUrl,
          title,
          channel,
          viewCount,
          publishedAt,
          description,
        } = getdata

        const {profileImageUrl, name, subscriberCount} = channel

        const date = new Date(publishedAt)
        const publishYears = formatDistanceToNow(date)

        const likeBtnStyle = liked ? 'like-active-icon' : 'like-icon'
        const dislikeBtnStyle = disliked ? 'like-active-icon' : 'like-icon'
        const isSaveBtnStyle = isSave ? 'like-active-icon' : 'like-icon'

        const {addVideosFunction} = value
        const onClickSaveVideoData = () => {
          addVideosFunction(getdata)
          this.setState(prevState => ({isSave: !prevState.isSave}))
        }

        return (
          <div className="trending-container1">
            <ReactPlayer
              url={videoUrl}
              controls
              className="react-player-video"
            />
            <p className="video-view-title">{title}</p>
            <div className="video-functions-cont">
              <div>
                <p className="like-text">{viewCount} views</p>
                <p className="like-text">{publishYears}</p>
              </div>
              <div>
                <button
                  className="like-button"
                  type="button"
                  onClick={this.onClickLikeBtn}
                >
                  <FiThumbsUp size="16px" className={likeBtnStyle} />
                  <span className={`like-text ${likeBtnStyle}`}>Like</span>
                </button>
                <button
                  className="like-button"
                  type="button"
                  onClick={this.onClickDislikeBtn}
                >
                  <FiThumbsDown size="16px" className={dislikeBtnStyle} />
                  <span className={`like-text ${dislikeBtnStyle}`}>
                    Dislike
                  </span>
                </button>
                <button
                  type="button"
                  onClick={onClickSaveVideoData}
                  className="like-button"
                >
                  <CgPlayListAdd size="16px" className={isSaveBtnStyle} />
                  <span className={`like-text ${isSaveBtnStyle}`}>
                    {isSave ? 'saved' : 'save'}
                  </span>
                </button>
              </div>
            </div>
            <hr />
            <div className="profile-video-container">
              <img
                src={profileImageUrl}
                className="profile-logo"
                alt="channel logo"
              />
              <div>
                <p className="video-view-title">{name}</p>
                <p className="like-text">{subscriberCount} subscribers</p>
                <p className="like-text">{description}</p>
              </div>
            </div>
          </div>
        )
      }}
    </ModeContext.Consumer>
  )

  homeFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble completing your request. Please try again.
      </p>
      <button type="button" className="retry-bnt" onClick={this.getHomeData}>
        Retry
      </button>
    </div>
  )

  renderLoderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderHomeAll = () => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case apiStatusConstants.success:
        return this.homeSuccessView()
      case apiStatusConstants.failure:
        return this.homeFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoderView()
      default:
        return null
    }
  }

  render() {
    // const {savedVideosDataList} = this.state
    return (
      <div>
        <Header />
        <div className="home-main-container">
          <SideNavbar />
          <ModeContext.Consumer>
            {value => {
              const {isDark} = value

              return (
                <div
                  className="main"
                  style={{
                    backgroundColor: isDark ? '#181818' : '#f9f9f9',
                  }}
                  data-testid="videoItemDetails"
                >
                  {this.renderHomeAll()}
                </div>
              )
            }}
          </ModeContext.Consumer>
        </div>
      </div>
    )
  }
}
export default VideoItemDetails
