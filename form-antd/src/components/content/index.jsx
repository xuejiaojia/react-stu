import React, {Component} from 'react';
import List from "../list/index"

export default class Index extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            //构造函数中获取数据，需要接受参数
            onOff:this.props.show
        }
        //构造器中函数 只能执行一次  父组件数据刷新 子组件不能及时刷新
        //  使用生命钩子

    }

    //  组件数据改变 调用
    shouldComponentUpdate(nextProps, nextState) {

        if(this.state.onOff != nextProps.show){
            this.setState({
                onOff: nextProps.show
            })
        }
        if(this.state.onOff!=nextState.onOff){
            this.toggleList(nextState.onOff)
        }

        return true;
    }
    //组件加载完成
    componentDidMount() {
        this.toggleList(this.state.onOff);
    }

    // 切换元素 高度,显示 隐藏
    toggleList=(onOff)=>{
        const  ele=this._list
        if(onOff){
            ele.style.height=ele.scrollHeight+"px"
        }else{
            ele.style.height=0;
        }
    }
    handlerClick=()=>{

        const onOff = !this.state.onOff;

        //更新数据,必须要更新否则组建中数据不变，没有效果
        this.setState({onOff})
        //展示当前 隐藏其他项
        //  获取index

        //子组件调用父组件方法
        this.props.change(this.props.index)


    }
    render(){
        //解构赋值
        const {name,list}=this.props;

        return (
            <div>
                <h2 onClick={this.handlerClick}>{name}</h2>
                <div className="list"
                     ref={lista=>this._list=lista}
                >
                    <List list={list}>

                    </List>
                </div>


            </div>
        )
    }
}
