import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  CardMedia,
  Divider,
  Breadcrumbs,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ChipTheme } from "components/theme/ChipTheme";
import { BtnShare } from "components/BtnShare";
import { ViewLikeStatus } from "components/theme/ViewLikeStatus";

// styled
const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: `none`,
  color: `unset`,
  "&:focus, &:hover, &:visited, &:link,&:active": {
    textDecoration: `none`,
  },
}));
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  aspectRatio: `auto 820 / 574`,
  pointerEvents: `none`,
  borderRadius: "10px",
}));
export function HeaderBlog({ title = null, imgUrl = null, tags = [] }) {
  return (
    <>
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
            <StyledLink color="inherit" to="/blog">
              Blog
            </StyledLink>
            <Typography color="text.primary">{title}</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Grid
        sx={{ mt: 3 }}
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={1}
      >
        <Grid item xs={12} md={4}>
          {/* <Typography variant="blog-header" component="div">
            {title}
          </Typography> */}
          {/* Chip-Tag */}
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
          >
            {tags.map((item, index) => (
              <Grid item xs={"auto"}>
                <ChipTheme>{item}</ChipTheme>
              </Grid>
            ))}
          </Grid>

          {/* Btn-Share */}
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
          >
            <Grid item xs={"auto"}>
              <BtnShare type="facebook" />
            </Grid>
            <Grid item xs={"auto"}>
              <BtnShare type="twitter" />
            </Grid>
            <Grid item xs={"auto"}>
              <BtnShare type="linkedin" />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}
          >
            <Grid item xs={"auto"}>
              <ViewLikeStatus />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <StyledCardMedia
            component="img"
            image={imgUrl}
            alt="green iguana"
          ></StyledCardMedia>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
