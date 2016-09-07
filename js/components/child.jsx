/*export let Child = React.createClass({
    render: function(){
        return (
            <div> The Child </div>
        )
    }
});*/
import React from 'react';
class Child extends React.Component {
    render(){
        return <div> 孩子 </div>
    }
}
export {Child}
