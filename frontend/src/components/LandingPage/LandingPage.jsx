import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./LandingPageComponent/Navbar/Navbar";
import HeroSection from "./LandingPageComponent/HeroSection/HeroSection";

const LandingPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#eec7d0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", bgcolor: "blue" }}>
        <Navbar/>
      </Box>
      <Box sx={{ width: "100%", bgcolor: "blue" }}>
        <HeroSection/>
      </Box>
    </Box>
  );
};

export default LandingPage;
