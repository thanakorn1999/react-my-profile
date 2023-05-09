import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Button, Avatar, AvatarGroup } from "@mui/material";
import imgFB from "img/social_network/fb.png";
// import imgFB from "img/bg-main-1.jpg";
// import imgIG from "img/social_network/ig.png";
import imgLK from "img/social_network/lk.png";
import imgTW from "img/social_network/tw.png";
import { Card, CardMedia } from "@mui/material";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
//

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  aspectRatio: `auto 1 / 1`,
  borderRadius: "100%",
  width: "45px",
  // backgroundColor: "#242439",
  filter:
    "invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)",
  // padding: "-2px !important",
  // color
}));
const StyledCard = styled(Card)(({ theme }) => ({
  aspectRatio: `auto 1 / 1`,
  // backgroundColor: "white",
  backgroundImage: imgFB,
  borderRadius: "10px",
  width: "45px",
}));
const StyledBtnShare = styled(Card)(({ theme }) => ({
  aspectRatio: `auto 1 / 1`,
  // backgroundColor: "white",
  backgroundImage: imgFB,
  borderRadius: "10px",
  width: "45px",
}));

export function BtnShare({ type, link = "www.google.com" }) {
  const [objBtn, setObjBtn] = useState({
    imgUrl: null,
    link: null,
  });
  const [shareButton, setShareButton] = useState(null);
  const handleGetDetails = (type) => {
    let bufferObjBtn;

    switch (type) {
      case "facebook":
        bufferObjBtn = {
          imgUrl: imgFB,
          link: link,
        };
        setShareButton(FacebookShareButton);
        break;
      case "linkedin":
        bufferObjBtn = {
          imgUrl: imgLK,
          link: link,
        };
        setShareButton(LinkedinShareButton);
        break;
      case "twitter":
        bufferObjBtn = {
          imgUrl: imgTW,
          link: link,
        };
        setShareButton(TwitterShareButton);
        break;
      default:
      // do nothing
    }
    setObjBtn(bufferObjBtn);
  };

  useEffect(() => {
    handleGetDetails(type);
  }, []);

  return (
    <>
      {shareButton && (
        <IconButton
          url={objBtn.link}
          size="small"
          color="white"
          aria-label={`${type}-img-share`}
          component={shareButton}
        >
          <StyledCardMedia image={objBtn.imgUrl}></StyledCardMedia>
        </IconButton>
      )}
    </>
  );
}
