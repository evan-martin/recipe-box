import React from "react";

import AddIcon from "@material-ui/icons/Add";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import "./side-btn-group.styles.scss";

export default function SideButtonGroup() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="btn-container">
            <Box
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}>
                <ButtonGroup
                    orientation="vertical"
                    variant="contained">
                    <Button size="large" onClick={scrollToTop} color="secondary"><ArrowUpwardIcon /></Button>
                    <Button size="large" href="/create"><AddIcon /></Button>
                </ButtonGroup>
            </Box>
        </div>
    );
}