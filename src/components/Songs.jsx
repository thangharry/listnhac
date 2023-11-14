import React, { useState } from "react";
import styles from "./Songs.module.scss";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Songs({ song, handleDetailSong }) {
    let [currentSong, setCurrentSong] = useState(song[0]);

    // so sánh idsong với song.id(khi click vào). Nếu 2 đứa có id giống nhau thì đổi màu
    let [idSong, setIdSong] = useState(1);

    let handleClickSong = (songID, i) => {
        setIdSong(songID);
        setCurrentSong(i.path);
        console.log(i.path);
        handleDetailSong(i);
    };

    // hàm next song
    let handleClickNext = () => {
        let NextSong = song.findIndex((i) => i.id === idSong) + 1;
        if (NextSong < song.length) {
            handleDetailSong(song[NextSong]);
            setCurrentSong(song[NextSong].path);
            setIdSong(song[NextSong].id);
        } else {
            handleDetailSong(song[0]);
            setCurrentSong(song[0].path);
            setIdSong(song[0].id);
        }
    };

    // hàm previous song
    let handleClickPre = () => {
        let PrevSong = song.findIndex((i) => i.id === idSong) - 1;

        if (PrevSong >= 0) {
            handleDetailSong(song[PrevSong]);
            setCurrentSong(song[PrevSong].path);
            setIdSong(song[PrevSong].id);
        } else {
            handleDetailSong(song[song.length - 1]);
            setCurrentSong(song[song.length - 1].path);
            setIdSong(song[song.length - 1].id);
        }
    };

    // hàm sử lý delete
    let handleClose = async (e, i) => {
        e.preventDefault();
        alert(`Bài hát ${i.name} đã xóa`);
        let apiURl = `http://localhost:4000/posts/${i.id}`;

        try {
            await axios.delete(apiURl);
        } catch (error) {
            console.log("lỗi ở lấy api");
        }
    };
    return (
        <div>
            <div className={styles.listMusic}>
                <table cellPadding={3}>
                    <thead>
                        <tr>
                            <th className={styles.id}>id</th>
                            <th className={styles.title}>Tên Bài Hát</th>
                            <th>Tác Giả</th>
                            <th>
                                <Button variant="contained">
                                    <Link
                                        to="/addmusic"
                                        className={styles.addSong}
                                    >
                                        Thêm bài hát
                                    </Link>
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {song.map((i, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={`${
                                        idSong === i.id ? styles.active : ""
                                    }`}
                                >
                                    <td>{i.id}</td>
                                    <td
                                        className={styles.itemTitle}
                                        onClick={() =>
                                            handleClickSong(i.id, i, i.path)
                                        }
                                    >
                                        {i.name}
                                    </td>
                                    <td>{i.author}</td>
                                    <td>
                                        <button
                                            onClick={(e) => handleClose(e, i)}
                                        >
                                            Xóa bài hát
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <AudioPlayer
                src={currentSong}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={() => {
                    handleClickNext();
                }}
                onClickPrevious={() => {
                    handleClickPre();
                }}
            />
        </div>
    );
}

export default Songs;
