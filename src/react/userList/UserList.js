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
        /*this.state  = {
            users: [
                new User("Алексей"),
                new User("Василий")
            ],
            searchPattern: ""
        };*/
        this.onAddUser = this.onAddUser.bind(this);
        this.onRemoveUser = this.onRemoveUser.bind(this)
        this.onUserSearch = this.onUserSearch.bind(this)
        this.userToUserComponent = this.userToUserComponent.bind(this);
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
                    onRemoveUser={this.onRemoveUser}
                    user={user}/>
        )
    }

    render() {
        if (this.props.stateFromReducer)
        var userComponents = this.props.stateFromReducer.users.map(this.userToUserComponent)
        console.log("UserList.render()");
        return (
            <div className="user-list">
                <h3 className="list-component row">User list:</h3>
                <SearchUserForm onUserSearch={this.onUserSearch}/>
                <AddUserComponent onAddUser={this.onAddUser}/>
                {userComponents}
            </div>
        )
    }
    /**
     *
     * @param{String}name
     */
    onAddUser(name) {
        this.props.addUser(name)
        /*this.setState({
            users: this.state.users.concat([new User(name)])
        })*/
    }




    onUserSearch(searchPattern){
        this.props.searchUser(searchPattern)
        /*this.setState({
            searchPattern: text
        })*/
    }
    /**
     * @param {User}user
     */
    onRemoveUser(user) {
        this.props.removeUser(user)
        /*this.removeUserFromArray(user);
        this.forceUpdate()*/
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