import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const About = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
        }}>
            <Typography variant="h2" component="div" gutterBottom>
                About
            </Typography>
            <NavLink to="/" style={{
                textDecoration: "none",
            }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Home
                </Typography>
            </NavLink>
            <NavLink to="/contact" style={{
                textDecoration: "none",
            }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Contact
                </Typography>
            </NavLink>
        </Box>
    );
};

export default About;