import React from "react";
import styles from "./Navbar.module.scss";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import { Typography } from "@mui/material";
function Navbar(props) {
    return (
        <div className={styles.wrapNavbar}>
            <MusicVideoIcon fontSize="large" />
            <Typography variant="h3" component="h1">
                List Nhạc
            </Typography>
        </div>
    );
}

export default Navbar;
