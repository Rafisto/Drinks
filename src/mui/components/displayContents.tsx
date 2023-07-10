import { Typography, List, ListItem, IconButton, Paper } from "@mui/material";
import React from "react";
import { IconButtonCancelStyle, IconButtonStyle } from "../drinkEditor";
import { Edit, Cancel } from "@mui/icons-material";

type DisplayContentsProps = {
  removeIngredient: (name: string) => void;
  ingredients: { name: string; percentage: number }[];
  filled: number;
};

const PaperStyle = {
  background: "#00000022",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: "10px",
};

const DisplayContents = (props: DisplayContentsProps) => {
  return (
    <React.Fragment>
      <Paper sx={{ ...PaperStyle, marginBlock: "10px" }}>
        <Typography variant="h5">
          contents ({props.filled}% complete):
        </Typography>
      </Paper>
      {(props.ingredients.length != 0) && (
      <Paper sx={PaperStyle}>
        <List sx={{ width: "100%" }}>
          {props.ingredients.map((ingredient) => (
            <ListItem sx={{ display: "flex", width: "100%" }}>
              <div style={{ flexGrow: 1 }}>
                <Typography variant="body1">
                  {ingredient.name} ({ingredient.percentage}%)
                </Typography>
              </div>
              <IconButton sx={IconButtonStyle} size="small">
                <Edit />
              </IconButton>
              <IconButton
                sx={{ ...IconButtonCancelStyle, marginLeft: "10px" }}
                size="small"
                onClick={() => props.removeIngredient(ingredient.name)}
              >
                <Cancel />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
      )}
    </React.Fragment>
  );
};

export default DisplayContents;
