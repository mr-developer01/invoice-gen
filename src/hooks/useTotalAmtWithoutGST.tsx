import { useAppSelector } from "../store/hooks";
import { selectInvoices } from "../store/slices/invoiceSlice";

export const useTotalAmtWithoutGST = (id: string) => {
  const invoice = useAppSelector(selectInvoices);
  const inv = invoice.filter((invoiceById) => {
    return invoiceById.clientId === id;
  });

  const amt = inv[0].services?.reduce((acc, data) => {
    return (acc = acc + data?.rate);
  }, 0);

  return amt
};
