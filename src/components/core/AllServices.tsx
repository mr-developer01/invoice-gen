import { Button, Stack, Typography } from "@mui/material";

type TService = {
  description: string;
  rate: number;
  time: string;
  currency: string;
};

type TAllServices = {
  services: TService[];
  setShowServices: (arg: boolean) => void;
};

const AllServices = ({ services, setShowServices }: TAllServices) => {
  return (
    <Stack spacing={2} sx={{ alignItems: "end" }}>
      {services.map((service, index) => (
        <Stack
          key={index}
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "space-around",
            py: 1,
            px: 2,
            gap: 20,
            width: { xs: "100%", md: 400 },
            border: "1px solid red",
            borderRadius: "10px",
          }}
        >
          <Stack>
            <Typography variant="caption">{service?.description}</Typography>
            <Typography variant="caption">{service?.time}</Typography>
          </Stack>
          <Typography variant="caption">{service.currency} {service.rate}</Typography>
        </Stack>
      ))}
      <Button variant="contained" onClick={() => setShowServices(false)}>
        Add More
      </Button>
    </Stack>
  );
};

export default AllServices;
