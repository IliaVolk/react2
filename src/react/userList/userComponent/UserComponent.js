/**
 * Created by user on 23.07.2016.
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import User from '../../../other/User'

export default class UserComponent extends Component{

    constructor() {
        super();
        this.onRemoveUser = this.onRemoveUser.bind(this);
    }
    static get propTypes(){
        return {
            user: React.PropTypes.instanceOf(User).isRequired,
            onRemoveUser: React.PropTypes.func.isRequired
        }
    }
    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).css("display", "none").slideDown();
    }

    onRemoveUser(){
        console.log("onRemoveUser");
        $(ReactDOM.findDOMNode(this)).slideUp(()=>{
            this.props.onRemoveUser(this.props.user);
        });
    }
    shouldComponentUpdate(){
        console.log("shouldUpdate")
        return false;
    }
    getUserNameJsx(){
        return <span>{this.props.user.name}</span>
    }
    render() {
    return (
        <div className="list-component row">
            Name: {this.getUserNameJsx()}
            <button className="btn btn-danger pull-right" onClick={this.onRemoveUser}>Remove</button>
        </div>
    );

}
}