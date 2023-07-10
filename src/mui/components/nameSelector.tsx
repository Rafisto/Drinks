import { Close, Check } from "@mui/icons-material";
import { Typography, TextField, IconButton } from "@mui/material";
import { IconButtonCancelStyle, IconButtonStyle } from "../drinkEditor";

type NameSelectorProps = {
  currentName: string;
  setCurrentName: (name: string) => void;
  setAddStep: (step: number) => void;
  closeMethod: () => void;
};

const NameSelector = (props: NameSelectorProps) => {
  return (
    <>
      <Typography>Name of the ingredient</Typography>
      <TextField
        sx={{ margin: "20px" }}
        onChange={(e) => props.setCurrentName(e.currentTarget.value)}
        defaultValue={props.currentName}
      />
      <div style={{ padding: "15px" }}>
        <IconButton
          sx={{ ...IconButtonCancelStyle, marginRight: "20px" }}
          onClick={props.closeMethod}
        >
          <Close />
        </IconButton>
        <IconButton sx={IconButtonStyle} onClick={() => props.setAddStep(1)}>
          <Check />
        </IconButton>
      </div>
    </>
  );
};

export default NameSelector;
