import React from "react";
import {
  Container,
  Grid,
  Typography,
  CardMedia,
  Divider,
  Hidden,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
//
import empyImg from "img/empy.PNG";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//
import { HeaderBlog } from "./component/HeaderBlog";

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: `14px`,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  aspectRatio: `auto 820 / 574`,
  pointerEvents: `none`,
  borderRadius: "10px",
}));
//  Styled
const StyledContainerPage = styled(Container)(({ theme }) => ({
  maxWidth: `1100px !important`,
}));

function createData(command, message) {
  return {
    command,
    message,
  };
}
const rows = [
  createData("@@", "my.email@example.com"),
  createData("@@!", "my.other.email@example.com"),
  createData("!!", "Hello World!"),
];
const blogs = [
  {
    title: "Boost Your Productivity with Keyboard Automation using Python",
    img_url: empyImg,
    tags: ["python", "tools"],
    details: "",
    likes: 0,
    views: 0,
    Link: "boost-your-productivity-with-keyboard-automation-using-python",
  },
  {
    title: "Something",
    img_url: empyImg,
    tag: ["python", "tools"],
    details: "",
    like: 0,
    view: 0,
    Link: "something",
  },
];
const blog = {
  title: "Boost Your Productivity with Keyboard Automation using Python",
  img_url: empyImg,
  tags: ["python", "tools"],
  details: "",
  likes: 0,
  views: 0,
};
export function AutomationPython() {
  return (
    <>
      <StyledContainerPage sx={{ my: 3 }}>
        <HeaderBlog title={blog.title} imgUrl={blog.img_url} tags={blog.tags} />
        <StyledTypography variant="blog-details" component="div">
          In today's world, where time is of the essence, we are always looking
          for ways to do things faster and more efficiently. This is especially
          true for software developers, who spend a lot of their time writing
          and debugging code. One way to speed up this process is to use code
          snippets, which are pre-written pieces of code that can be quickly
          inserted into a project.
        </StyledTypography>

        <StyledTypography variant="blog-details" component="div">
          The code we are going to discuss today is a Python script that helps
          with the creation of code snippets. This script allows developers to
          quickly insert predefined pieces of text into their code by typing a
          short code instead of the full text. The script uses a global keyboard
          listener to detect when the user types a certain code, and then
          replaces that code with the corresponding text.
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          Let's take a closer look at the code.
        </StyledTypography>
        {/*  */}
        <StyledTypography variant="blog-section" component="div">
          Dependencies
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          The script uses several Python libraries: pyperclip, keyboard, pandas,
          and re. These libraries need to be installed before running the
          script. The script also uses the win32api library on Windows to switch
          the keyboard layout to English.
        </StyledTypography>
        {/*  */}
        <StyledTypography variant="blog-section" component="div">
          Loading Data
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          The script loads data from an Excel file (memo.xlsx) that contains two
          columns: command and message. The command column contains the short
          code that the user will type to insert the corresponding message into
          their code. The script reads this data into two lists: command_list
          and message_json.
        </StyledTypography>
        {/*  */}
        <StyledTypography variant="blog-section" component="div">
          Changing Commands
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          The script loads data from an Excel file (memo.xlsx) that contains two
          columns: command and message. The command column contains the short
          code that the user will type to insert the corresponding message into
          their code. The script reads this data into two lists: command_list
          and message_json.
        </StyledTypography>
        {/*  */}
        <StyledTypography variant="blog-section" component="div">
          Changing Commands
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          On macOS, some special characters are not recognized as separate keys
          by the keyboard listener. To work around this, the script replaces
          some of these characters with numbers. The chang_command_mac function
          replaces the characters !, @, #, %, and _ with 1, 2, 3, 5, and -,
          respectively.
        </StyledTypography>
        {/*  */}
        <StyledTypography variant="blog-section" component="div">
          Keyboard Listener
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          The released function is called whenever a key is released. If the key
          is a letter or number, it is added to the history string. If the key
          is the right shift key, the check_map_command function is called to
          check if the current history matches any of the codes in command_list.
          If a match is found, the corresponding message is inserted into the
          code using the write function. If no match is found, the back_space
          function is called to delete the last character from the history
          string.
        </StyledTypography>
        {/*  */}
        <StyledTypography variant="blog-section" component="div">
          Main Function
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          The main function sets up the keyboard listener and waits for input
          from the user. When a key is released, the released function is
          called.
        </StyledTypography>
        <StyledTypography variant="blog-section" component="div">
          Conclusion
        </StyledTypography>
        <StyledTypography variant="blog-details" component="div">
          In conclusion, this Python script provides a useful tool for
          developers who frequently use code snippets. By typing a short code
          instead of the full text, developers can save time and increase their
          productivity. The script uses a global keyboard listener to detect
          when the user types a certain code, and then replaces that code with
          the corresponding text. The script is flexible and can be easily
          modified to suit the needs of different users.
        </StyledTypography>
        <StyledTypography variant="blog-section" component="div">
          memo.xlsx file:
        </StyledTypography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Dessert (100g serving)</TableCell> */}
                <TableCell align="left">command</TableCell>
                <TableCell align="left">message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.command}</TableCell>
                  {/* component="th" scope="row" */}
                  <TableCell align="left">{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledContainerPage>
    </>
  );
}
