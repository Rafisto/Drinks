import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Title = () => {
  const [textState, setTextState] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTextState(!textState);
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <div
      style={{
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <div style={{ position: "relative" }}>
        <Typography variant="h1">The Drink Creator</Typography>
      </div>
      <div
        style={{
          marginLeft: "5px",
          paddingLeft: "5px",
        }}
      >
        <Typography variant="h5">
          {textState ? ">" : "_"} Compose your favorite drink
        </Typography>
      </div>
    </div>
  );
};

export default Title;
