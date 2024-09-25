import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Contacts from "./components/pages/contacts/Contacts";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Invoices from "./components/pages/invoices/Invoices";
import ManageTeam from "./components/pages/team/ManageTeam";
import Profile from "./components/pages/profile/Profile";
import Calender from "./components/pages/calender/Calender";
import FaqPage from "./components/pages/faq/FaqPage";
import BarChart from "./components/pages/barChart/BarChart";
import PieChart from "./components/pages/pieChart/PieChart";
import LineChart from "./components/pages/lineChart/LineChart";
import Geography from "./components/pages/geography/geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/manage" element={<ManageTeam />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/geography" element={<Geography />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
