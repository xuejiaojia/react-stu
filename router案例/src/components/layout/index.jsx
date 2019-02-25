import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from "../home";
import Line from "../line";
import Column from "../column";
import not404 from "../not404";

export default class LayOut extends Component {
    render() {
        return (
            <div className={'router'}>
                < div
                    className={'menu'}>
                    < div
                        className={'logo'}>
                        < img
                            width={'100%'}
                            height={'100%'}
                            src={require('../../static/img/logo.png')}
                        />
                    </div>
                        <div className={'side_nav'}>
                            <ul>
                                <li><NavLink exact className={'iconfont icon-shouye'} exact to={'/'}>首页</NavLink></li>
                                <li><NavLink className={'iconfont icon-performance'} to='/line'>折线图</NavLink></li>
                                <li><NavLink className={'iconfont icon-tubiao-zhuzhuangtu'} to='/column'>柱状图</NavLink>
                                </li>
                            </ul>
                        </div>
                </div>
                < div
                    className={'content'}>
                    <div className='con_top_nav'>
                        < ul>
                                    <li><a className={'active'}>追梦</a></li>
                                    <li><a className={'iconfont icon-xinfeng'}></a></li>
                                    <li><a className={'iconfont icon-iconfontunie62c'}></a></li>
                                    <li><a className={'iconfont icon-xiaoxi'}></a></li>
                                    <li><a className={'iconfont icon-geren'}></a></li>
                                </ul>
                    </div>
                    <div className={'show_con'}>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/line'} component={Line}/>
                            <Route path={'/column'} component={Column}/>
                            <Route component={not404}/>
                        </Switch>

                    </div>
                </div>
            </div>
        );
    }
}