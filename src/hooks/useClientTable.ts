import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectClients } from "../store/slices/updateClientSlice";

export function useClientTable() {
  const [clientId, SetClientId] = useState("");
  const clients = useAppSelector(selectClients);
  const dispatch = useAppDispatch();

  const row = clients.map((client) => {
    return createData(
      client.name,
      client.email,
      client.phone,
      client.address,
      client.id
    );
  });

  const rows = [...row];

  return {
    clientId,
    SetClientId,
    dispatch,
    rows,
  };
}

function createData(
  name: string,
  email: string,
  phone: string,
  address: string,
  id: string
) {
  return { name, email, phone, address, id };
}
