import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectRoute from './components/ProtectRoute'
import ModeContext from './context/ModeContext'

import './App.css'

class App extends Component {
  state = {savedVideosData: [], isDark: false, activeTab: 'Home'}

  toggleDarkMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideosFunction = videoDetails => {
    const {savedVideosData} = this.state
    // console.log([videoDetails])
    const index = savedVideosData.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (index === -1) {
      this.setState({savedVideosData: [...savedVideosData, videoDetails]})
    } else {
      savedVideosData.splice(index, 1)
      this.setState({savedVideosData})
    }
  }

  removeVideo = id => {
    const {savedVideosData} = this.state
    const updatedSavedVideos = savedVideosData.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideosData: updatedSavedVideos})
  }

  render() {
    const {savedVideosData, isDark, activeTab} = this.state
    console.log(activeTab)

    return (
      <ModeContext.Provider
        value={{
          activeTab,
          savedVideosData,
          isDark,
          addVideosFunction: this.addVideosFunction,
          toggleDarkMode: this.toggleDarkMode,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectRoute exact path="/" component={Home} />
          <ProtectRoute exact path="/trending" component={Trending} />
          <ProtectRoute exact path="/Gaming" component={Gaming} />
          <ProtectRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectRoute exact path="/videos/:id" component={VideoItemDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
