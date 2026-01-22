import { Box } from "@mui/material";
import Header from "../../Components/Header";
import BarChart from "../../Components/PieChart";

const Pie =() =>{
    return (
        <Box m="20px">
<Header
title="Pie Chart" subtitle="Simple Pie Chart"/>
<Box height="75vh">

    <BarChart/>
</Box>
        </Box>
    )
}
export default Pie