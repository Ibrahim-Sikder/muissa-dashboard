"use client";

import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { SetStateAction, useState } from "react";

const PaymentForm = () => {
  const [selectedValue, setSelectedValue] = useState("bkash");

  const handleBankChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  const [year, setYear] = useState("");

  const handleYearChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setYear(event.target.value);
  };

  const years = Array.from({ length: 7 }, (_, i) => 2024 + i);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mt-10">
        <h2 className="text-2xl font-semibold mb-6">Payment/পেমেন্ট</h2>
        <form>
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
          <div className="mb-4">
            <p className="mb-2">2. Copy Account Pay/অ্যাকাউন্ট পে কপি করুন</p>
            <TextField
              label="Target Account/লক্ষ্য অ্যাকাউন্ট"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="017XXXXXXXX"
            />
            <TextField
              label="Payment Amount/পরিশোধিত অর্থ"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="1000"
            />

            <TextField
              label="আপনার অ্যাকাউন্ট নাম্বার"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="123456"
            />
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel>Year/বছর</InputLabel>
              <Select value={year} onChange={handleYearChange} label="Year/বছর">
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="কুপন কোড"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="123456"
              sx={{ width: "150px" }}
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
            <p className="mb-2">4. Enter Transaction ID/লেনদেন আইডি লিখুন</p>
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
