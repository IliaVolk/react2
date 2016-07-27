/**
 * Created by user on 23.07.2016.
 */

"use strict";
import UserComponent from "./userComponent/UserComponent"
import AddUserComponent from "./addUserComponent/AddUserComponent"
import React, { Component } from 'react'
import User from "../../other/User"
import './userList.css'


export default class UserList extends Component {
    constructor() {
        super();
        this.userToUserComponent = this.userToUserComponent.bind(this);
    }

    static get propTypes(){
        return {
            users: React.PropTypes.arrayOf(React.PropTypes.instanceOf(User)).isRequired,
            userToUserComponent: React.PropTypes.func
        }
    }
    /**
     * @param {User}user
     * @returns {XML}
     */
    userToUserComponent(user) {
        console.log(`userToUserComponent(${user})`)
        return (
                <UserComponent
                    key={user.id}
                    onRemoveUser={this.props.removeUser}
                    user={user}/>
        )
    }

    render() {
        let userComponents = this.props.users
            .map(this.props.userToUserComponent || this.userToUserComponent);
        console.log("UserList.render()");
        return (
            <div className="user-list">
                <h3 className="list-component row">User list:</h3>
                <AddUserComponent onAddUser={this.props.addUser}/>
                {userComponents}
            </div>
        )
    }
}

