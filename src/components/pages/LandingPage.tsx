import { useEffect } from "react";
import clientData from "../../../MOCK_DATA_CLIENT.json";
import invoiceData from "../../../MOCK_DATA_INVOICES.json";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addClients } from "../../store/slices/clientSlice";
import { addInvoices, selectInvoices } from "../../store/slices/invoiceSlice";
const LandingPage = () => {
  const dispatch = useAppDispatch();
  const inv = useAppSelector(selectInvoices);
  console.log("Slice invoice: ", inv);

  useEffect(() => {
    dispatch(addClients(clientData));
    dispatch(addInvoices(invoiceData));
  }, [dispatch]);

  return (
    <>
      <h1>Landing Page</h1>
    </>
  );
};

export default LandingPage;
