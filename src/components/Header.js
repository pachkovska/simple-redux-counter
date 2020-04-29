import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
    return (
        <div className="header">
            {props.name}
        </div>
    );
}
const mapStateToProps = state => ({
    name: state.name
})

export default connect(mapStateToProps)(Header);