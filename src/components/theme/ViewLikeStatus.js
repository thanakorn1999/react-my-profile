// import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { ChipTheme } from "components/theme/ChipTheme";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
//
export function ViewLikeStatus({ like = 0, view = 0 }) {
  return (
    <ChipTheme>
      <Grid alignItems="center" container sx={{ mb: -1, p: 0.5 }} spacing={1}>
        <Grid item xs="auto">
          <RemoveRedEyeOutlinedIcon />
        </Grid>
        <Grid item xs="auto" sx={{ mt: -1 }}>
          <Typography variant="content">{like}</Typography>
        </Grid>
        <Grid item xs="auto">
          <FavoriteIcon sx={{ color: `red` }} />
        </Grid>
        <Grid item xs="auto" sx={{ mt: -1 }}>
          <Typography variant="content">{view}</Typography>
        </Grid>
      </Grid>
    </ChipTheme>
  );
}

{
  /* <Typography variant="content" sx={{ px: 1 }}>
                eLearning
              </Typography> */
}
