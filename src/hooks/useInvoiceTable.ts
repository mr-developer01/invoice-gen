import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectInvoices } from "../store/slices/invoiceSlice";

export function useInvoiceTable() {
  const invoices = useAppSelector(selectInvoices);
  const [invId, setInvId] = useState("");
  const dispatch = useAppDispatch();

  const row = invoices
    .filter((client) => client.services?.length !== 0)
    .map((client) => {
      return createData(
        client?.date,
        client?.clientId,
        client?.id,
        client?.payment?.totalAmount,
        client?.payment?.remaining,
        client?.services[0]?.description
      );
    });

  const rows = [...row];

  return {
    invoices,
    invId,
    setInvId,
    dispatch,
    rows,
  };
}

function createData(
  date: string,
  clientId: string,
  invoiceId: string,
  payment: string,
  toatalPay: string,
  services: string
) {
  return { date, clientId, invoiceId, payment, toatalPay, services };
}
