"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
const drawerWidth = 240;

export default function factor(props) {
  const [factorInput, setFactorInput] = React.useState();
  const [factorOutput, setFactorOutput] = React.useState("");
  const [rowOutput, setRowOutput] = React.useState(4);
  const getFactor = () => {
    const primes = getPrimes(Math.floor(factorInput / 2));
    let ouputCreate = "";
    const factors = findPrimeFactors(factorInput, primes);
    for (let i = 0; i < factors[0].length; i++) {
      if (factors[1].length == 0) {
        ouputCreate =
          ouputCreate + " " + factors[0][i] + " | " + factors[0][i] + "\n";
        setRowOutput(2);
      } else {
        ouputCreate =
          ouputCreate + " " + factors[0][i] + " | " + factors[1][i] + "\n";
        setRowOutput(factors[0].length + 1);
      }
    }
    ouputCreate += "    | 1";
    setFactorOutput(ouputCreate);
  };

  function findPrimes(n) {
    if (n <= 1) {
      return [];
    }
    if (n <= 3) {
      return [2, 3];
    }
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }

    return primes;
  }

  function getPrimes(max) {
    const sieve = [];
    const primes = [];

    for (let i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        primes.push(i);
        for (let j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  function findPrimeFactors(number, primes) {
    if (number <= 1 || !primes || !primes.length) {
      return [];
    }
    const primeFactors = [];
    const divideResult = [];
    for (const prime of primes) {
      while (number % prime === 0) {
        primeFactors.push(prime);
        divideResult.push(number);
        number /= prime;
      }
    }
    if (number > 1) {
      primeFactors.push(number);
    }
    return [primeFactors, divideResult];
  }
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
        <TextField
          id="outlined-number"
          label="Enter Number"
          type="number"
          inputProps={{ maxLength: 8 }}
          display="block"
          onChange={(e) => setFactorInput(e.target.value)}
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
        <TextField
          id="outlined-multiline-static"
          label="Factors"
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
    </Box>
  );
}
