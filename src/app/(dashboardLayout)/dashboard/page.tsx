import React from "react";
import { Budget } from "@/components/Dashboard/pages/Budget";
import { DashboardChart } from "@/components/Dashboard/pages/DashboardChart";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { TotalCustomers } from "@/components/Dashboard/TotalCustomers";
import { TasksProgress } from "@/components/Dashboard/TaskProgress";
import { Traffic } from "@/components/Dashboard/Traffic";

const Page = () => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" value="$24k" />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" value="1.6k" />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <TasksProgress value={75.5} />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Budget diff={-3} trend="down" value="$18k" />
      </Grid>
      <Grid item lg={8} xs={12}>
        <Card
          sx={{
            height: "100%",
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <DashboardChart
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Traffic
          chartSeries={[63, 15, 22]}
          labels={["Desktop", "Tablet", "Phone"]}
          sx={{ height: "100%" }}
        />
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Card
          sx={{
            height: "100%",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Placeholder Content
            </Typography>
            <Typography variant="body1">
              This is a placeholder for additional content or widgets.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={8} md={12} xs={12}>
        <Card
          sx={{
            height: "100%",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Placeholder Content
            </Typography>
            <Typography variant="body1">
              This is a placeholder for additional content or widgets.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
