/**
 * Created by user on 25.07.2016.
 */
import UserComponent from "./../userComponent/UserComponent"
import React from "react"
import User from "./../../../other/User"
import "./exudingTextUserComponent.css"

export default class ExudingTextUserComponent extends UserComponent{

    constructor(){
        super()

    }

    static get propTypes(){
        return {
            exudingText: React.PropTypes.string.isRequired,
            user: React.PropTypes.instanceOf(User)
        }
    }
    shouldComponentUpdate(){
        super.shouldComponentUpdate()
        return true;
    }
    /**
     * @override
     * @returns {Array<XML>}
     */
    getUserNameJsx(){
        let text = this.props.exudingText;
        let name = this.props.user.name;
        let nameArray = name.replace(new RegExp(`(${text})`, "gi"), " $1 ");
        let nameArrayJsx = nameArray.split(" ").map(partOfName=>{
            if (partOfName.toLowerCase() === text.toLowerCase())
                return <span className="exudingText">{partOfName}</span>;
            return <span>{partOfName}</span>
        });
        return nameArrayJsx;
    }
    render(){
        return super.render()
    }

}