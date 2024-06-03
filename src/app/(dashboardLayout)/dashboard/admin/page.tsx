import { Budget } from "@/components/Dashboard/pages/Budget";
import { Grid } from "@mui/material";

const page = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(4)).map((_, index) => (
        <Grid item xs={12} sm={4} md={3} key={index}>
          <Budget
            diff={index * 10}
            sx={{
              height: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            trend={index % 2 === 0 ? "up" : "down"}
            value={`$${index * 1000}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default page;
