import { ArrowBack, Add } from "@mui/icons-material";
import { Typography, Slider, IconButton } from "@mui/material";
import { IconButtonCancelStyle, IconButtonStyle } from "../drinkEditor";

type PercentageSelectorProps = {
  currentName: string;
  addIngredient: () => void;
  setCurrentPercentage: (percentage: number) => void;
  setAddStep: (step: number) => void;
};

const PercentageSelector = (props: PercentageSelectorProps) => {
  return (
    <>
      <Typography>Percentage of {props.currentName}</Typography>
      <Slider
        aria-label="Percentage of a drink"
        defaultValue={20}
        valueLabelDisplay="auto"
        step={10}
        min={10}
        max={100}
        sx={{ width: "80%", marginTop: "30px", marginBottom: "15px" }}
        onChange={(_, v) => props.setCurrentPercentage(v as number)}
      ></Slider>
      <div style={{ padding: "15px" }}>
        <IconButton
          sx={{ ...IconButtonCancelStyle, marginRight: "20px" }}
          onClick={() => props.setAddStep(0)}
        >
          <ArrowBack />
        </IconButton>
        <IconButton sx={IconButtonStyle} onClick={props.addIngredient}>
          <Add />
        </IconButton>
      </div>
    </>
  );
};

export default PercentageSelector;
