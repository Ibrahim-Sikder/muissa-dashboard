"use client";

import uploadFile from "@/helpers/uploadFile";
import BackupIcon from "@mui/icons-material/Backup";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type INTFileUploaderProps = {
  name: string;
  imageUrl: string;
  setImageUrl: (image: string) => void;
};

const MUIFileUploader = ({
  name,
  setImageUrl,
  imageUrl,
}: INTFileUploaderProps) => {
  const { control, setValue, watch } = useFormContext();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const selectedFile = watch(name);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (!file) return;

    setLoading(true);

    try {
      const uploadPhoto = await uploadFile(file);
      setImageUrl(uploadPhoto?.secure_url);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setTimeout(() => {}, 1000);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box
          sx={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "8px",
            border: "1px dashed #ddd",
            width: "300px",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              padding: "30px",
              textAlign: "center",
              background: "#F9FAFB",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
              borderRadius: "8px",
            }}
          >
            <input
              type="file"
              id="files"
              className="hidden"
              onChange={handleFileChange}
            />
            {!imageUrl && (
              <label
                htmlFor="files"
                className="cursor-pointer py-2 rounded-md shadow-[rgba(0, 0, 0, 0.1) 0px 1px 2px 0px]"
                style={{ display: uploadedImage ? "none" : "block" }}
              >
                <BackupIcon
                  sx={{
                    mr: 2,
                    color: "#111",
                    fontSize: 60,
                    background: "#E8EDFF",
                    padding: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography component="h2">
                  {loading
                    ? "Loading..."
                    : "Drag & Drop or Choose File to Upload"}
                </Typography>
              </label>
            )}
            {imageUrl && (
              <Box mt={2}>
                <label htmlFor="files">
                  <Image
                    src={imageUrl}
                    alt="Uploaded"
                    layout="responsive"
                    width={100}
                    height={100}
                    style={{ borderRadius: "8px" }}
                  />
                </label>
              </Box>
            )}
            {field.value && (
              <Box mt={2}>
                <label htmlFor="files">
                  <Button
                    // onClick={handleUpload}
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      background: "#1591A3",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Upload
                  </Button>
                </label>
              </Box>
            )}
          </Box>
        </Box>
      )}
    />
  );
};

export default MUIFileUploader;
