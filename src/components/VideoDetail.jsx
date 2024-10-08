import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import { FetchedThis } from "../utility/FetchedThis";

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchedThis(`videos?part=snippet,statistics&id=${id}`).then(data =>
      setvideoDetail(data.items[0])
    );
    FetchedThis(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      data => setvideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "loading.....";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, favoriteCount },
  } = videoDetail;

  return (
    <Box minHeight="100vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              top: "86px",
              position: "sticky",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h6" fontWeight="bold" p={1}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center">
          <Videos videos={videos} forceColumn={true} />
        </Box>
      </Stack>
    </Box>
  );
};
export default VideoDetail;
