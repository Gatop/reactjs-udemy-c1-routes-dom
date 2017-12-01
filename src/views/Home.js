import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name
        }
    }

    render() {
        console.log(this.props.match.params.name);
        return (
            <div className="Home">
                <h1>{ "Welcome Home: ".concat(this.state.name)}</h1>
                <Link to="contact-us/8452">
                    <p>Ir a contactanos</p>
                </Link>
            </div>
        );
    }
}

// React router envia por default el parametro con /:name
Home.propTypes = {
    match: PropTypes.any
}

export default Home;
