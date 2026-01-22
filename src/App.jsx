import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import TopBar from "./scenes/global/TopBar";
import Sidebar2 from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";

import Calendar from "./scenes/calendar";
import FAQ from "./scenes/FAQ";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geo";

import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: "flex", height: "100vh" }}>
          <Sidebar2 isSidebar={isSidebar} />
          <div
            className="main-container"
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          >
            <TopBar setIsSidebar={setIsSidebar} />
            <main
              className="content"
              style={{ flex: 1, overflow: "auto", padding: "20px" }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
