/**
 * Created by user on 23.07.2016.
 */

import UserList from "./userList/UserList"
import React, { Component } from 'react'
import './app.css'



export default class App extends Component{
    render() {
        return (
            <div>
                <UserList/>
            </div>
        );
    }
}


