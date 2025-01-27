import { Skeleton, Stack } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Stack spacing={-8}> 
      <Skeleton sx={{ height: "60px", width: "200px"}} />
      <Skeleton sx={{ height: "280px", width: "100%"}} />
      <Skeleton sx={{ height: "280px", width: "100%" }} />
      <Skeleton sx={{ height: "280px", width: "100%" }} />
      <Skeleton sx={{ height: "280px", width: "100%" }} />
      <Skeleton sx={{ height: "280px", width: "100%" }} />
    </Stack>
  );
};

export default Loading;
