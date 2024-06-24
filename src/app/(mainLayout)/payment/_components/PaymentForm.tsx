"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import MUIMultiSelect from "@/components/Forms/MultiSelect";
import INTSelect from "@/components/Forms/Select";
import { ErrorMessage } from "@/components/error-message";
import { SuccessMessage } from "@/components/success-message";
import { getCookie } from "@/helpers/Cookies";
import { subscriptions } from "@/types";
import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const PaymentForm = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState("bkash");
  const [totalAmount, setTotalAmount] = useState("");
  const token = getCookie("mui-token");
  const params = useSearchParams();
const router = useRouter()
  const member_type = params.get("member_type");

  const handleBankChange = (event: { target: { value: string } }) => {
    setSelectedValue(event.target.value);
  };

  console.log(selectedValue);
  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    setIsLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);

    data.payment_method = selectedValue;

    data.amount = Number(totalAmount);
    data.member_type = member_type;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/payments/create-payment`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        router.push("/profile")
        setIsLoading(false);
      }
      console.log("Response:", response);
    } catch (error: any) {
      console.log(error);
      if (error?.response) {
        const { status, data } = error.response;
        if ([400,401,409, 404, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChang = (value: any) => {
    if (value === "1 year subscription fee") {
      setTotalAmount("1000");
    }
    if (value === "2 year subscription fee") {
      setTotalAmount("2000");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mt-10">
        <h2 className="text-2xl font-semibold mb-6">Payment/পেমেন্ট</h2>
        <MUIForm onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="mb-2">1. Choose Bank/ব্যাংক বেছে নিন</p>
            <RadioGroup value={selectedValue} onChange={handleBankChange} row>
              <FormControlLabel
                value="bkash"
                control={<Radio color="primary" />}
                label="bkash"
              />
              <FormControlLabel
                value="nagad"
                control={<Radio color="primary" />}
                label="nagad"
              />
            </RadioGroup>
          </div>
          <p className="mb-2">2. Copy Account Pay/অ্যাকাউন্ট পে কপি করুন</p>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="target_account"
                label="Target Account/পে একাউন্ট"
                variant="outlined"
                fullWidth
                placeholder="01XXXXXXXXXX"
              />
            </Grid>

            <p className="">3. Your Transaction / আপনার লেনদেন</p>
            <Grid item xs={12} md={12} lg={12}>
              <INTSelect
                name="subscription_for"
                label="Select Subscription "
                items={subscriptions}
                onChange={handleChang}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="amount"
                variant="outlined"
                fullWidth
                margin="normal"
                disabled={true}
                value={totalAmount}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <div className="flex items-center gap-x-1 ">
                <MUIInput
                  name="coupon_code"
                  label="কুপন কোড"
                  variant="outlined"
                  fullWidth
                  placeholder="123456"
                  sx={{ width: "250px" }}
                />
                <Button
                  sx={{ width: "70px", height: "40px", marginTop: "8px" }}
                >
                  Apply
                </Button>
              </div>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <p className="mt-3 ">Payable Amount/পরিশোধিত পরিমান</p>
              <MUIInput
                name="payable_amount"
                disabled
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>

          <div className="mb-4 mt-2 ">
            <p className="text-sm mb-2">
              Tip: Cash Out to the account below and fill in the required
              information
            </p>
            <p className="text-sm text-gray-500">
              টিপঃ নিচের অ্যাকাউন্টে ক্যাশ আউট করুন এবং প্রয়োজনীয় তথ্য পূরণ
              করুন
            </p>
          </div>
          <Grid item xs={12} md={12} lg={12}>
            <MUIInput
              name="account_number"
              label="আপনার অ্যাকাউন্ট নাম্বার লিখুন"
              variant="outlined"
              fullWidth
              placeholder="123456"
            />
          </Grid>

          <div className="my-4">
            <p className="mb-2">4. Enter Transaction ID/লেনদেন আইডি লিখুন</p>
            <MUIInput
              name="transaction_id"
              label="Transaction ID/লেনদেন আইডি লিখুন"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="123456"
            />
          </div>
          <div className="mb-5">
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isLoading ? <span>Loading...</span> : <span> Submit</span>}
          </Button>
        </MUIForm>
      </div>
    </div>
  );
};

export default PaymentForm;
