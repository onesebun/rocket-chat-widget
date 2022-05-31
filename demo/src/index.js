import React, {Component} from 'react'
import {render} from 'react-dom'

import RocketChatWidget from '../../src'
// import SendIcon from '@mui/icons-material/Send';

export default class Demo extends Component {
  render() {
    return <div>
      <h1>rocket-chat-widget Demo</h1>
      <RocketChatWidget
        iframeSrc='http://localhost/channel/general'
        anchor='right'
        closeText='關閉'
        drawerWidth={600}
        draggable={false}
        // icon={<SendIcon />}
       />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
