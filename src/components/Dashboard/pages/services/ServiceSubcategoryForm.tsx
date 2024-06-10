import { useState, useEffect } from "react";
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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import ServiceSubcategoryTable from "./ServiceSubcategoryTable";
import INTSelect from "@/components/Forms/Select";

interface ServiceCategory {
  id: number;
  name: string;
}

const validationSchema = z.object({
  name: z.string().min(1, "Subcategory name is required"),
  categoryId: z.string().min(1, "Category is required"),
});

const ServiceSubcategoryForm = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  useEffect(() => {
    // Fetch the categories from API or any data source
    // For now, we'll use mock data
    const mockCategories: ServiceCategory[] = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
      { id: 3, name: "Category 3" },
      { id: 4, name: "Category 4" },
      { id: 5, name: "Category 5" },
    ];
    setCategories(mockCategories);
  }, []);

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
            categoryId: "",
          }}
        >
          <CardContent>
            <Stack spacing={2} sx={{ maxWidth: "sm" }}>
              <INTSelect
                name="categoryId"
                label="Category"
                items={categories.map((category) => category.name)}
              />
              <MUIInput
                name="name"
                label="Subcategory Name"
                type="text"
                fullWidth
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
    </Stack>
  );
};

export default ServiceSubcategoryForm;
