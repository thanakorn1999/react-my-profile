import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

// export
const StyledChip = styled(Card)(({ theme }) => ({
  backgroundColor: `rgba(255,255,255,0.3)`,
  boxShadow: "none",
  transition: `0.3s ease`,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export function ChipTheme({ children }) {
  return (
    <>
      <StyledChip>
        <Typography variant="content">{children}</Typography>
      </StyledChip>
    </>
  );
}

{
  /* <Typography variant="content" sx={{ px: 1 }}>
                eLearning
              </Typography> */
}
