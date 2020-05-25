import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const NavBar = ({

}) => (
    <div classname="NavBar">
        <Fragment>
            <span>
                <Link to="/tracks">
                    {/* icon or something */}
                </Link>
            </span>
            <span>
                <Link to="/phrasebox">
                    {/* icon or something */}
                </Link>
            </span>
            <span>
                <Link to="/chordbox">
                    {/* icon or something */}
                </Link>
            </span>
            <span>
                <Link to="/sharing">
                    {/* icon or something */}
                </Link>
            </span>
            <span>
                {/* LOGOUT */}
                
            </span>
        </Fragment>
    </div>
);