import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
    ["code-block"],
    ["image"],
    ["video"],
  ],
};

const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "clean",
];

interface AppRichTextProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}

const RichtextEditor = ({
  name,
  label,
  required,
  placeholder,
}: AppRichTextProps) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <ReactQuill
            theme="snow"
            defaultValue={placeholder}
            modules={modules}
            formats={formats}
            {...field}
            className=""
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default RichtextEditor;
