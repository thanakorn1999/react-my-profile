// REACT
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mobileSlice } from "store/reducers/mobileSlice";
// MUI
import { styled, useTheme } from "@mui/material/styles";
import {
  Grid,
  Container,
  Stack,
  Box,
  Drawer,
  Typography,
  Divider,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
// import ICON
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import BrushIcon from "@mui/icons-material/Brush";
import MenuIcon from "@mui/icons-material/Menu";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import CodeIcon from "@mui/icons-material/Code";
import imgBg from "img/bg-main-2.jpg";
import imgMe from "img/me.PNG";
//
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
//  Styled
const StyledContainerPage = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  position: `relative`,
  width: `100%`,
  maxWidth: `100%`,
  overflowX: `hidden`,
}));

const StyledBgImg = styled(Box)(({ theme }) => ({
  width: `100%`,
  // minHeight: `100vh`,
  height: "100vh",
  position: `absolute`,
  zIndex: -1,
  filter: theme.palette.mode === "light" ? `brightness(3) invert(0.2)` : `none`,
  background: `${
    theme.palette.mode === "light"
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`
      : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`
  }, url(${imgBg}) no-repeat`, //no-repeat center center
  backgroundSize: `cover`,
  animation: `kenburns-bottom-right 25s ease-out infinite alternate-reverse both`,
  " @keyframes kenburns-bottom-right": {
    "0%": {
      transform: `scale(1) translate(0, 0)`,
      transformOrigin: `84% 84%`,
    },
    "100%": {
      transform: ` scale(1.25) translate(20px, 15px)`,
      transformOrigin: `right bottom`,
    },
  },
}));

const Styledscreen = styled("div")(({ theme }) => ({
  height: "100vh",
  width: `100%`,
  overflowY: `scroll`,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// JSX
const TempDetails = (props) => {
  const { data } = props;
  return (
    <>
      <Box sx={{ my: 1 }}>
        <Typography variant="content" color="grey" component={"div"}>
          {data.title}
        </Typography>
        <Typography variant="content" component={"div"}>
          {data.value}
        </Typography>
      </Box>
    </>
  );
};

export function DrawerMain() {
  // setup data
  const dispatch = useDispatch();
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = width <= 900;
  const objContact = [
    {
      title: "LinkedInIcon",
      icon: <LinkedInIcon fontSize="inherit" />,
      link: "",
      color: "primary",
    },
    {
      title: "GitHubIcon",
      icon: <GitHubIcon fontSize="inherit" />,
      link: "",
      color: "primary",
    },
    {
      title: "FacebookSharpIcon",
      icon: <FacebookSharpIcon fontSize="inherit" />,
      link: "",
      color: "primary",
    },

    {
      title: "TwitterIcon",
      icon: <TwitterIcon fontSize="inherit" />,
      link: "",
      color: "primary",
    },
  ];
  const objMyProfile = {
    name: "Thanakorn Chantara",
    position: "Front-end Deweloper",
    myDetails: [
      {
        title: "email",
        value: "thanakornn.ch@gmail.com",
      },
      {
        title: "Time",
        value: "GMT + 7",
      },
      {
        title: "Phone",
        value: "(+66 ) 9 5296 7951",
      },
    ],

    hobbies: [
      {
        title: "Game",
        icon: <SportsEsportsIcon key="SportsEsportsIcon-hobbies" />,
      },
      {
        title: "Drawing",
        icon: <BrushIcon key="Drawing-hobbies" />,
      },
      {
        title: "Cartoon",
        icon: <TheaterComedyIcon key="Cartoon-hobbies" />,
      },
      {
        title: "Run",
        icon: <DirectionsRunIcon key="Run-hobbies" />,
      },

      {
        title: "Coding",
        icon: <CodeIcon key="Coding-hobbies" />,
      },
    ],
  };
  const drawerWidth = 290;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  useEffect(() => {
    dispatch(mobileSlice.actions.setIsMobile(isMobile));
    return () => {
      dispatch(mobileSlice.actions.setIsMobile(isMobile));
    };
  }, [isMobile]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <StyledContainerPage>
        {/* permanent wider screens.  */}
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          onClose={() => {
            isMobile && handleDrawerToggle();
          }}
          ModalProps={{
            [theme.breakpoints.down("md")]: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open={isMobile ? mobileOpen : true}
        >
          <Grid container direction="column" sx={{ height: `100vh` }}>
            <Grid item xs="auto">
              <Container sx={{ my: 3 }}>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Thanakorn Chantara"
                      src={imgMe}
                      sx={{
                        width: 81,
                        height: 81,
                        backgroundColor: "rgba(1, 1, 1, 0.2)",
                      }}
                    />
                  </StyledBadge>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  sx={{ my: 0.5 }}
                >
                  <Typography fontSize={14} fontWeight={600}>
                    Thanakorn Chantara
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Typography fontSize={11} color={"grey"}>
                    Full Stack Developer
                  </Typography>
                </Stack>
              </Container>
            </Grid>
            <Grid
              item
              xs
              sx={{
                overflowY: "scroll",
                py: 1.5,
                height: `100%`,
                backgroundColor: "background.default",
                boxShadow: `inset 0px 11px 8px -10px rgba(1, 1, 1, 0.1),inset 0px -11px 8px -10px rgba(1, 1, 1, 0.1)`,
              }}
            >
              <Box>
                <Container>
                  {objMyProfile.myDetails &&
                    objMyProfile.myDetails.map((item, index) => (
                      <TempDetails key={`${item.title}-${index}`} data={item} />
                    ))}

                  <Divider sx={{ my: 2 }} />
                  {objMyProfile.hobbies &&
                    objMyProfile.hobbies.map((item, index) => item.icon)}
                  <Divider sx={{ my: 2 }} />
                  <DateCalendar sx={{ zoom: 0.85, mx: -3 }} />
                  <Divider sx={{ my: 2 }} />
                </Container>
              </Box>
            </Grid>
            <Grid item xs="auto">
              <Container sx={{ py: 1 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  {objContact.map((item, index) => (
                    <Grid
                      item
                      xs={`auto`}
                      key={`btn-ct-${item.title}-${index}`}
                    >
                      <IconButton
                        aria-label="delete"
                        size="small"
                        color={item.color}
                        key={`btn-${index}`}
                      >
                        {item.icon}
                      </IconButton>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Drawer>
        {/* <Drawer
          sx={{
            // ...(open && { width: drawerWidth }),
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          anchor="left"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={handleDrawerToggle}
          open={open}
        > */}

        {/* variant="persistent" */}

        {/*
        </Drawer> */}

        <StyledBgImg />
        <Styledscreen>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => {
              handleDrawer(!open);
            }}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Outlet />
        </Styledscreen>
      </StyledContainerPage>
    </>
  );
}
