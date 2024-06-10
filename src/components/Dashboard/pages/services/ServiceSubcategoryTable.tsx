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
  Grid,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ServiceCategory {
  id: number;
  name: string;
  subcategories: {
    id: number;
    name: string;
  }[];
}

const ServiceSubcategoryTable = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    // Fetch the categories from API or any data source
    // For now, we'll use mock data
    const mockCategories: ServiceCategory[] = [
      {
        id: 1,
        name: "Category 1",
        subcategories: [
          {
            id: 1,
            name: "Subcategory 1",
          },
          {
            id: 2,
            name: "Subcategory 2",
          },
        ],
      },
      {
        id: 2,
        name: "Category 2",
        subcategories: [
          {
            id: 1,
            name: "Subcategory 1",
          },
          {
            id: 2,
            name: "Subcategory 2",
          },
        ],
      },
      {
        id: 3,
        name: "Category 3",
        subcategories: [
          {
            id: 1,
            name: "Subcategory 1",
          },
          {
            id: 2,
            name: "Subcategory 2",
          },
        ],
      },
      {
        id: 4,
        name: "Category 4",
        subcategories: [
          {
            id: 1,
            name: "Subcategory 1",
          },
          {
            id: 2,
            name: "Subcategory 2",
          },
        ],
      },
      {
        id: 5,
        name: "Category 5",
        subcategories: [
          {
            id: 1,
            name: "Subcategory 1",
          },
          {
            id: 2,
            name: "Subcategory 2",
          },
        ],
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
          minWidth: 650,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Subcategories</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <Box display="flex" flexWrap="wrap">
                  {category.subcategories.map((subcategory) => (
                    <Box
                      key={subcategory.id}
                      sx={{
                        backgroundColor: "#f0f0f0",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        margin: "4px",
                      }}
                    >
                      {subcategory.name}
                    </Box>
                  ))}
                </Box>
              </TableCell>
              <TableCell align="right">
                <IconButton
                  edge="end"
                  aria-label="delete"
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

export default ServiceSubcategoryTable;
