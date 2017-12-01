import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: this.props.match.params.phone
        }
    }

    render() {
        return (
            <div className="ContactUs">
                <h1>{"Gracias por contactarnos: ".concat(this.state.phone)}</h1>
                <Link to="/juan">
                    <p>Ir a home</p>
                </Link>
            </div>
        );
    }
}

ContactUs.propTypes = {
    match: PropTypes.any
}

export default ContactUs;
