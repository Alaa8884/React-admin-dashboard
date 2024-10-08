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
import Contacts from "./pages/contacts/Contacts";
import Dashboard from "./pages/dashboard/Dashboard";
import Invoices from "./pages/invoices/Invoices";
import ManageTeam from "./pages/team/ManageTeam";
import Profile from "./pages/profile/Profile";
import Calender from "./pages/calender/Calender";
import FaqPage from "./pages/faq/FaqPage";
import BarChart from "./pages/barChart/BarChart";
import PieChart from "./pages/pieChart/PieChart";
import LineChart from "./pages/lineChart/LineChart";
import Geography from "./pages/geography/Geography";
import ErrorPage from "./pages/error/ErrorPage";


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
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
