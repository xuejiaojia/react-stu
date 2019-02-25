import React, {Component} from 'react';
import "./index.css"
export default class Index extends  React.Component{
    render(){
        const list=this.props.list;
        return (
            <div>
                <ol>
                    {
                        list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.sex}</p>
                                    <p>{item.description}</p>
                                </li>
                            )

                        })
                    }
                </ol>
            </div>
        )
    }
}
