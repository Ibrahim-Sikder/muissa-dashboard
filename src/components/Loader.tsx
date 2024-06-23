import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box className="flex justify-center items-center h-screen bg-white">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
