import React from "react";
import { Box, CssBaseline, Typography, Badge, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import User from "../../assets/user.png";
import cam from "../../assets/cam.svg";

export default function Profile() {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: { xl: "1%", lg: "1%", md: "2%", sm: "2%", xs: "3%" },
          }}
        >
          Account Settings
        </Box>
        <Box
          sx={{
            width: { xl: "25%", lg: "30%", md: "50%", sm: "50%", xs: "100%" },
            height: "90vh",
            border: "1px solid #e1e1e1",
            backgroundColor: "#f7f8f9",
            display: "flex",
            flexDirection: "column",
            p: 3,
            boxShadow: 1,
          }}
        >
          {/* Text above the Input Box  */}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly",mt:3 }}>
              <Box>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={<SmallAvatar alt="Edit Icon" src={cam} />}
                >
                  <Avatar
                    alt="User"
                    src={User}
                    sx={{ width: 100, height: 100 }}
                  />
                </Badge>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Marry Doe</Typography>
                <Typography>Marry@Gmail.Com</Typography>
              </Box>
            </Box>
            <Typography sx={{ mt: 4,pb:3,borderBottom:"2px dashed #cbcbcb" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              laudantium, unde nihil, autem, possimus blanditiis ut maiores
              consequatur cumque molestias dolor ducimus beatae!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
