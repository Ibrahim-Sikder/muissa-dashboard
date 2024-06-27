"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import * as z from "zod";
import MUIInput from "@/components/Forms/Input";
import axios from "axios";
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { useRouter } from "next/navigation";
import MUIFileUploadButton from "@/components/Forms/FileUploadButton";
import Image from "next/image";
import userImg from "../../../../assets/logo/profile.png";
export const profileValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  street_address: z
    .string()
    .min(5, "Street address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  postal_code: z.string().min(4, "Postal code must be at least 4 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

const isEmailValid = (auth: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(auth);
};

const isPhoneValid = (auth: string): boolean => {
  const phoneRegex = /^\d{10,11}$/;
  return phoneRegex.test(auth);
};

export function UpdateProfileForm({ data }: any): React.JSX.Element {
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [successMessage, setSuccessMessage] = React.useState<string>("");

  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);

  const [loading, setLoading] = React.useState(false);

  const token = getCookie("mui-token");
  const router = useRouter();

  let email;
  let phone;

  if (data) {
    email = isEmailValid(data.auth) ? data.auth : data.email;
    phone = isPhoneValid(data.auth) ? data.auth : data.phone;
  }

  const defaultValues = {
    profile_pic: data?.profile_pic || imageUrl || "",
    name: data?.name || "",
    auth: email || phone || "",
    phone: phone || "",
    email: email || "",
    street_address: data?.street_address || "",
    city: data?.city || "",
    state: data?.state || "",
    postal_code: data?.postal_code || "",
    country: data?.country || "",
  };

  const handleSubmit = async (values: FieldValues) => {
    values.profile_pic = imageUrl;
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/profile`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);

        router.push("/dashboard/profile");
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

  return (
    <MUIForm
      onSubmit={handleSubmit}
      resolver={zodResolver(profileValidationSchema)}
      defaultValues={defaultValues}
    >
      <div className="flex flex-col md:flex-row justify-center text-center gap-5 items-center">
        <Image
          className="w-40 rounded-full "
          src={imageUrl || data.profile_pic || userImg}
          alt="profile"
          height={100}
          width={100}
        />
        <div>
          <MUIFileUploadButton
            name="profile_pic"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
          />
        </div>
      </div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
        }}
      >
        <CardHeader subheader="Update your profile" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MUIInput name="name" label="Full Name" type="text" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
              <MUIInput
                name="phone"
                label="Phone"
                type="text"
                fullWidth
                disabled={isPhoneValid(data.auth)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="email"
                label="Email"
                type="email"
                fullWidth
                disabled={isEmailValid(data.auth)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="street_address"
                label="Street Address"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="city" label="City" type="text" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="state" label="State" type="text" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="postal_code"
                label="Postal Code"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="country" label="Country" type="text" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
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
            {loading ? "Updating" : "Update"}
          </Button>
        </CardActions>
      </Card>
    </MUIForm>
  );
}
