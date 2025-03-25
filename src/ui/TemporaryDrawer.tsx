import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router";

export default function TemporaryDrawer() {
  const [open] = React.useState(true);

  return (
    <div>
      <Drawer open={open} hideBackdrop elevation={4}>
        <Stack direction={"column"} sx={{ px: 5, py: 3, alignItems: 'center' }}>
          <Typography
            variant="body2"
            sx={{ textDecoration: "none", cursor: 'pointer' }}
          >
            Add Client
          </Typography>
          <Typography
            variant="body2"
            component={Link}
            to={"/invoices"}
            sx={{ textDecoration: "none", color: 'black' }}
          >
            Create invoice
          </Typography>
        </Stack>
      </Drawer>
    </div>
  );
}
