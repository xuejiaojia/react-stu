import React, {Component} from 'react';
import Echarts from 'echarts'
import {option} from "./data";

class Home extends Component {
    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        let myChart = Echarts.init(document.getElementById('main'));


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    }

    render() {
        return (
            <div id={'main'} className={'container'}>
            </div>
        );
    }
}

export default Home;