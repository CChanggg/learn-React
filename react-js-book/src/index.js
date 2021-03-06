import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = { data: null }
    }

    componentWillMount () {
      let data = localStorage.getItem(name)
      this.setState({ data })
    }

    render () {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
} 
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

/**
 * React.js 加载、刷新数据
 */
// class Post extends Component {
//   constructor () {
//     super()
//     this.state = { content: '' }
//   }
//   componentWillMount () {
//     this._loadData()
//   }
//   async _loadData () {
//     this.setState({ content: '数据加载中...' })
//     const content = await getPostData()
//     this.setState({ content })
//   }
  
//   render () {
//     return (
//       <div>
//         <div className='post-content'>{this.state.content}</div>
//         <button onClick={() => {
//           this._loadData()
//         }}>刷新</button>
//       </div>
//     )
//   }
// }