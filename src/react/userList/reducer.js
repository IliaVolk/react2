/**
 * Created by user on 26.07.2016.
 */


import User from "./../../other/User"



let users = [
    new User("Алексей"),
    new User("Василий")];
/**
 * @param {User}user
 */
function removeUserFromArray(user){
    let array = users
    for (let i = 0; i < array.length; i+=1){
        if (array[i].id === user.id){
            array.splice(i,1);
            return array;
        }
    }
    return array;
}
/**
 * @param {string}pattern
 * @param {User}user
 */
function filterUserSearch(pattern, user){
    let text = pattern.toLowerCase();
    if (text === "")return true;
    let name = user.name.toLowerCase();
    return name.indexOf(text) > -1
}
let initialState = {
    users: users,
    searchPattern: ""
};

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type){
        case "ADD_USER":
            users.add(action.user);
            return {
                searchPattern: state.searchPattern,
                users: users
            };
        case "REMOVE_USER":
            removeUserFromArray(action.user)
            return {
                searchPattern: state.searchPattern,
                users: users
            };
        case "SEARCH_USER":
            return {
                searchPattern: action.searchPattern,
                users: users.filter(filterUserSearch.bind(null, action.searchPattern))
            };
        default:
            return state;
    }
}