import React from "react";
import { Divider} from "@mui/material";

type TProps = {
    title: string,
    subtitle: string
}
const SectionTitle = ({title, subtitle}:TProps) => {
  return (
    <div className="w-[700px] mx-auto text-center">
      <h2>{title}</h2>
      <Divider
      sx={{
        width: "150px",
        margin: 'auto', 
        height: "3px",
        marginTop: '15px',
        background: "linear-gradient(to right, #00305C, #1591A3)",
      }}
    />
    <p className="mt-5 w-[500px] mx-auto ">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
