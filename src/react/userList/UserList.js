/**
 * Created by user on 23.07.2016.
 */

"use strict";
import UserComponent from "./userComponent/UserComponent"
import AddUserComponent from "./addUserComponent/AddUserComponent"
import React, { Component } from 'react'
import User from "../../other/User"
import './userList.css'
import ExudingTextUserComponent from "./exudingTextUserComponent/ExudingTextUserComponent"
import SearchUserForm from "./searchUserForm/SearchUserForm"
import * as actions from "./actions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {
    constructor() {
        super();
        this.userToUserComponent = this.userToUserComponent.bind(this);
        this.filterUserSearch = this.filterUserSearch.bind(this)
    }





    /**
     * @param {User}user
     * @returns {XML}
     */
    userToUserComponent(user) {
        console.log(`userToUserComponent(${user})`)
        return (
                <ExudingTextUserComponent
                    exudingText={this.props.stateFromReducer.searchPattern}
                    key={user.id}
                    onRemoveUser={this.props.removeUser}
                    user={user}/>
        )
    }

    render() {
        let userComponents = this.props.stateFromReducer.users
            .filter(this.filterUserSearch)
            .map(this.userToUserComponent);
        console.log("UserList.render()");
        return (
            <div className="user-list">
                <h3 className="list-component row">User list:</h3>
                <SearchUserForm onUserSearch={this.props.searchUser}/>
                <AddUserComponent onAddUser={this.props.addUser}/>
                {userComponents}
            </div>
        )
    }

    /**
     * @param {User}user
     */
    filterUserSearch(user){
    let text = this.props.stateFromReducer.searchPattern.toLowerCase();
    if (text === "")return true;
    let name = user.name.toLowerCase();
    return name.indexOf(text) > -1
}

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
console.log("user list connected created ", JSON.stringify(UserListConnected));
export default UserListConnected;