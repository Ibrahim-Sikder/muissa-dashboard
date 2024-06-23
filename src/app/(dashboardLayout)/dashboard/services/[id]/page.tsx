"use client";

import { Service } from "@/components/Dashboard/pages/services/ServicesTable";
import Loader from "@/components/Loader";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Divider,
  Button,
  Grid,
  Container,
} from "@mui/material";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  const { data, error, isLoading, refetch } = useGetSingleServiceQuery({
    id: params.id,
  });

  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Box className="flex justify-center items-center h-screen bg-white text-center p-4">
        <Typography variant="h6" color="error">
          Failed to load service details.
        </Typography>
        <Button onClick={refetch} variant="contained" className="ml-4">
          Retry
        </Button>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box className="flex justify-center items-center h-screen bg-white">
        <Typography variant="h6">Service not found.</Typography>
      </Box>
    );
  }

  const service: Service = data;

  return (
    <Container maxWidth="xl" className="my-10">
      <Card className="w-full bg-white" sx={{ boxShadow: "none", padding: 4 }}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={service.service_image}
                alt={service.title}
                className="rounded m-auto"
                sx={{ maxHeight: 500, objectFit: "cover", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" gutterBottom>
                {service.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Category: {service.category}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Sub-category: {service.sub_category}
              </Typography>
              <Divider className="my-4" />
              <Typography variant="h6" component="h3" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      service.short_description as string
                    ),
                  }}
                />
              </Typography>
              <Divider className="my-4" />
              <Typography variant="h6" component="h3" gutterBottom>
                Full Description
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(service.description as string),
                  }}
                />
              </Typography>
              <Divider className="my-4" />
              <Typography variant="caption" color="textSecondary">
                Created At: {new Date(service.createdAt).toLocaleDateString()}
              </Typography>
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/dashboard/services")}
                >
                  Back to Services
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ServiceDetailsPage;
