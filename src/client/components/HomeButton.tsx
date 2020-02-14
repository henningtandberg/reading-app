import React from "react";
import {Link} from "react-router-dom";

const HomeButton = () => (
	<div className="home-button col-md-12 text-left">
        <Link to="/">
            <div className="fa fa-arrow-left"></div>
        </Link>
    </div>
);

export default HomeButton;
