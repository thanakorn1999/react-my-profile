// import {} from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/reducers/themeSlice";

export function SwiftDarkMode() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => dispatch(toggleTheme())}
      color="inherit"
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
