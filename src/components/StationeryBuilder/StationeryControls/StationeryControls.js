import React from "react";
import classes from "./StationeryControls.module.css";
import StationeryControl from "./StationeryControl/StationeryControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Pencil", type: "pencil" },
  { label: "Notebook", type: "notebook" },
  { label: "Pen", type: "pen" },
  { label: "Eraser", type: "eraser" },
  { label: "Ruler", type: "ruler" },
  { label: "Scissors", type: "scissors" },
];
export default ({ canOrder, items, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <StationeryControl
      key={control.type}
      control={control}
      disabled={items[control.type] === 0}
    />
  ));

  return (
    <div className={classes.StationeryControls}>
      {controlsOutput}

      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
