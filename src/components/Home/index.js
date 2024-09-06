import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {FiSearch} from 'react-icons/fi'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import VideosList from '../VideosList'
import BannerCard from '../BannerCard'
import {HomeContainer, SearchInput, SearchIconButton} from './StyledComponent'
import ModeContext from '../../context/ModeContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    getdata: [],
    search: '',
    homeApiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeData()
  }

  filteredData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
  })

  getHomeData = async () => {
    this.setState({homeApiStatus: apiStatusConstants.inProgress})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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

  homeSuccessView = () => {
    const {getdata} = this.state
    if (getdata.length !== 0) {
      return (
        <ul className="video-list-container">
          {getdata.map(eachVideo => (
            <VideosList key={eachVideo.id} eachVideo={eachVideo} />
          ))}
        </ul>
      )
    }
    return (
      <div className="failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
          className="failure-image"
        />
        <h1>No Search Results Found</h1>
        <p>Try different key words or remove search filter</p>
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

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.getHomeData()
    }
  }

  onClickSearchBtn = () => {
    this.getHomeData()
  }

  render() {
    const {search} = this.state
    return (
      <div>
        <Header />
        <div className="home-main-container">
          <SideNavbar />
          <ModeContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <HomeContainer isDark={isDark} data-testid="home">
                  <BannerCard data-testid="banner" />
                  <div className="search-container">
                    <SearchInput
                      isDark={isDark}
                      type="search"
                      placeholder="Search"
                      className="search-input"
                      onChange={this.onChangeSearch}
                      value={search}
                      onKeyPress={this.handleKeyPress}
                    />
                    <SearchIconButton
                      type="button"
                      isDark={isDark}
                      onClick={this.onClickSearchBtn}
                      data-testid="searchButton"
                    >
                      <FiSearch size="15px" color="#7e858e" />
                    </SearchIconButton>
                  </div>
                  {this.renderHomeAll()}
                </HomeContainer>
              )
            }}
          </ModeContext.Consumer>
        </div>
      </div>
    )
  }
}
export default Home
