import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="nomatch">
            <div className="errorMsg">
                <h3 className="errorText"> Ops.... Your page is not found !!</h3>
                <h2 className="errorHeading">Error 404!!</h2>
                <p>Go back<Link to="/home" >Home</Link></p>
            </div>
        </div>
    );
};

export default NoMatch;