import axios from "axios";
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

import express, { Request, Response } from "express";
import path from "path";

const PORT =
    process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;
const app = express();

app.set("trust proxy", 1);
app.use(express.json()); // support json encoded bodies

app.get("/api/test", (req: Request<any, any, any, any>, res: Response<any>) => {
    res.json({ date: new Date().toString() });
});

app.get("/api/giphy", (req: Request<any, any, any, any>, res: Response<any>) => {
    axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=${req.query.q}&limit=${req.query.limit}`
                )
                .then((response) => {
                    res.json(response.data)
                });
});
app.get("/api/youtube", (req: Request<any, any, any, any>, res: Response<any>) => {

    axios
                .get(
                    `https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=${req.query.q}&key=${process.env.YOUTUBE_API}`
                )
                .then((response) => {
                    res.json(response.data)
                });
});
app.get("/api/youtube/motivation", (req: Request<any, any, any, any>, res: Response<any>) => {

    axios
                .get(
                    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCrKBIycwgkmU7TJbO5HGL6w&maxResults=25&key=${process.env.YOUTUBE_API}`
                )
                .then((response) => {
                    res.json(response.data)
                });
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "build")));

    app.get("/*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "client", "build", "index.html")
        );
    });
}

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
