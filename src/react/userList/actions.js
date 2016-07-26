/**
 * Created by user on 26.07.2016.
 */

import User from "./../../other/User"

export function addUser(newUserName){
    return {
        type: "ADD_USER",
        user: new User(newUserName)
    }
}
export function removeUser(user){
    return {
        type: "REMOVE_USER",
        user: user
    }
}
export function searchUser(searchPattern){
    return {
        type: "SEARCH_USER",
        searchPattern: searchPattern
    }
}
