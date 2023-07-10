import {
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useState } from "react";
import NameSelector from "./components/nameSelector";
import PercentageSelector from "./components/percentageSelector";

type IngredientMenuProps = {
  closeMethod: () => void;
  addIngredient: (name: string, percentage: number) => void;
};

const IngredientMenu = (props: IngredientMenuProps) => {
  const [addStep, setAddStep] = useState(0);

  const [currentName, setCurrentName] = useState("");
  const [currentPercentage, setCurrentPercentage] = useState(20);

  const addIngredient = () => {
    props.addIngredient(currentName, currentPercentage);
    props.closeMethod();
  };

  return (
    <Paper
      sx={{ background: "#00000022", textAlign: "center", marginBlock: "10px" }}
    >
      <div>
        <div>
          <Stepper activeStep={0} sx={{ padding: "20px" }}>
            <Step>
              <StepLabel>Name</StepLabel>
            </Step>
            <Step>
              <StepLabel>Percentage</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div>
          {addStep === 0 ? (
            <NameSelector
              currentName={currentName}
              setCurrentName={setCurrentName}
              setAddStep={setAddStep}
              closeMethod={props.closeMethod}
            />
          ) : (
            <PercentageSelector
              currentName={currentName}
              setCurrentPercentage={setCurrentPercentage}
              setAddStep={setAddStep}
              addIngredient={addIngredient}
            />
          )}
        </div>
      </div>
    </Paper>
  );
};

export default IngredientMenu;
