import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddServiceDetail from "../forms/AddServiceDetail";

const AddService = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography>Add Services</Typography>
      {toggle ? (
        <Stack
          sx={{
            width: { xs: 200, md: 400 },
            height: 200,
            border: "1px dashed white",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => setToggle(false)}
        >
          <AddIcon sx={{ fontSize: "70px" }} />
        </Stack>
      ) : (
        <AddServiceDetail setToggle={setToggle}/>
      )}
    </Stack>
  );
};

export default AddService;
