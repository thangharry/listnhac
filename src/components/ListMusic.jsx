import axios from "axios";
import React, { useEffect, useState } from "react";
import Songs from "./Songs";

function ListMusic(props) {
    let [song, setSong] = useState([]);
    useEffect(() => {
        let apiURl = "http://localhost:4000/posts";

        let getApi = async () => {
            try {
                let res = await axios.get(apiURl);
                setSong(res.data);
            } catch (error) {
                console.log("lỗi ở lấy api");
            }
        };
        getApi();
    });
    return (
        <div>
            <Songs song={song} handleDetailSong={props.handleDetailSong} />
        </div>
    );
}

export default ListMusic;
