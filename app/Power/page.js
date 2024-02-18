"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
const drawerWidth = 240;

export default function factor(props) {
  const [powerOutput, setPowerOutput] = React.useState("");
  const [rowOutput, setRowOutput] = React.useState(4);
  const [powerValue, setPowerValue] = React.useState();
  const [numberI, setNumberI] = React.useState();
  const [powerIValue, setPowerIValue] = React.useState();
  const getPower = () => {
    let power = 1;
    let charout = "";
    for (let i = 1; i <= powerIValue; i++) {
      power = power * numberI;
      charout = charout + numberI + " power " + i + " = " + power + "\n";
    }
    setPowerValue(power);
    setPowerOutput(charout);
    setRowOutput(powerIValue);
  };

  const handleChangeNumber = (e) => {
    setNumberI(e);
  };
  const handleChangePower = (e) => {
    setPowerIValue(e);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        m: 2,
        mt: 10,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        borderRadius: 3,
        justifyContent: "center",
      }}
      bgcolor={"white"}
    >
      <Box
        id="factor"
        sx={{
          width: { md: "96%", sm: "90%", xs: "85%" },
          m: 2,
        }}
      >
        <Box
          component="form"
          sx={{
            m: 2,
            width: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-number-1"
            label="Number"
            type="number"
            sx={{ width: "49%", mr: 1.5 }}
            onChange={(e) => handleChangeNumber(e.target.value)}
            value={numberI}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number-2"
            label="Power"
            type="number"
            sx={{ width: "49%", ml: 1.5 }}
            onChange={(e) => handleChangePower(e.target.value)}
            value={powerIValue}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ width: "100%", m: 2 }}
          onClick={() => getPower()}
        >
          Calculate
        </Button>
        <svg
          width="80%"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          fill="#101590"
        >
          <text x="50" y="70" fontSize="70">
            {powerValue}
          </text>
        </svg>
        <TextField
          id="outlined-multiline-static"
          label="Power Calculation"
          disabled={true}
          multiline
          rows={rowOutput}
          value={powerOutput}
          sx={{
            width: "100%",
            m: 2,
          }}
        />
      </Box>
    </Box>
  );
}
