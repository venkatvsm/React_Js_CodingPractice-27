// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', errorOccured: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitFormTigger = async event => {
    const {username, password} = this.state
    const {history} = this.props
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, errorOccured: true})
    }
  }

  render() {
    const {errorOccured, errorMsg} = this.state
    return (
      <div className="Login_Container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="LoginForm_logoImage1"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="LoginForm_logo"
          />
        </div>
        <form
          className="LoginForm_CardContainer"
          onSubmit={this.submitFormTigger}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="Login_logoImage"
          />
          <label className="LoginForm_label" htmlFor="username">
            UserName
          </label>
          <input
            type="text"
            placeholder="Username"
            className="LoginForm_input"
            id="username"
            onChange={this.onChangeUsername}
          />
          <label className="LoginForm_label" htmlFor="Password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="LoginForm_input"
            id="Password"
            onChange={this.onChangePassword}
          />
          <button type="submit" className="LoginForm_btn">
            Login
          </button>
          {errorOccured ? <p className="errorMsg">*{errorMsg}</p> : null}
        </form>
      </div>
    )
  }
}
export default LoginForm
