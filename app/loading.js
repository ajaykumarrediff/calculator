import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/joy/CircularProgress";

export default function Loading() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl' disableGutters fixed>
        <CircularProgress
          color="success"
          determinate={false}
          size="lg"
          value={45}
          variant="solid"
        />
      </Container>
    </React.Fragment>
  );
}
