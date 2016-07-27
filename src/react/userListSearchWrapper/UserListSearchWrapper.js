import React from "react"
import UserList from "./../userList/UserList"
import SearchUserForm from "./../userList/searchUserForm/SearchUserForm"
import ExudingTextUserComponent from "./../userList/exudingTextUserComponent/ExudingTextUserComponent"


export default class UserListSearchWrapper extends React.Component {
    constructor() {
        super()
        this.filterUserSearch = this.filterUserSearch.bind(this)
        this.userToUserComponent = this.userToUserComponent.bind(this)
    }

    static get propTypes() {
        return {}
    }

    render() {
        let {users} = this.props.stateFromReducer;
        let {addUser, removeUser} = this.props;
        return (
            <div className="container">
                <SearchUserForm onUserSearch={this.props.searchUser}/>
                <UserList
                    users={users.filter(this.filterUserSearch)}
                    addUser={addUser}
                    removeUser={removeUser}
                    userToUserComponent={this.userToUserComponent}
                />
            </div>)
    }
    /**
     * @param {User}user
     */
    filterUserSearch(user) {
        let text = this.props.stateFromReducer.searchPattern.toLowerCase();
        if (text === "")return true;
        let name = user.name.toLowerCase();
        return name.indexOf(text) > -1
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
}

import * as actions from "./../userList/actions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const WrapperConnected = connect(mapStateToProps, mapDispatchToProps)(UserListSearchWrapper);
console.log("user list connected created ", JSON.stringify(WrapperConnected));
export default WrapperConnected;