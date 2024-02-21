"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

const drawerWidth = 240;

export default function factor(props) {
  const [factorInput, setFactorInput] = React.useState("");
  const [factorOutput, setFactorOutput] = React.useState("");
  const [rowOutput, setRowOutput] = React.useState(4);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getFactor = () => {
    if (factorInput !== "") {
      setFactorOutput(Math.sqrt(factorInput));
    } else {
      setOpen(true);
    }
  };

  const handleChange = (num) => {
    setFactorInput(num);
    setFactorOutput(Math.sqrt(num));
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
            &radic;Square Root
          </span>
        </h2>
        <TextField
          id="outlined-number"
          label="Enter Number"
          type="number"
          inputProps={{ maxLength: 8 }}
          display="block"
          value={factorInput}
          onChange={(e) => handleChange(e.target.value)}
          sx={{
            width: "100%",
            m: 2,
          }}
        />
        <Alert severity="info" sx={{ width: "100%", m: 2 }}>
          Number should not be more than 8 characters long.
        </Alert>
        <Button
          variant="contained"
          sx={{ width: "100%", m: 2 }}
          onClick={() => getFactor()}
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
            √{factorInput} = {factorOutput}
          </text>
        </svg>
        <TextField
          id="outlined-multiline-static"
          label="Square Root"
          disabled={true}
          multiline
          rows={rowOutput}
          value={factorOutput}
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
