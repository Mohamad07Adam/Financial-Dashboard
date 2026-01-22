import { Box, colors } from "@mui/material";
import Header from "../../Components/Header";
import GeographyChart from "../../Components/GeoChart";
import { Theme } from "@fullcalendar/core/internal";
import { tokens } from "../../theme";

const Geo = () => {
    return (
        <Box m="20px">
            <Header
                title="GeographyChart" subtitle="Simple Geography Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">

                <GeographyChart />
            </Box>
        </Box>
    )
}
export default Geo