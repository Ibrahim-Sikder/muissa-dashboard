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

import { getCookie } from "@/helpers/Cookies";
import { useEffect, useState } from "react";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import axios from "axios";
import { toast } from "sonner";
import { useGetAllCategoryQuery } from "@/redux/api/serviceApi";

const validationSchema = z.object({
  category: z.string().min(1, "Service category name is required"),
});

type CategoryModal = {
  setModalOpen: (value: boolean) => void;
};

const ServiceCategoryForm = ({ setModalOpen }: CategoryModal) => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = getCookie("mui-token");

  const { refetch } = useGetAllCategoryQuery({});

  const handleSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/categories/create-category`,
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
        // setModalOpen(false);
        setIsLoading(false);
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
      setIsLoading(false);
    }
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
            category: "",
          }}
        >
          <CardContent>
            <Stack spacing={2} sx={{ maxWidth: "sm" }}>
              <MUIInput
                name="category"
                label="Service Category Name"
                type="text"
                fullWidth={true}
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
            <Button disabled={isLoading} type="submit" variant="contained">
              {isLoading ? "Creating.." : "Create"}
            </Button>
          </CardActions>
        </MUIForm>
      </Card>
      <Divider />
    </Stack>
  );
};

export default ServiceCategoryForm;
