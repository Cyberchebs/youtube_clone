import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { FetchedThis } from "../utility/FetchedThis";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log("ok");

  useEffect(() => {
    FetchedThis(`channels?part=snippet&id=${id}`).then(data =>
      setChannelDetail(data?.items[0])
    );

    FetchedThis(`search?channelId=${id}&part=Snippet&order=date`).then(data =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(95,161,200,1) 8%, rgba(255,0,206,1) 100%)`,
            zIndex: "10",
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "150px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
