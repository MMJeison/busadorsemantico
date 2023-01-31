import Counter from "../../components/Counter";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
        }}>
            <Typography variant="h2" component="div" gutterBottom>
                Home
            </Typography>
            <Counter />
            <NavLink to="/about" style={{
                textDecoration: "none",
            }}>
                <Typography variant="h4" component="div" gutterBottom>
                    About
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

export default Home;