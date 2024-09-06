import {IoIosClose} from 'react-icons/io'
import './index.css'

const BannerCard = () => {
  const onClickCloseBtn = () => {
    const bannerElement = document.querySelector('.banner-bg-image')
    if (bannerElement) {
      bannerElement.classList.add('hide-banner')
    }
  }

  return (
    <div className="banner-bg-image" data-testid="banner">
      <div className="banner-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
          className="banner-logo"
        />
        <p className="banner-text">
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <button type="button" className="banner-button">
          GET IT NOW
        </button>
      </div>
      <button
        type="button"
        className="colse-button"
        data-testid="close"
        onClick={onClickCloseBtn}
      >
        <IoIosClose size="25px" />
      </button>
    </div>
  )
}
export default BannerCard
