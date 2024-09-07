// import React from "react";
// import { Stack, Box } from "@mui/material";
// import { VideoCard, ChannelCard } from "./";
// import Loader from "./Loader";

// const Videos = ({ videos, direction }) => {
//   if (!videos?.length) return <Loader />;
//   return (
//     <Stack
//       // direction={{ xs: "column", sm: "row" }}
//       direction={ direction || "row"}
//       flexWrap="wrap"
//       justifyContent="start"
//       gap={2}
//     >
//       {videos.map((item, idx) => (
//         <Box key={idx}>
//           {item.id.videoId && <VideoCard video={item} />}
//           {item.id.channelId && <ChannelCard channelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Videos;

import React from "react";
import { Stack, Box, useMediaQuery, useTheme } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import Loader from "./Loader";

const Videos = ({ videos, forceColumn = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const direction = forceColumn ? "column" : isMobile ? "column" : "row";

  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} width={direction === "column" ? "100%" : "auto"}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard ChannelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
