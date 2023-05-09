import { useState } from "react";
//
import empyImg from "../img/empy.PNG";
import { useSelector } from "react-redux";

// MUI
import {
  Container,
  Button,
  Grid,
  Typography,
  Avatar,
  Box,
  Card,
  TextareaAutosize,
  TextField,
  CardMedia,
  Hidden,
  Chip,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import iconJs from "../img/icons8-javascript.png";
import iconPy from "../img/icons8-python.png";
import iconNuxt from "../img/icons8-nuxt-js.png";
import iconNode from "../img/icons8-nodejs.png";
import iconMysql from "../img/icons8-mysql-logo.png";
import iconTensor from "../img/icons8-tensorflow.png";
import iconReact from "../img/icons8-react.png";
import iconMui from "../img/icons8-material-ui.png";
import iconVuetify from "../img/icons8-vuetify.png";

// Styled
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: `1px`,
  [theme.breakpoints.down("lg")]: {
    width: `100%`,
  },
}));
const StyledImgHover = styled(CardMedia)(({ theme }) => ({
  width: 80,
  filter: theme.palette.mode === "dark" ? `grayscale(100%)` : `none`,
  transition: "transform 0.15s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.2, 1.2, 1)",
    filter: `none`,
  },
}));
const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const StyledButton = styled(ToggleButton)(({ theme }) => ({
  // width: `300px`,
  [theme.breakpoints.down("lg")]: {
    width: `100%`,
  },
  borderLeft: `unset`,
  borderRight: `unset`,
  borderTop: `unset`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  textTransform: "none",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.otherColor.grey.main,
  justifyContent: "flex-start",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
  },
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
  },
}));

export function SkillSection() {
  const theme = useTheme();
  const isMobile = useSelector((state) => state.mobile.isMobile);

  const [alignment, setAlignment] = useState(0);

  const handleChange = (event, newAlignment) => {
    newAlignment !== null && setAlignment(newAlignment);
  };

  const objData = [
    {
      title: "All",
      imgList: [
        iconJs,
        iconPy,
        iconReact,
        iconNuxt,
        iconMui,
        iconVuetify,
        iconNode,
        iconMysql,
        iconTensor,
      ],
    },
    {
      title: "Programming Languages",
      imgList: [iconJs, iconPy],
      details: `I am skilled in using both JavaScript and Python to create efficient and effective solutions for a variety of tasks. 
I use JavaScript to create user-friendly interfaces and have experience using a range of JavaScript frameworks and libraries. With my knowledge of JavaScript, I can create dynamic and interactive web interfaces as well as develop APIs.

In addition, I am proficient in using Python to develop custom scripts that boost productivity. Whether it's automating routine tasks or handling large amounts of data, I can create custom scripts that streamline workflow and save time. `,
    },
    {
      title: "JavaScript Frameworks/UI Libraries",
      imgList: [iconReact, iconNuxt, iconMui, iconVuetify],
      details: `Currently, I'm working with Nuxt.js and Vuetify to develop my projects.Nuxt.js is a powerful framework for building server-side rendered In addition, I have experience using React and MUI, and I am currently learning to use them more effectively. Vuetify's components can be less customizable compared to MUI's, which may limit design options for some developers. MUI allows developers to easily modify and style the components according to their specific needs`,
    },

    {
      title: "Server-Side Technologies & Database",
      imgList: [iconNode, iconMysql],
      details: `
      I have gained valuable experience over a year of using Node.js to create efficient and scalable APIs. During this time, I have become familiar with popular Node.js libraries such as bcrypt for secure data hashing and jwt for implementing authorization and authentication mechanisms. Additionally, I have designed and created MySQL databases and utilized express-myconnection to establish connections between Node.js and MySQL.ss`,
    },
    {
      title: "Data Science Frameworks/Libraries",
      imgList: [iconTensor],
      details: `I have experience in creating chatbots using the CNN algorithm in TensorFlow. I possess the skills to handle large amounts of data and fine-tune chatbots for increase accuracy.
        One of my key strengths is my ability to create scripts that fine-tune chatbots, allowing them to learn from user interactions and improve. 
        Another area of my expertise is creating and and clean them to remove irrelevant or sensitive information. This process helps me to create accurate and efficient chatbots that provide relevant responses to user inputs.
        removing irrelevant or sensitive information, and preprocess it by tokenizing the text, removing stop words, and converting it into a numerical format that can be used by the CNN algorithm.`,
    },
  ];
  const buttons = objData.map((item, index) => (
    <StyledButton value={index} key={`${item.title}-${index}`}>
      <Typography variant="content-header">{item.title}</Typography>
    </StyledButton>
  ));
  return (
    <>
      <Container style={{ maxWidth: 1400 }} sx={{ my: 3 }}>
        <Typography variant="section-header" component={"div"} sx={{ my: 3 }}>
          Skill
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Grid item xs={12} lg={"auto"}>
            <StyledToggleButtonGroup
              orientation="vertical"
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              {buttons}
            </StyledToggleButtonGroup>
          </Grid>
          <Grid item xs={12} lg>
            <Container style={{ maxWidth: `900px`, minHeight: `300px` }}>
              <Typography color="white" component={"div"} sx={{ my: 1 }}>
                {objData[alignment].title} :
              </Typography>
              {objData[alignment].details && (
                <Typography variant="content-bg">
                  {objData[alignment].details}
                </Typography>
              )}

              {objData[alignment].imgList && (
                <>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    spacing={4}
                  >
                    {objData[alignment].imgList.map((item, index) => (
                      <Grid item xs={"auto"} key={`icon-${item}-${index}`}>
                        <StyledImgHover
                          component="img"
                          image={item}
                          alt="img-iconJs"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
