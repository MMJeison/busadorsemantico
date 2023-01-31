import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { Button, TextField, Box, Typography } from "@mui/material";

import { increment, decrement, incrementByAmount } from "../app/features/counter/counterSlice"

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const [incrementAmount, setIncrementAmount] = useState(0);
    const dispatch = useDispatch();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
                <TextField
                    id="outlined-basic"
                    label="Counter"
                    variant="outlined"
                    value={count}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography variant="h4" component="div" gutterBottom>
                    Increment By:
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(incrementByAmount(incrementAmount))}
                >
                    Increment
                </Button>                
            </Box>
        </Box>
    );
};

export default Counter;