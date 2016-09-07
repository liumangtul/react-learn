import {Child} from './child.jsx';
/*
export let Parent = React.createClass({
    render: function(){
        return (
            <div>
                <div> Hello World </div>
                <Child/>
            </div>
        )
    }
});*/
import React from 'react';
class Parent extends React.Component {
    render(){
        return <div>
            <div>你好</div>
            <Child/>
        </div>
    }
}
export {Parent};