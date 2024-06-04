import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FieldValues } from "react-hook-form";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import ServiceCategoryTable from "./ServiceCategoryTable";

const validationSchema = z.object({
  name: z.string().min(1, "Service category name is required"),
});

const ServiceCategoryForm = () => {
  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    // Send data to API or perform any other actions
  };

  return (
    <Stack spacing={3}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
        }}
      >
        <MUIForm
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            name: "",
            description: "",
            status: "",
          }}
        >
          <CardContent>
            <Stack spacing={2} sx={{ maxWidth: "sm" }}>
              <MUIInput
                name="name"
                label="Service Category Name"
                type="text"
                fullWidth={true}
              />
            </Stack>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 2,
            }}
          >
            <Button type="submit" variant="contained">
              Create
            </Button>
          </CardActions>
        </MUIForm>
      </Card>
      <Divider />
      <ServiceCategoryTable />
    </Stack>
  );
};

export default ServiceCategoryForm;
