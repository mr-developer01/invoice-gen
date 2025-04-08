import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import AddServiceDetail from "../forms/AddServiceDetail";
import AllServices from "./AllServices";
import { useAppSelector } from "../../store/hooks";
import { selectInvoices } from "../../store/slices/invoiceSlice";
import { selectTheme } from "../../store/slices/toggleSlice";

type Tid = {
  id: string;
};

type TService = {
  description: string;
  rate: number;
  time: string;
  currency: string;
};

const AddService = ({ id }: Tid) => {
  const invoices = useAppSelector(selectInvoices);
  const theme = useAppSelector(selectTheme);
  const [toggle, setToggle] = useState(true);
  const [services, setServices] = useState<"" | TService[]>("");
  const [showServices, setShowServices] = useState(true);

  useEffect(() => {
    const ser = invoices.filter((invoice) => {
      return invoice.clientId === id;
    });
    setServices(ser[0]?.services);
  }, [id, invoices]);
  return (
    <>
      {services && showServices && (
        <AllServices services={services} setShowServices={setShowServices} />
      )}
      {!showServices && (
        <Stack sx={{ alignItems: "center" }}>
          <Typography>Add Services</Typography>
          {toggle ? (
            <Stack
              sx={{
                width: { xs: 200, md: 400 },
                height: 200,
                border: theme === 'light' ? "1px dashed black" : "1px dashed white",
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
            <AddServiceDetail
              id={id}
              setToggle={setToggle}
              setShowServices={setShowServices}
            />
          )}
        </Stack>
      )}
    </>
  );
};

export default AddService;
