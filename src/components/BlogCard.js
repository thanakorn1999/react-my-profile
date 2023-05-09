import { styled } from "@mui/material/styles";
import { ChipTheme } from "components/theme/ChipTheme";
import { Link as RouterLink } from "react-router-dom";
// MUI
import empyImg from "img/empy.PNG";
import { ViewLikeStatus } from "components/theme/ViewLikeStatus";
import { Grid, Typography, Box, Card, CardMedia } from "@mui/material";
const StyledContainerCard = styled(Box)(({ theme }) => ({
  "&:hover .title": {
    color: theme.palette.primary.main,
    transition: `color 0.3s ease`,
  },
  "&:hover .chip-time": {
    opacity: 1,
  },
}));
const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: `none`,
  // pointerEvents: `none`,
  color: `unset`,
  "&:focus, &:hover, &:visited, &:link,&:active": {
    textDecoration: `none`,
  },
}));
const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  maxWidth: 400,
  minWidth: 250,
  width: 300,
  borderRadius: "10px",
  position: "relative",
}));
const StyledChipTime = styled(Card)(({ theme }) => ({
  opacity: 0,
  backgroundColor: `rgba(0,0,0,0.6)`,
  boxShadow: "none",
  "& .text": {
    color: `white`,
  },
}));
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  aspectRatio: `auto 820 / 574`,
  // pointerEvents: `none`,
  borderRadius: "10px",
}));
export const BlogCard = ({ data }) => {
  console.log(`data`, data);
  return (
    <>
      <StyledContainerCard
        component={StyledLink}
        to={`/blog/${data.link}`}
        sx={{ width: 330, pr: 3, mr: 0 }}
      >
        <StyledCard>
          <Box sx={{ position: "absolute", width: `100%`, height: `100%` }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={1}
              sx={{ width: `100%`, height: `100%` }}
            >
              <Grid item xs="auto">
                <StyledChipTime className="chip-time">
                  <Typography className="text" variant="content" sx={{ px: 1 }}>
                    12 min.
                  </Typography>
                </StyledChipTime>
              </Grid>
            </Grid>
          </Box>
          <StyledCardMedia
            component="img"
            image={data.img_url}
            height={190}
            alt="green iguana"
          ></StyledCardMedia>
        </StyledCard>

        <Grid container direction="row" spacing={1} sx={{ mt: 1, mb: 0.5 }}>
          {data.tags &&
            data.tags.slice(0, 2).map((item, index) => (
              <Grid item xs={"auto"}>
                <ChipTheme sx={{ px: 0.5 }}>
                  <Typography variant="content" sx={{ px: 1 }}>
                    {item}
                  </Typography>
                </ChipTheme>
              </Grid>
            ))}
          {data.tags.length > 2 && (
            <Grid item xs>
              <Typography variant="content" sx={{ px: 0.5 }}>
                {data.tags.length - 2}+
              </Typography>
            </Grid>
          )}
        </Grid>
        <Typography sx={{ my: 1 }} className="title" color="white">
          {data?.title ?? "error"}
        </Typography>
        <Grid sx={{ my: 0.5 }} container direction="row">
          <Grid item xs="auto">
            <ViewLikeStatus like={data?.likes ?? 0} view={data?.views ?? 0} />
          </Grid>
        </Grid>
      </StyledContainerCard>
    </>
  );
};
