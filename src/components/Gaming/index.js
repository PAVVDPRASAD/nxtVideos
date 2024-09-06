import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiRoyalLove} from 'react-icons/gi'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import GamingVideosList from '../GamingVideosList'
import ModeContext from '../../context/ModeContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    getdata: [],
    homeApiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeData()
  }

  filteredData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  })

  getHomeData = async () => {
    this.setState({homeApiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const formattedData = data.videos.map(eachVideo =>
        this.filteredData(eachVideo),
      )
      console.log(formattedData)
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

  homeSuccessView = () => {
    const {getdata} = this.state

    return (
      <div className="trending-container">
        <div className="heading-cont">
          <GiRoyalLove
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
          <h1 className="trending-heading">Gaming</h1>
        </div>
        <ul className="video-list-container">
          {getdata.map(eachTrending => (
            <GamingVideosList key={eachTrending.id} eachVideo={eachTrending} />
          ))}
        </ul>
      </div>
    )
  }

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
                  data-testid="gaming"
                  style={{backgroundColor: isDark ? '#181818' : '#f9f9f9'}}
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
export default Gaming
