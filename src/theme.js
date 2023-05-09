import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const getDesignTokens = (mode) => ({
  typography: {
    lineHeight: `normal`,
    fontFamily: `"Prompt", sans-serif`,
    fontSize: 16, // default font size
    fontWeightRegular: 400, // default font weight
    h1: {
      fontSize: 58,
      fontWeight: 800,
    },

    "section-header": {
      fontSize: 17,
      fontWeight: 600,
      color: "white",
    },
    "content-header": {
      fontSize: 14,
      fontWeight: 600,
    },
    content: {
      fontSize: 14,
      fontWeight: 400,
    },
    "content-bg": {
      fontSize: 14,
      fontWeight: 400,
      color: "white",
    },
    "caption-date": {
      fontSize: 10,
      fontWeight: 400,
    },
    "caption-date": {
      fontSize: 10,
      fontWeight: 400,
    },
    // Blog
    "blog-header": {
      fontSize: 32,
      fontWeight: 600,
    },
    "blog-section": {
      fontSize: 24,
      fontWeight: 600,
    },
    "blog-details": {
      fontSize: 17,
      fontWeight: 500,
      color: "#A6BFCB",
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#FFA000",

            contrastText: "white",
          },
          secondary: {
            main: "#FF914D",
            light: "skyblue",
            contrastText: "white",
          },
          divider: "#E0E0E0",
          otherColor: {
            grey: {
              main: "#A2A2AB",
              lignthen: "#D9D9D9",
            },
          },
        }
      : {
          primary: {
            main: "#FFA000",
            contrastText: "white",
          },
          secondary: {
            main: "#FF914D",
            contrastText: "white",
          },
          divider: "#34343C",

          background: {
            default: "#20202A",
            // 24242E
            paper: "#24242E",
            //
          },
          otherColor: {
            grey: {
              main: "#A2A2AB",
              lignthen: "#D9D9D9",
            },
          },
          // text: {
          // primary: "#fff",
          // secondary: "#71717a",
          // },
        }),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        // body: {
        //   transition: "all 1s linear !important",
        // },
      },
    },
  },
});
export function ThemeProviderCostom({ children }) {
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
