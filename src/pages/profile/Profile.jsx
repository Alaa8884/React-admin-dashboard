import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  // Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HeaderInfo from "../../components/HeaderInfo";

const userRole = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

function Profile() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = () => {
    console.log("dooooone");
    handleClick();
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HeaderInfo
        title={"CREATE USER"}
        subTitle={"Create a New User Profile"}
      />
      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="outlined"
          {...register("firstName", { required: true, minLength: 3 })}
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "This field is required (write minimum 3 characters)"
              : ""
          }
          color="primary"
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="outlined"
          {...register("lastName", { required: true, minLength: 3 })}
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName
              ? "This field is required (write minimum 3 characters)"
              : ""
          }
          color="primary"
        />
      </Stack>
      <TextField
        label="Email"
        variant="outlined"
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please provide a valid email address" : ""}
        color="primary"
      />
      <TextField
        label="Contact Number"
        variant="outlined"
        {...register("contactPhone", {
          required: true,
          pattern: regPhone,
        })}
        error={Boolean(errors.contactPhone)}
        helperText={
          errors.contactPhone ? "Please provide a valid phone number" : ""
        }
        color="primary"
      />
      <TextField label="Adress 1" variant="outlined" color="primary" />
      <TextField label="Adress 2" variant="outlined" color="primary" />
      <TextField
        variant="outlined"
        id="outlined-select-userRole"
        select
        label="Role"
        defaultValue="User"
        helperText="Please select your user role"
        color="primary"
      >
        {userRole.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ alignSelf: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "capitalize",
            borderRadius: "8px",
          }}
        >
          Create New User
        </Button>

        <Snackbar
          sx={{ width: "100%" }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message={
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <CheckCircleOutlineIcon sx={{ color: "primary" }} />{" "}
              <Typography>Account created successfully</Typography>
            </Stack>
          }
        ></Snackbar>
      </Box>
    </Box>
  );
}

export default Profile;
