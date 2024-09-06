import Header from '../Header'
import SideNavbar from '../SideNavbar'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <SideNavbar />
      <div className="not-found-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
          className="not-found-image"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found.</p>
      </div>
    </div>
  </div>
)
export default NotFound
