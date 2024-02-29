// Write your JS code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home_container">
        <nav className="Home_headerContainer">
          <div className="header_LogoConatiner">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="header_websitelogo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="header_navlogout"
            />
          </div>
          <div className="Home_iconContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="Home_iconContainer_Image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="Home_iconContainer_Image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="Home_iconContainer_Image"
            />
          </div>
          <ul className="HomeLinkContainer">
            <li className="homeLink_para">Home</li>
            <li className="homeLink_para">Products</li>
            <li className="homeLink_para">Cart</li>
            <li>
              <button className="Logout_Btn" type="button">
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <div className="Home_bodyContainer">
          <div className="bodyContainer_cardContainer">
            <h1 className="body_heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="body_image"
            />
            <p className="body_para">
              Fashion is part of the daily air and Its does not quite help that
              it changfes all the time. Clothes have always been a maker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard That way you are. So celebrate the seasons new and
              exciting fashion in your way.
            </p>
            <button className="ShopNow_Btn" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            alt="clothes that get you noticed"
            className="Home_bigscreenImage"
          />
        </div>
      </div>
    )
  }
}

export default Home
