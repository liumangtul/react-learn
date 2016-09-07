import React from 'react';
import {Child} from './child.jsx';
import * as rootActions from '../actions/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {store} from '../store/store';

class Parent extends React.Component {
    render(){
        console.log(this.props)
        return <div>
            <div>你好</div>
            <div>{this.props.text}</div>
            <Child/>
        </div>
    }
}

//将state.text绑定到props.text
let state=store.getState();
function mapStateToProps(state) {
    return {
        text: state.text
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(rootActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
let P=connect(mapStateToProps, mapDispatchToProps)(Parent);
export {    P   }