import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appsListDetails} = this.props
    return (
      <li className="app-container">
        <img src={appsListDetails.imageUrl} alt={appsListDetails.appName} />
        <p>{appsListDetails.appName}</p>
      </li>
    )
  }
}

export default AppItem
