import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./Addmusic.module.scss";
import axios from "axios";
function Addmusic(props) {
    let [name, setname] = useState("");

    let [author, setauthor] = useState("");

    let [linksong, setlinksong] = useState("");

    let [linkgimg, setlinkimg] = useState("");

    const handlename = (e) => {
        setname(e.target.value);
    };

    const handleauthor = (e) => {
        setauthor(e.target.value);
    };

    const handlelinksong = (e) => {
        setlinksong(e.target.value);
    };

    const handlelinkimg = (e) => {
        setlinkimg(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        alert(`bạn vừa thêm bài ${name} vào list nhạc`);
        let apiURl = "http://localhost:4000/posts";

        try {
            await axios.post(apiURl, {
                name: name,
                author: author,
                path: linksong,
                img: linkgimg,
            });
        } catch (error) {
            console.log("lỗi ở lấy api");
        }
        setname("");
        setauthor("");
        setlinksong("");
        setlinkimg("");
    };
    return (
        <div className={styles.wrapAddmusic}>
            <h1>page add music</h1>
            <Typography variant="h4" component="body1">
                Nhập nội dung bài hát của bạn vào form
            </Typography>
            <form className={styles.centerForm}>
                <table>
                    <tbody>
                        <tr>
                            <td>Tên bài hát:</td>{" "}
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => handlename(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tác giả:</td>
                            <td>
                                <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => handleauthor(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Link địa chỉ bài hát:</td>
                            <td>
                                <input
                                    type="text"
                                    value={linksong}
                                    onChange={(e) => handlelinksong(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Link hình ảnh:</td>
                            <td>
                                <input
                                    type="text"
                                    value={linkgimg}
                                    onChange={(e) => handlelinkimg(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    onClick={(e) => handleClick(e)}
                                >
                                    Thêm bài hát
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Addmusic;
