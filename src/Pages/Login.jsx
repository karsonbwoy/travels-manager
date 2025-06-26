import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, InputAdornment } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useUser } from "../UserContext";

const Login = () => {
  const { login } = useUser();
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChanege = (e) => {
    const { name, value } = e.target;
    if (name === "login") {
      setUserLogin(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login({ userLogin, password });
  };
  return (
    <Box sx={{ p: 2, border: "1px solid grey", borderRadius: 1 }}>
      <form onSubmit={(e) => handleLogin(e)}>
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
          ></TextField>
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
          ></TextField>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            type="submit"
          >
            <LoginIcon />
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
