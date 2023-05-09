import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MessageIcon from "@mui/icons-material/Message";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SendIcon from "@mui/icons-material/Send";
// Styled
const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export function ContactSection() {
  function handleFormSubmit(params) {}
  function handleFormChange(params) {}

  const [formCreate, setFormCreate] = useState({
    name: "",
    email: "",
    about: "",
    message: "",
  });
  return (
    <>
      {/* https://www.mindinventory.com/hire-reactjs-developers.php */}
      <Container style={{ maxWidth: 1400 }}>
        <Typography variant="section-header" component={"div"} sx={{ my: 3 }}>
          Get in touch
        </Typography>
        <StyledCard>
          <Container sx={{ py: 3 }}>
            <form onSubmit={handleFormSubmit}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={1}
              >
                {/* Name Email Contact number */}
                <Grid item xs={12} md={6}>
                  <TextField
                    label=""
                    placeholder="Email"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    id="input-email"
                    name="email"
                    value={formCreate.name}
                    onChange={handleFormChange}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AlternateEmailIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                  <TextField
                    label=""
                    placeholder="Name"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    id="input-name"
                    name="name"
                    value={formCreate.name}
                    onChange={handleFormChange}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AccountCircle />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                  <TextField
                    label=""
                    placeholder="Local"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    id="input-name"
                    name="name"
                    value={formCreate.name}
                    onChange={handleFormChange}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AccountCircle />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                </Grid>
                {/* Local Type your message */}
                <Grid item xs={12} md={6}>
                  <TextField
                    label=""
                    placeholder="About"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    id="input-about"
                    name="about"
                    value={formCreate.name}
                    onChange={handleFormChange}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <ContactSupportIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />

                  {/* <TextField
                    label=""
                    placeholder="Message"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    id="input-description"
                    name="description"
                    value={formCreate.description}
                    onChange={handleFormChange}
                    InputProps={{
                      inputComponent: TextareaAutosize,
                      rows: 3,
                      startAdornment: (
                        <InputAdornment position="start">
                          <MessageIcon />
                        </InputAdornment>
                      ),
                    }}
                  /> */}
                  <TextField
                    label=""
                    placeholder="Message"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    id="input-description"
                    name="description"
                    value={formCreate.description}
                    onChange={handleFormChange}
                    multiline
                    rows={3.6}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                size="large"
                disableElevation
                sx={{ mt: 2 }}
                endIcon={<SendIcon />}
              >
                SEND
              </Button>
            </form>
          </Container>
        </StyledCard>
      </Container>
    </>
  );
}
