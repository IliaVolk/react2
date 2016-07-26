/**
 * Created by user on 25.07.2016.
 */

import React from "react"
import ReactDom from "react-dom"

export default class SearchUserForm extends React.Component {
    constructor() {
        super()
        this.onUserSearch = this.onUserSearch.bind(this)
    }

    static get propTypes() {
        return {
            onUserSearch: React.PropTypes.func.isRequired
        }
    }

    onUserSearch() {
        this.props.onUserSearch(ReactDom.findDOMNode(this.refs.input).value)
    }

    render() {
        return (
            <div className="list-component row">
                <input ref="input"
                       placeholder="User Search Form"
                       onChange={this.onUserSearch}
                />
            </div>
        )
    }
}