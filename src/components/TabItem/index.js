import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabsListDetails, onClickTabList, isActive} = this.props

    const onClickHandle = () => {
      onClickTabList(tabsListDetails.tabId)
    }
    const result = isActive ? 'active-tab' : ''
    return (
      <li>
        <button className={result} type="button" onClick={onClickHandle}>
          {tabsListDetails.displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
