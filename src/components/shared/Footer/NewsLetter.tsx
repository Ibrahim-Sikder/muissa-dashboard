"use client";

import React from "react";
import { Box, Button, Grid, Typography, Link, TextField } from "@mui/material";
import Container from "@/components/ui/HomePage/Container/Container";
import MUIInput from "@/components/Forms/Input";
import MUIForm from "@/components/Forms/Form";

const NewsLetter = () => {
  return (
    <Box sx={{ bgcolor: "grey.100", py: 6, mt: 4 }}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mb: { xs: 3, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Want news and updates?
            </Typography>
            <Typography variant="h5" component="p" sx={{ mb: 2 }}>
              Sign up for our newsletter.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <MUIForm
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed");
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MUIInput
                  placeholder="Enter your email"
                  fullWidth
                  name="email"
                  size="small"
                  sx={{ borderRadius: 1, mr: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Subscribe
                </Button>
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 2, textAlign: { xs: "center", md: "left" } }}
              >
                We care about your data. Read our{" "}
                <Link href="#" color="primary" underline="hover">
                  privacy&nbsp;policy
                </Link>
                .
              </Typography>
            </MUIForm>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsLetter;
