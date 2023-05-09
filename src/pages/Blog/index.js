import React from "react";
import {
  Grid,
  Typography,
  CardMedia,
  Divider,
  Breadcrumbs,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

// Styled
const StyledContainerPage = styled(Container)(({ theme }) => ({
  maxWidth: `1100px !important`,
}));
const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: `none`,
  color: `unset`,
  "&:focus, &:hover, &:visited, &:link,&:active": {
    textDecoration: `none`,
  },
}));
export function Blog() {
  return (
    <>
      <StyledContainerPage sx={{ my: 3 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={1}
        >
          <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledLink color="inherit" to="/">
                Home Page
              </StyledLink>
              <Typography color="text.primary">Blog</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </StyledContainerPage>
    </>
  );
}
