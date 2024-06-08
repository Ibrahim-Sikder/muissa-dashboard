"use client";

import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { SetStateAction, useState } from "react";

const PaymentForm = () => {
  const [selectedValue, setSelectedValue] = useState("bkash");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6">Payment/পেমেন্ট</h2>
        <form>
          <div className="mb-4">
            <p className="mb-2">1. Choose Bank/ব্যাংক বেছে নিন</p>
            <RadioGroup value={selectedValue} onChange={handleChange} row>
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
          <div className="mb-4">
            <p className="mb-2">2. Copy Account Pay/অ্যাকাউন্ট পে কপি করুন</p>
            <TextField
              label="Payment Amount/পরিশোধিত অর্থ"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="1000"
            />
            <TextField
              label="Target Account/লক্ষ্য অ্যাকাউন্ট"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="017XXXXXXXX"
            />
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">
              Tip: Cash Out to the account below and fill in the required
              information
            </p>
            <p className="text-sm text-gray-500">
              টিপঃ নিচের অ্যাকাউন্টে ক্যাশ আউট করুন এবং প্রয়োজনীয় তথ্য পূরণ
              করুন
            </p>
          </div>
          <div className="mb-4">
            <p className="mb-2">3. Enter Transaction ID/লেনদেন আইডি লিখুন</p>
            <TextField
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
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
