import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts/index";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form/index.jsx";


// import Bar from './Scenes/bar';
// import Line from './Scenes/line';
// import Pie from './Scenes/pie';
// import FAQ from './Scenes/faq';
// import Geography from './Scenes/geography';
// import Calendar from './Scenes/calendar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      {/* Add more routes here when ready */}
      <Route path="bar" element={<Bar />} />
      <Route path="line" element={<Line />} />
      <Route path="pie" element={<Pie />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="geography" element={<Geography />} />
      <Route path="calendar" element={<Calendar />} />
    </Route>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
