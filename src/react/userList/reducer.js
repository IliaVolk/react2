/**
 * Created by user on 26.07.2016.
 */


import User from "./../../other/User"

/**
 * @param {Array<User>}array
 * @param {User}user
 */
function removeUserFromArray(array, user){
    for (let i = 0; i < array.length; i+=1){
        if (array[i].id === user.id){
            array.splice(i,1);
            return array;
        }
    }
    return array;
}

let initialState = {
    users: [
        new User("Алексей"),
        new User("Василий")],
    searchPattern: ""
};

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type){
        case "ADD_USER":
            return Object.assign({}, state,{
                users: state.users.concat([action.user])
            } );
        case "REMOVE_USER":
            return Object.assign({}, state,{
                users: removeUserFromArray(state.users, action.user)
            } );
        case "SEARCH_USER":
            return Object.assign({}, state, {
                searchPattern: action.searchPattern
            });
        default:
            return state;
    }
}