import { useState } from "react";
import { Box, CssBaseline, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const naigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    setEmailError(email === "");
    setPasswordError(password === "");

    if (email && password) {
      naigate("/profile");
      // Continue to next step
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
            width: { xl: "25%", lg: "30%", md: "50%", sm: "50%", xs: "100%" },
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
          {/* Text above the Input Box  */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "Bold", mt: 2 }}>
              Signin to your <br /> PopX account
            </Typography>
            <Typography sx={{ color: "#74777b", fontWeight: "Bold", mt: 2 }}>
              Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.
            </Typography>
          </Box>

          {/* Input Box */}
          <Box>
            <Box sx={{ width: "100%", mt: 4, p: "3%" }}>
              <TextField
                type="email"
                label="Email Address"
                placeholder="Enter email address"
                focused
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Email is required" : ""}
                color="#cbcbcb"
                InputLabelProps={{
                  sx: { color: "#6c25ff" },
                }}
              />
            </Box>

            <Box sx={{ width: "100%", mt: 2, p: "3%" }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Enter password"
                focused
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={passwordError ? "Password is required" : ""}
                color="#cbcbcb"
                InputLabelProps={{
                  sx: { color: "#6c25ff" },
                }}
              />
            </Box>

            {/* Login Button */}
            <Box>
              <Button
                onClick={handleLogin}
                sx={{
                  width: "100%",
                  mt: 2,
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
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
