import React, { Component } from 'react';
/*vue中@是src路径 ，react中不能使用*/
/*vue双向数据绑定，react是单向数据流,实现使用onchange*/
/*ui库 蚂蚁设计*/
import Content from "./components/content/index"

import {dataList} from "./static/js/data"
class App extends Component {
    state={
        arr:[true,false,false]
    }
    handlerChange=(i)=>{

        const arr=this.state.arr.map((item,index)=>{
            if(i===index) return true;
            return false;
        })

        //刷新数据
        this.setState({arr})
    }
    /* handlerClick=(index)=>{
             const arr=this.state.arr;
             arr[index]=!arr[index]

             //更新数据,必须要更新否则组建中数据不变，没有效果
         this.setState({arr})

     }*/
    getData=()=>{
        return dataList;
    }
    render(){
        //获取数据
        const data=this.getData()
        return (
            <div>
            {
                Object.keys(data).map((item, index) => {
                return (
                    <Content
                     key={index}
                    {...data[item]} //解构赋值，传参
                     show={this.state.arr[index]}
                     change={this.handlerChange}
                        index={index}
                    > </Content>
                 )
                 })
             }
             </div>
        )
    }
}

export default App;
