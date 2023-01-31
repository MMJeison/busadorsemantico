import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
        }}>
            <Typography variant="h2" component="div" gutterBottom>
                404
            </Typography>
            <NavLink to="/" style={{
                textDecoration: "none",
            }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Home
                </Typography>
            </NavLink>
        </Box>
    );
};

export default NotFound;