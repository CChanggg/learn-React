import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class Title extends Component {
    handleClickOnTitle (e) {
      console.log(this)
    }
  
    render () {
      return (
        <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
      )
    }
  }
  class Header extends Component {
    render () {
      return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
      )
    }
  }
  
  class Main extends Component {
    render () {
      return (
      <div>
        <h2>This is main content</h2>
      </div>
      )
    }
  }
  
  class Footer extends Component {
    render () {
      return (
      <div>
        <h2>This is footer</h2>
      </div>
      )
    }
  }
  
  class Index extends Component {
    render () {
      return (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Index />,
    document.getElementById('root')
  )
// registerServiceWorker();


/**
 * 完成一个 renderContent 函数，这个函数会把传入的任意字符串都包装到一个 <h1> 元素中并且渲染到页面上。
 */
// function renderContent (content){
//     ReactDOM.render(
//     <h1>{content}</h1>,
//     document.getElementById('root')
// )
// }

/**
 * 使用 React.js 构建一个未读消息组件 Notification
 */
// class Notification extends Component {
//     render () {
//         let N = getNotificationsCount()
//         return (
//         <div>
//             <span>{N>0?`有(${N})条未读消息`:`没有未读消息`}</span>
//         </div>
//       )
//     }
//   }