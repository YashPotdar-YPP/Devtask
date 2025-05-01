import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Button,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [btnColorChange, setBtnColor] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  // For the validations
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const handleLogin = () => {
    setEmailError(email === "");
    setPasswordError(password === "");

    if (email && password) {
      navigate("/profile");
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xl: "25%",
              lg: "30%",
              md: "50%",
              sm: "50%",
              xs: "100%",
            },
            height: "100vh",
            border: "1px solid #e1e1e1",
            backgroundColor: "#f7f8f9",
            display: "flex",
            flexDirection: "column",
            p: 3,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {/* Heading */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
              Create your <br /> PopX account
            </Typography>
          </Box>

          {/* Inputs container */}
          <Box sx={{ flexGrow: 1, mt: 2, overflowY: "auto" }}>
            <Box sx={{ width: "100%", p: "3%" }}>
              <TextField
                type="text"
                label="Full Name"
                placeholder="Enter Full Name"
                fullWidth
                color="#6c25ff"
                focused
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Full name is required" : ""}
                InputLabelProps={{ sx: { color: "#6c25ff" } }}
              />
            </Box>

            <Box sx={{ width: "100%", p: "3%" }}>
              <TextField
                type="text"
                label="Phone Number"
                placeholder="Enter Phone Number"
                fullWidth
                color="#6c25ff"
                focused
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={phoneError}
                helperText={phoneError ? "Phone number is required" : ""}
                InputLabelProps={{ sx: { color: "#6c25ff" } }}
              />
            </Box>

            <Box sx={{ width: "100%", p: "3%" }}>
              <TextField
                type="email"
                label="Email Address"
                placeholder="Enter email address"
                fullWidth
                color="#6c25ff"
                focused
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Email is required" : ""}
                InputLabelProps={{ sx: { color: "#6c25ff" } }}
              />
            </Box>

            <Box sx={{ width: "100%", p: "3%" }}>
              <TextField
                type="password"
                label="Password"
                placeholder="Enter password"
                fullWidth
                color="#6c25ff"
                focused
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={passwordError ? "Password is required" : ""}
                InputLabelProps={{ sx: { color: "#6c25ff" } }}
              />
            </Box>

            <Box sx={{ width: "100%", p: "3%" }}>
              <TextField
                type="text"
                color="#6c25ff"
                label="Company Name"
                placeholder="Enter Company Name"
                fullWidth
                focused
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                error={companyError}
                helperText={companyError ? "Company name is required" : ""}
                InputLabelProps={{ sx: { color: "#6c25ff" } }}
              />
            </Box>

            <Box sx={{ p: "3%" }}>
              <FormControl>
                <Typography sx={{ mt: 2 }}>Are you an Agency?</Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="Yes"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#6c25ff" } }} />
                    }
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#6c25ff" } }} />
                    }
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>

          {/* Button at the bottom */}
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleLogin}
              sx={{
                width: "100%",
                p: { xl: "2%", lg: "3%", md: "2%", sm: "3%", xs: "3%" },
                borderRadius: "8px",
                backgroundColor: "#6c25ff",
                color: "white",
                fontWeight: "600",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#5a1ede",
                },
              }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
