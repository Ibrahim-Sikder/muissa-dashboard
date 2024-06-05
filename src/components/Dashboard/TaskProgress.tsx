import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { CiCircleList as ListBulletsIcon } from "react-icons/ci";

export interface TasksProgressProps {
  sx?: SxProps;
  value: number;
}

export function TasksProgress({
  value,
  sx,
}: TasksProgressProps): React.JSX.Element {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                color="text.secondary"
                gutterBottom
                variant="overline"
              >
                Task Progress
              </Typography>
              <Typography variant="h4">{value}%</Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: "#00305c",
                height: "56px",
                width: "56px",
              }}
            >
              <ListBulletsIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          <div>
            <LinearProgress value={value} variant="determinate" />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
