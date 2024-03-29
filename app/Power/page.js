"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const drawerWidth = 240;

export default function factor(props) {
  const [powerOutput, setPowerOutput] = React.useState("");
  const [rowOutput, setRowOutput] = React.useState(4);
  const [powerValue, setPowerValue] = React.useState();
  const [numberI, setNumberI] = React.useState("");
  const [powerIValue, setPowerIValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getPower = () => {
    if (numberI !== "" && powerIValue !== "") {
      let power = 1;
      let charout = "";
      for (let i = 1; i <= powerIValue; i++) {
        power = power * numberI;
        let nstring = "";
        for (let j = 1; j <= i; j++) {
          nstring =
            numberI + (j === 1 ? "" : String.fromCharCode(0xd7)) + nstring;
        }
        charout = charout + nstring + " = " + power + "\n";
        setRowOutput(i + 1);
      }
      setPowerValue(power);
      setPowerOutput(charout);
    } else {
      setOpen(true);
    }
  };

  const handleChangeNumber = (e) => {
    setNumberI(e);
  };
  const handleChangePower = (e) => {
    setPowerIValue(e);
  };

  const handleClose = () => {
    setOpen(false);
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
        <h2 className="text-center font-heading m-10 text-4xl sm:text-6xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Power
          </span>
        </h2>
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
            sx={{ width: { md: "49%", xs: "100%" }, mr: { md: 1, lg: 2 } }}
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
            sx={{ width: { md: "49%", xs: "100%" }, mt: { md: 0, xs: 2 } }}
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
          width={{ md: "80%", xs: "100%" }}
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          fill="#101590"
          sx={{ ml: 0 }}
        >
          <text x="50" y="70" fontSize="50">
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
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Invalid Input"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter valid number and power to evalute Value of Power.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
