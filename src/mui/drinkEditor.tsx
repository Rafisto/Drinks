import React from "react";
import IngredientMenu from "./ingredientMenu";
import DisplayContents from "./components/displayContents";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { Ingredient } from "../routes/composer";
import { IconButton, Typography } from "@mui/material";

export const IconButtonStyle = {
  background: "#6f00f7cc",
  color: "white",
  "&:hover": {
    background: "#ffffff",
    color: "#6f00f7",
  },
};

export const IconButtonCancelStyle = {
  background: "#ff0000cc",
  color: "white",
  "&:hover": {
    background: "#ffffff",
    color: "#6f00f7",
  },
};

type DrinkEditorProps = {
  addIngredient: (name: string, percentage: number) => void;
  removeIngredient: (name: string) => void;
  ingredients: Ingredient[];
  drinkName: string;
  filled: number;
};

const DrinkEditor = (props: DrinkEditorProps) => {
  const [add, setAdd] = useState(false);

  const toggleAdd = () => {
    setAdd(!add);
  };

  return (
    <React.Fragment>
      <div style={{ marginRight: "0", padding: "40px" }}>
        <Typography variant="h4">./{props.drinkName}</Typography>
        <DisplayContents
          filled={props.filled}
          ingredients={props.ingredients}
          removeIngredient={props.removeIngredient}
        />
        <div style={{ margin: "auto", textAlign: "center" }}>
          {!add ? (
            <IconButton
              sx={{ ...IconButtonStyle, margin: "20px" }}
              onClick={toggleAdd}
            >
              <Add />
            </IconButton>
          ) : (
            <IngredientMenu
              closeMethod={() => toggleAdd()}
              addIngredient={props.addIngredient}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DrinkEditor;
