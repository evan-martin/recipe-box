import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./footer.styles.scss";

export default function Header() {

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#FFFFFF'
            }
        }
    });

    return (
        <div className="footer">
            <div className="logo">
                <a href="https://github.com/evan-martin/recipe-box" rel="noopener" style={{ textDecoration: "none" }}>
                    <h4>Evan Martin</h4>
                    <ThemeProvider theme={theme}>
                        <GitHubIcon color="secondary" />
                    </ThemeProvider>
                </a>
            </div>
            <a href="/about" style={{ textDecoration: "none" }} >
                <p>About</p>
            </a>
        </div>
    );
}
