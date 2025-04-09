import { Stack, Typography } from "@mui/material";
import SearchUserByEmail from "../forms/SearchUserByEmail";
import { useAppSelector } from "../../store/hooks";
import { selectClient } from "../../store/slices/updateClientSlice";
import AddService from "../core/AddService";
import AddPayment from "../core/AddPayment";

const Invoices = () => {
  const searchedClient = useAppSelector(selectClient);
  return (
    <>
      <SearchUserByEmail />
      {searchedClient && searchedClient.length !== 0 ? (
        <Typography mt={2}>
          Add Services / Payment for : {searchedClient[0]?.name}
        </Typography>
      ) : (
        <Typography mt={2}>
          No Client is available...
        </Typography>
      )}
      {searchedClient && searchedClient.length !== 0 && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <AddService id={searchedClient[0]?.id} />
          <AddPayment id={searchedClient[0]?.id} />
        </Stack>
      )}
    </>
  );
};

export default Invoices;
