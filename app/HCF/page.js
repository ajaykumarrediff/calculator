"use client";
import { Box } from "@mui/material";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function HCF() {
  const [age, setAge] = React.useState(0);
  const [calButtonShow, setCalButtonShow] = React.useState(false);

  const [textFieldValues, setTextFieldValues] = React.useState(
    Array(age).fill("")
  );
  const [hcfValue, setHCFValue] = React.useState("");

  const handleChange = (index, event) => {
    setTextFieldValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = event.target.value;
      return newValues;
    });
    showCalButton();
  };

  const showCalButton = () => {
    switch (age) {
      case 2:
        if (textFieldValues[0] !== "" && textFieldValues[1] !== "") {
          console.log("invoked");
          setCalButtonShow(true);
        } else {
          setCalButtonShow(false);
        }
        break;
      case 3:
        if (
          textFieldValues[0] !== "" &&
          textFieldValues[1] !== "" &&
          textFieldValues[2] !== ""
        ) {
          setCalButtonShow(true);
        } else {
          setCalButtonShow(false);
        }
        break;
      case 4:
        if (
          textFieldValues[0] !== "" &&
          textFieldValues[1] !== "" &&
          textFieldValues[2] !== "" &&
          textFieldValues[3] !== ""
        ) {
          setCalButtonShow(true);
        } else {
          setCalButtonShow(false);
        }
        break;
      case 5:
        if (
          textFieldValues[0] !== "" &&
          textFieldValues[1] !== "" &&
          textFieldValues[2] !== "" &&
          textFieldValues[3] !== "" &&
          textFieldValues[4] !== ""
        ) {
          setCalButtonShow(true);
        } else {
          setCalButtonShow(false);
        }
        break;
    }
  };

  const handleChanges = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  const calculateHCF = () => {
    if (age == 2) {
      if (textFieldValues[0] !== "" && textFieldValues[1] !== "") {
        let a = textFieldValues[0];
        let b = textFieldValues[1];
        while (b !== 0) {
          const remainder = a % b;
          a = b;
          b = remainder;
        }
        setHCFValue(a);
      } else {
        setOpen(true);
      }
    } else if (age == 3) {
      if (
        textFieldValues[0] !== "" &&
        textFieldValues[1] !== "" &&
        textFieldValues[2] !== ""
      ) {
        let a = textFieldValues[0];
        let b = textFieldValues[1];
        let c = textFieldValues[2];
        while (c !== 0) {
          const reminder = b % c;
          b = c;
          c = reminder;
        }
        while (b !== 0) {
          const remainder = a % b;
          a = b;
          b = remainder;
        }
        setHCFValue(a);
      } else {
        setOpen(true);
      }
    } else if (age == 4) {
      if (
        textFieldValues[0] !== "" &&
        textFieldValues[1] !== "" &&
        textFieldValues[2] !== "" &&
        textFieldValues[3] !== ""
      ) {
        let a = textFieldValues[0];
        let b = textFieldValues[1];
        let c = textFieldValues[2];
        let d = textFieldValues[3];
        while (d !== 0) {
          const reminder = c % d;
          c = d;
          d = reminder;
        }
        while (c !== 0) {
          const reminder = b % c;
          b = c;
          c = reminder;
        }
        while (b !== 0) {
          const remainder = a % b;
          a = b;
          b = remainder;
        }
        setHCFValue(a);
      } else {
        setOpen(true);
      }
    } else if (age == 5) {
      if (
        textFieldValues[0] !== "" &&
        textFieldValues[1] !== "" &&
        textFieldValues[2] !== "" &&
        textFieldValues[3] !== "" &&
        textFieldValues[4] !== ""
      ) {
        let a = textFieldValues[0];
        let b = textFieldValues[1];
        let c = textFieldValues[2];
        let d = textFieldValues[3];
        let e = textFieldValues[4];
        while (e !== 0) {
          const reminder = d % e;
          d = e;
          e = reminder;
        }
        while (d !== 0) {
          const reminder = c % d;
          c = d;
          d = reminder;
        }
        while (c !== 0) {
          const reminder = b % c;
          b = c;
          c = reminder;
        }
        while (b !== 0) {
          const remainder = a % b;
          a = b;
          b = remainder;
        }
        setHCFValue(a);
      } else {
        setOpen(true);
      }
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        m: 2,
        mt: 10,
        width: { sm: `calc(100% - 240px)` },
        borderRadius: 3,
        justifyContent: "center",
      }}
      bgcolor={"white"}
    >
      <Box
        id="HCF"
        sx={{
          width: { md: "96%", sm: "90%", xs: "85%" },
          m: 2,
        }}
      >
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="Number-of-textfields">Enter number</InputLabel>
          <Select
            labelId="Number-of-textfields"
            id="nTextfields"
            value={age}
            label="Enter number"
            onChange={handleChanges}
          >
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
          <FormHelperText>
            Enter number of Numbers (Between 2 and 5) to find HCF
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          {Array.from({ length: age }, (_, index) => (
            <TextField
              key={index}
              type="number"
              id={`number${index}`}
              label={
                index === 0
                  ? "Enter First Number"
                  : index === 1
                  ? "Enter Second Number"
                  : index === 2
                  ? "Enter Third Number"
                  : index === 3
                  ? "Enter Fourth Number"
                  : "Enter Fifth Number"
              }
              variant="standard"
              sx={{ mb: 1 }}
              value={textFieldValues[index]}
              defaultValue={""}
              onChange={(e) => handleChange(index, e)}
            />
          ))}
          {age > 0 && textFieldValues.length === age ? (
            <>
              <Button
                sx={{ display: "block", my: 3, width: "100%", height: "50px" }}
                variant="contained"
                onClick={() => calculateHCF()}
                disabled={!calButtonShow}
              >
                Calculate
              </Button>
              <svg
                width="80%"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
                fill="#101590"
              >
                <text x="50" y="70" font-size="70">
                  {hcfValue}
                </text>
              </svg>
            </>
          ) : (
            ""
          )}
        </FormControl>
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
            Please enter valid numbers to evalute HCF.
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
