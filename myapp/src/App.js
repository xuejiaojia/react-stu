import React, { Component } from 'react';
/*vue中@是src路径 ，react中不能使用*/
import Head from "./components/head";
import Foot from "./components/foot"
/*
* 脚手架构建项目，
*
* 组件状态  state
* 组件props
* 组件事件对象
* ref 属性获取原生dom对象
* 样式 图片(使用requer推荐使用,导入模块也可以)
* */



class App extends Component {
    state={
        title:"上海"
    }
    handleClick=(e)=>{
        const {target,keyCode}=e;
        //事件源对象
        console.log(target);
        console.log(this._footer);

        this.setState({
            title: "北京"
        })

    }
      render() {
        return (
          <div className="App">
              <button onClick={this.handleClick}>点击修改Foot</button>
            <Head
            > </Head>
            <Foot
              title={this.state.title}
              ref={abc=>this._footer=abc}
              > </Foot>
          </div>
        )
      }
}

export default App;
