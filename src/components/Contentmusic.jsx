import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./Content.module.scss";
import ListMusic from "./ListMusic";
function Contentmusic(props) {
    let [title, settitle] = useState(`Tên bài hát`);

    let [img, setimg] = useState("");
    let handleDetailSong = (songs) => {
        settitle(songs.name);
        setimg(songs.img);
    };
    return (
        <div>
            <Grid container className={styles.wrapContent}>
                <Grid item xs={4} className={styles.contentLeft}>
                    <Typography variant="body1">Now playing</Typography>
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <div className={styles.wrapImg}>
                        <img src={img} alt="" className={styles.image} />
                    </div>
                </Grid>

                <Grid item xs={7} className={styles.contentRight}>
                    <ListMusic handleDetailSong={handleDetailSong} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Contentmusic;
