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
import axios from "axios";
import { toast } from "sonner";
import { getCookie } from "@/helpers/Cookies";

import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { useGetAllCategoryQuery } from "@/redux/api/serviceApi";

interface ServiceCategory {
  id: number;
  name: string;
}

type CategoryModal = {
  setModalOpen: (value: boolean) => void;
};

const validationSchema = z.object({
  category: z.string().min(1, "Category is required"),
  sub_category: z.string().min(1, "Subcategory name is required"),
});

const ServiceSubcategoryForm = ({ setModalOpen }: CategoryModal) => {
  const token = getCookie("mui-token");

  const {
    data: category,
    error,
    isLoading,
    refetch,
  } = useGetAllCategoryQuery({
    
  });

  // useEffect(() => {
  //   // Fetch the categories from API or any data source
  //   // For now, we'll use mock data
  //   const mockCategories: ServiceCategory[] = [
  //     { id: 1, name: "Category 1" },
  //     { id: 2, name: "Category 2" },
  //     { id: 3, name: "Category 3" },
  //     { id: 4, name: "Category 4" },
  //     { id: 5, name: "Category 5" },
  //   ];
  //   setCategories(mockCategories);
  // }, []);

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/subCategories/create-subCategory`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        refetch();
        setModalOpen(false);
        setLoading(false);
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const { status, data } = error;
      if ([400, 404, 401, 409, 500].includes(status)) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage(["An unexpected error occurred."]);
      }
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            sub_category: "",
            category: "",
          }}
        >
          <CardContent>
            <Stack spacing={2} sx={{ maxWidth: "sm" }}>
              <INTSelect
                name="category"
                label="Category"
                items={category?.map(
                  (cat: { category: string }) => cat?.category
                )}
              />
              <MUIInput
                name="sub_category"
                label="Subcategory Name"
                type="text"
                fullWidth
              />
            </Stack>
          </CardContent>
          <div className="mt-2">
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 2,
            }}
          >
            <Button disabled={loading} type="submit" variant="contained">
              {loading ? "Creating..." : "Create"}
            </Button>
          </CardActions>
        </MUIForm>
      </Card>
      <Divider />
    </Stack>
  );
};

export default ServiceSubcategoryForm;
