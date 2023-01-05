import React from "react";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "./componets/sidebar";
import Feed from "./componets/feed";
import RightBar from "./componets/rightbar";
import Navbar from "./componets/navbar";
import Addbutton from "./componets/add";

const App = () => {
  const [mode, setMode] = useState(" ");
  const [loading, setisLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setisLoading(false);
    }, 4000);
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    !loading && (
      <Box>
        <Navbar />
        <Stack spacing={2} direction="row" justifyContent="space-evenly">
          <Sidebar />
          <Feed />
          <RightBar />
          <Addbutton />
        </Stack>
      </Box>
    )
  );
};

export default App;
