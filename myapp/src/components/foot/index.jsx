import React, {Component} from 'react';

class Index extends Component {
    state={
        //只会加载一次
       title: this.props.title
    }
    //生命周期函数，父组件参数变化时触发
    componentWillReceiveProps(nextProp){

        this.setState({
            title: nextProp.title
        })
    }
    render() {
        return (
            <div>
                <h1>这是底部{this.state.title}</h1>
            </div>
        );
    }
}

export default Index;