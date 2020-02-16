import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
    public render() {
        return (
            <div className="row">
                <div className="footer-text col-xl-12">
                    <p>Problemer eller feil med appen?</p>
                </div>
                <div className="footer-button col-xl-12">
                    <Link to="/issue">Ta kontakt her</Link>
                </div>
            </div>
        );
    }
}

export default Footer;
