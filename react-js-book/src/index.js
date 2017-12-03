import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText} 👍
      </button>
    )
  }
}
class Index extends Component {
  constructor () {
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }
  handleClickOnChange () {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }

  render () {
    return (
      <div>
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText} />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
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

/**
 *  不能摸的狗（二）
 */
// class Dog extends Component {
//   constructor () {
//     super ()
//     this.state = {
//       isRunning: false,
//       isBarking: false
//     }
//   }
//   bark () {
//     console.log('bark')
//     this.setState({ isBarking: true })
//     setTimeout(() => this.setState({ isBarking: false }), 20)
//   }
//   run () {
//     console.log('run')
//     this.setState({ isRunning:true })
//     setTimeout(() => this.setState({ isRunning: false }), 20)
//   }
//   handleClickOnDog () {
//     this.bark()
//     this.run()
//   }
//   render() {
//     return (
//       <div onClick={this.handleClickOnDog.bind(this)}>DOG</div>
//     )
//   }
// }
