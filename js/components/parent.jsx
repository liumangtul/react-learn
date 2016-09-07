import {Child} from './child.jsx';
export let Parent = React.createClass({
    render: function(){
        return (
            <div>
                <div> Hello World </div>
                <Child/>
            </div>
        )
    }
});