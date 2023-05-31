import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG"];

export default function App() {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <Box sx={uploadBox}>
        <Typography variant="h6">Drag & Drop Files to the Box</Typography>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          width={300}
          height={200}
        />
        <Typography>
          {file ? `File name: ${file.name}` : "No files uploaded yet"}
        </Typography>
      </Box>
    </>
  );
}

const uploadBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: {xs:"350px", md:"400px"},
  height: {xs:"200px", md:"300px"},
  border: "2px dashed #ccc",
  margin: {md: "100px"}
};
