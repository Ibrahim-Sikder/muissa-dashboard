"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ServiceCategory {
  id: number;
  name: string;
}

const ServiceCategoryTable = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    // Fetch the categories from API or any data source
    // For now, we'll use mock data
    const mockCategories = [
      {
        id: 1,
        name: "Category 1",
      },
      {
        id: 2,
        name: "Category 2",
      },
    ];
    setCategories(mockCategories);
  }, []);

  const handleDelete = (id: number) => {
    // Mock delete functionality
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        border: "1px solid #e0e0e0",
        p: 2,
      }}
    >
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography variant="h6">Service Categories</Typography>
      </Stack>
      <Table
        sx={{
          border: "1px solid #e0e0e0",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="error"
                  onClick={() => handleDelete(category.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ServiceCategoryTable;
