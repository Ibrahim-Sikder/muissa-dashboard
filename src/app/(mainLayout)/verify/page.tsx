"use client";
import lockIcon from "../../../assets/icon/lock-icon.svg";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const OTPInput = ({
  length,
  setOTPValues,
  emptyFieldIndex,
  inputsRef,
}: {
  length: number;
  setOTPValues: React.Dispatch<React.SetStateAction<string[]>>;
  emptyFieldIndex: number | null;
  inputsRef: React.MutableRefObject<HTMLInputElement[]>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value } = e.target;
    setOTPValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[idx] = value;
      return updatedValues;
    });

    // If the current input is not the last one and it's not empty
    if (idx < length - 1 && value.length === 1) {
      // Focus on the next input field
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && idx > 0) {
      console.log("Moving focus to previous input");
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-between">
      {Array.from({ length }, (_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          className={`border rounded w-10 h-10 text-center text-lg mx-1 ${
            emptyFieldIndex === idx ? "border-red-500" : "border-gray-300"
          }`}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          //@ts-ignore
          ref={(el) => (inputsRef.current[idx] = el as HTMLInputElement)}
          style={{
            outline: "none",
            boxShadow: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#059669")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      ))}
    </div>
  );
};

const OTPVerifyPage = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");
  const router = useRouter();
  const [otpValues, setOTPValues] = useState<string[]>(new Array(6).fill(""));
  const [emptyFieldIndex, setEmptyFieldIndex] = useState<number | null>(null);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div className=" -mt-24 h-screen flex items-center justify-center ">
      <div className="border w-full lg:w-1/4 p-10 rounded-md bg-gray-50">
        <Image
          src={lockIcon}
          alt="logo"
          width={60}
          height={66}
          className="w-[60px] mx-auto "
        />
        <h1 className="text-2xl font-bold text-center py-3">
          Enter the 6 digit OTP
        </h1>

        <form onSubmit={handleSubmit}>
          <OTPInput
            length={6}
            setOTPValues={setOTPValues}
            emptyFieldIndex={emptyFieldIndex}
            inputsRef={inputsRef}
          />
          <Button
            fullWidth
            type="submit"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} /> : null}
            sx={{ mt: 2 }}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerifyPage;
