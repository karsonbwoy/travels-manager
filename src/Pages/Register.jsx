import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, InputAdornment } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChanege = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Box sx={{ p: 2, border: "1px solid grey", borderRadius: 1 }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Login"
            name="login"
            color="secondary"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChanege}
          />
          <TextField
            label="E-mail"
            name="email"
            type="email"
            color="secondary"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChanege}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            color="secondary"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChanege}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            color="secondary"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChanege}
          />
          <Typography variant="body2" color="text.secondary">
            Already have an accaount? <Link to="/login">Login</Link>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            type="submit"
          >
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;
