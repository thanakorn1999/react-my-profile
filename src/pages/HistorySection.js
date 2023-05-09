import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
//  Styled
const StyledDateChip = styled(Chip)(({ theme }) => ({
  textTransform: "h1",
}));

const StyledtimelineContainer = styled("div")(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  position: `relative`,
  margin: `0 0 16px 0`,
  "&:after": {
    // backgroundColor: `#191923`,
    backgroundColor: `${theme.palette.divider}`,
    content: `""`,
    position: `absolute`,
    right: `0px`,
    width: `4px`,
    height: `100%`,
  },
}));
const StyledTimelineIitemContent = styled("div")(({ theme }) => ({
  boxShadow: `0 0 5px rgba(0, 0, 0, 0.1)`,
  backgroundColor: theme.palette.background.paper,

  minHeight: `120px`,
  padding: `15px`,
  position: `relative`,
  maxWidth: `calc(100% - 33px)`,
  margin: `16px 16px 0 0`,
  "&:after": {
    content: `" "`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: `1px -1px 1px rgba(0, 0, 0, 0.1)`,
    position: `absolute`,
    right: `-7.5px`,
    top: `calc(50% - 7.5px)`,
    transform: `rotate(45deg)`,
    width: `15px`,
    height: `15px`,
  },
  "& circle": {
    // backgroundColor: `#191923`,
    backgroundColor: `${theme.palette.divider}`,
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: `50%`,
    position: `absolute`,
    top: `calc(50% - 10px)`,
    right: `-40px`,
    width: `20px`,
    height: `20px`,
    zIndex: `100`,
  },
}));

export function HistorySection() {
  // Data
  const timelineDataEducation = [
    {
      title: "King Mongkut's Institute of Technology Ladkrabang",
      description: "Bachelor of Computer Science",
      // keyRespons: [],
      date: "Completed in 2022",
      category: {
        tag: "medium",
        color: "#018f69",
      },
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
  ];
  const timelineDataWorkHistory = [
    {
      title: "Krungsri consumer | AI Developer (Intern)",
      // description:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
      keyRespons: [
        "Creating chatbots using the CNN algorithm in TensorFlow.",
        "Handling large amounts of data and creating effective training datasets.",
        "Cleaning and preprocessing chat logs to prepare data for training.",
        "Writing scripts to fine-tune chatbots and improve their accuracy.",
      ],
      date: "Jan/2020 – July/2020",
      category: {
        tag: "medium",
        color: "#018f69",
      },
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      title: "Brainwave | Front-End Developer And Full Stack Developer",
      // description:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
      keyRespons: [
        "Developed responsive and user-friendly using Nuxt.js and Vuetify.",
        "Design and manage relational databases using MySQL, ensuring data integrity, security, and efficient query performance",
        "Develop and maintain server-side APIs using Node.js",
      ],
      date: "2022 – Present",
      category: {
        tag: "medium",
        color: "#018f69",
      },
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
  ];

  // Components
  const TimelineItem = ({ data }) => (
    // className="timeline-item-content"
    <StyledTimelineIitemContent sx>
      <Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item>
            <Chip
              size="small"
              label={
                <Typography variant="caption-date" color="grey">
                  {data.date}
                </Typography>
              }
            ></Chip>
          </Grid>
        </Grid>

        <Typography variant="content-header" component="div">
          {data.title}
        </Typography>
        <Typography
          variant="caption-date"
          component="div"
          color="grey"
          sx={{ my: 1 }}
        >
          {data.description}
        </Typography>
        {data.keyRespons && (
          <>
            <Typography
              variant="caption-date"
              component="div"
              color="grey"
              sx={{ mb: 1 }}
            >
              Key responsibilities:
            </Typography>
          </>
        )}
        {data.keyRespons &&
          data.keyRespons.map((keyRes, idx) => (
            <Typography variant="content" component="li" key={`keyRes-${idx}`}>
              {keyRes}
            </Typography>
          ))}
        <circle />
      </Container>
    </StyledTimelineIitemContent>
    // </div>
  );

  return (
    <>
      <Container style={{ maxWidth: 1400 }} sx={{ my: 3 }}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={6}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="section-header">Education</Typography>
            {timelineDataEducation.length > 0 && (
              <StyledtimelineContainer>
                {timelineDataEducation.map((data, idx) => (
                  <TimelineItem data={data} key={idx} />
                ))}
              </StyledtimelineContainer>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="section-header">Work History</Typography>
            {timelineDataWorkHistory.length > 0 && (
              <StyledtimelineContainer>
                {timelineDataWorkHistory.map((data, idx) => (
                  <TimelineItem data={data} key={idx} />
                ))}
              </StyledtimelineContainer>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
