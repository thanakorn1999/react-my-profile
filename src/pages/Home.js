import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// MUI
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { SwiftDarkMode } from "../components/SwiftDarkMode";
import { useSelector } from "react-redux";
import Typed from "typed.js";
import { styled, useTheme } from "@mui/material/styles";
const StyledImgHover = styled(CardMedia)(({ theme }) => ({
  width: 40,
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.2, 1.2, 1)" },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

// Components
const AchievementCard = (props) => (
  <>
    <Grid
      container
      direction="row"
      alignItems="center"
      // justifyContent="space-around"
      spacing={2}
    >
      <Grid item xs="auto">
        <Typography fontSize={22} fontWeight={600} color={`primary`}>
          {props.data.value}
        </Typography>
      </Grid>
      <Grid item xs="auto">
        <Typography fontSize={14} color={`white`}>
          {props.data.title}
        </Typography>
      </Grid>
    </Grid>
  </>
);
export function Home() {
  const theme = useTheme();
  const isMobile = useSelector((state) => state.mobile.isMobile);
  const objAchievement = [
    // {
    //   title: "Years Experience",
    //   value: "1+",
    // },
  ];
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      // strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      strings: ["asd", "aaa"],
      // I
      typeSpeed: 100,
      loop: true,
      backDelay: 4000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Container style={{ maxWidth: 1400 }}>
        <Grid
          sx={{ mt: 3 }}
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item xs={"auto"}>
            <SwiftDarkMode />
          </Grid>
        </Grid>
        <StyledCard>
          <Container>
            <Grid
              container
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-start"
            >
              <Grid item xs={12} md>
                <Box sx={{ my: 4.5 }}>
                  <Typography
                    component="div"
                    variant="h1"
                    sx={{
                      textAlign: {
                        [theme.breakpoints.down("md")]: {
                          textAlign: "center",
                        },
                      },
                    }}
                  >
                    {/* Discover my Amazing */}
                    Welcome to my website!
                  </Typography>
                  {/* <Typography
                    component="div"
                    variant="h1"
                    sx={{
                      textAlign: {
                        [theme.breakpoints.down("md")]: {
                          textAlign: "center",
                        },
                      },
                    }}
                  >
                    Art Space!
                  </Typography> */}
                  <Typography
                    component="div"
                    sx={{
                      my: 2,
                      textAlign: {
                        [theme.breakpoints.down("md")]: {
                          textAlign: "center",
                        },
                      },
                    }}
                  >
                    i'm <span ref={el} />
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      my: 2,
                      textAlign: {
                        [theme.breakpoints.down("md")]: {
                          textAlign: "center",
                        },
                      },
                    }}
                  >
                    Hi, I'm Jame, a web developer experienced in Nuxt.js,
                    Vuetify, Node.js, and MySQL. I specialize in creating
                    user-friendly interfaces and have worked on several
                    full-stack projects.I also have experience in chatbot
                    development using CNN algorithm and creating Python scripts
                    to boost productivity. Currently, I am learning React with
                    MUI to further expand my skills.
                    {/* Hi, I'm Jame, a web developer experienced in Nuxt.js,
                    Vuetify, Node.js, and MySQL. I specialize in user-friendly
                    interfaces and have worked on several full-stack projects.
                    Currently, I'm learning React with MUI to expand my
                    skillset. */}
                    {/* Looking forward to contributing my knowledge to
                    new projects and collaborating with a team to deliver
                    quality web solutions. */}
                    {/* Hello, I'm Jame, a web developer
                    developer with experience in using Nuxt.js and Vuetify. I
                    specialize in creating user-friendly interfaces, I also have
                    experience in developing APIs with Node.js and designing and
                    managing MySQL databases. I have worked on several
                    full-stack projects in the past and am currently learning
                    React with MUI to expand my skillset. Recently,
                    I'm excited to leverage my experience and knowledge to
                    contribute to new projects and collaborate with a team to
                    deliver quality web solutions. */}
                  </Typography>
                  <Button variant="contained">Hire Me</Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={"auto"}
                // , lg: "blue"
                sx={{ display: { xs: "none", md: "none", lg: "block" } }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 321 }}
                  image="https://robohash.org/stefan-two"
                  alt="Live from space album cover"
                />
              </Grid>
            </Grid>
          </Container>
        </StyledCard>
        {objAchievement && (
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-star"
            spacing={1}
            sx={{ my: 3 }}
          >
            {objAchievement.map((item, index) => (
              <>
                <Grid item xs={6} sm={6} md={3} key={`${item}-${index}`}>
                  <AchievementCard data={item} />
                </Grid>
              </>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
