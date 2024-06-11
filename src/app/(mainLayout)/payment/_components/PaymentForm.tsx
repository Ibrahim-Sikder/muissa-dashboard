"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import MUIMultiSelect from "@/components/Forms/MultiSelect";
import INTSelect from "@/components/Forms/Select";
import { subscriptions } from "@/types";
import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const PaymentForm = () => {
  const [selectedValue, setSelectedValue] = useState("bkash");
  const [totalAmount, setTotalAmount] = useState("");

  const handleBankChange = (event: { target: { value: string } }) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
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
                name="targetAmount"
                label="Target Account/পে একাউন্ট"
                variant="outlined"
                fullWidth
                placeholder="01XXXXXXXXXX"
              />
            </Grid>

            <p className="">3. Your Transaction / আপনার লেনদেন</p>
            <Grid item xs={12} md={12} lg={12}>
              <INTSelect
                name="subscription"
                label="Select Subscription "
                items={subscriptions}
                onChange={handleChang}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="totalAmount"
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
                  name="coupon"
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
                name="paymentAmount"
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
              name="accountNumber"
              label="আপনার অ্যাকাউন্ট নাম্বার লিখুন"
              variant="outlined"
              fullWidth
              placeholder="123456"
            />
          </Grid>

          <div className="my-4">
            <p className="mb-2">4. Enter Transaction ID/লেনদেন আইডি লিখুন</p>
            <MUIInput
              name="transitionID"
              label="Transaction ID/লেনদেন আইডি লিখুন"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="123456"
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </MUIForm>
      </div>
    </div>
  );
};

export default PaymentForm;
