import { Link as RouterLink } from "react-router-dom";
import empyImg from "img/empy.PNG";
import { BlogCard } from "components/BlogCard";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "store/reducers/blogsSlice";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// MUI
import { Container, Grid, Typography, Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled
const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  maxWidth: 400,
  minWidth: 250,
  width: 300,
  borderRadius: "10px",
  position: "relative",
}));

const handleDragStart = (e) => e.preventDefault();

export function BlogsSection() {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  let isDragging = false;
  const handleOnDragStart = (e) => {
    e.preventDefault();
    isDragging = true;
  };

  const onClickCapture = (e) => {
    if (isDragging) {
      isDragging = false;
      e.preventDefault();
      return;
    }
  };
  // const status = useSelector((state) => state.blogs.status);
  // const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const items = blogs.map((blog) => (
    <span
      key={`BlogCard-${blog.title}`}
      className="item"
      role="presentation"
      data-value={blog.id}
      onDragStart={handleOnDragStart}
      onDrag={handleOnDragStart}
      draggable
      onClickCapture={onClickCapture}
    >
      <BlogCard data={blog} />
    </span>
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      {/* https://procoders.tech/blog/ */}
      <Container
        style={{ maxWidth: 1400, overflowX: `visible` }}
        sx={{ my: 3 }}
      >
        <Typography variant="section-header" component={"div"} sx={{ my: 3 }}>
          Blog
        </Typography>
        <AliceCarousel
          disableButtonsControls={true}
          autoWidth={true}
          mouseTracking
          items={items}
          responsive={responsive}
          draggable={true}
          controlsStrategy="alternate"
        />
      </Container>
    </>
  );
}
