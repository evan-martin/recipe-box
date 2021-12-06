import React from "react";

import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


import "./fab-bar.styles.scss";

export default function FabBar() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fab-bar">
            <Tooltip title="Add New Recipe">
                <Link to="/create" className="new-recipe-button">
                    <Fab color="primary" >
                        <AddIcon />
                    </Fab>
                </Link>
            </Tooltip>

            <Tooltip title="Scroll to top">
                <div className="scroll-to-top">
                    <Fab onClick={scrollToTop} color="secondary" >
                        <ArrowUpwardIcon />
                    </Fab>
                </div>
            </Tooltip>
        </div>
    );
}
