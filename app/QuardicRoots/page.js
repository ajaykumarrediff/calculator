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
  const [rootOutput, setRootOutput] = React.useState("");
  const [rowOutput, setRowOutput] = React.useState(4);
  const [rootStatus, setRootStatus] = React.useState();
  const [valueA, setValueA] = React.useState("");
  const [valueB, setValueB] = React.useState("");
  const [valueC, setValueC] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getPower = () => {
    if (valueA !== "" && valueB !== "" && valueC !== "") {
      let a = valueA;
      let b = valueB;
      let c = valueC;
      let equStatus = b * b - 4 * a * c;
      if (equStatus === 0) {
        let root = -(b / (2 * a));
        setRootStatus("Equal Real Roots");
        setRootOutput(root);
      } else if (equStatus >= 0) {
        let root1 = (-b + Math.sqrt(equStatus)) / (2 * a);
        let root2 = (-b - Math.sqrt(equStatus)) / (2 * a);
        setRootStatus("Different Real Roots");
        setRootOutput(root1 + " & " + root2);
      } else if (equStatus <= 0) {
        setRootStatus("No real root available");
        setRootOutput("N/A");
      }
    } else {
      setOpen(true);
    }
  };

  const handleChangeA = (e) => {
    setValueA(e);
  };
  const handleChangeB = (e) => {
    setValueB(e);
  };
  const handleChangeC = (e) => {
    setValueC(e);
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
            Roots of Quardic Equation
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
            label="Coefficient of x²"
            type="number"
            placeholder="value of a"
            sx={{ width: { md: "32.2%", xs: "100%" }, mr: { md: 1, lg: 1.8 } }}
            onChange={(e) => handleChangeA(e.target.value)}
            value={valueA}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number-2"
            label="Coefficient of x"
            type="number"
            placeholder="value of b"
            sx={{
              width: { md: "32.2%", xs: "100%" },
              mt: { md: 0, xs: 2 },
              mr: { md: 1, lg: 1.8 },
            }}
            onChange={(e) => handleChangeB(e.target.value)}
            value={valueB}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number-3"
            label="Constant"
            type="number"
            placeholder="value of c"
            sx={{ width: { md: "32.2%", xs: "100%" }, mt: { md: 0, xs: 2 } }}
            onChange={(e) => handleChangeC(e.target.value)}
            value={valueC}
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
            {rootOutput}
          </text>
        </svg>
        <TextField
          id="outlined-multiline-static"
          label=""
          variant="outlined"
          disabled={true}
          multiline
          rows={rowOutput}
          value={rootStatus}
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
            Please enter valid values of a, b and c to evalute Value of Roots.
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
