import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FaArrowDown as ArrowDownIcon } from "react-icons/fa";
import { FaArrowUp as ArrowUpIcon } from "react-icons/fa";
import { FaDollarSign as CurrencyDollarIcon } from "react-icons/fa";

export interface BudgetProps {
  diff?: number;
  trend: "up" | "down";
  sx?: SxProps;
  value: string;
}

export function Budget({
  diff,
  trend,
  sx,
  value,
}: BudgetProps): React.JSX.Element {
  const TrendIcon = trend === "up" ? ArrowUpIcon : ArrowDownIcon;
  const trendColor = trend === "up" ? "#4caf50" : "#f44336";

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
        <Stack spacing={3}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Budget
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: "#00305c",
                height: "56px",
                width: "56px",
              }}
            >
              <CurrencyDollarIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
              <Stack
                sx={{ alignItems: "center" }}
                direction="row"
                spacing={0.5}
              >
                <TrendIcon
                  color={trendColor}
                  fontSize="var(--icon-fontSize-md)"
                />
                <Typography color={trendColor} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
