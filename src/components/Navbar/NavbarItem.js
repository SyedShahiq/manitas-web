import React, { Component } from 'react';

class NavbarItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link" href={"#" + this.props.ref_link}>{this.props.children}{this.props.content}</a>
                </li>
            </React.Fragment>
        )
    }
}
export default NavbarItem;