import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Assessment from "../pages/Assessment";
import Profile from "../pages/Profile";

import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRoutes(){

return (

<Routes>


{/* Public Routes */}

<Route
path="/"
element={<Navigate to="/login" replace />}
/>


<Route
path="/login"
element={<Login/>}
/>


<Route
path="/register"
element={<Register/>}
/>



{/* Protected Dashboard Routes */}

<Route

element={

<ProtectedRoute>

<DashboardLayout/>

</ProtectedRoute>

}

>


<Route
path="/dashboard"
element={<Dashboard/>}
/>


<Route
path="/assessment"
element={<Assessment/>}
/>


<Route
path="/profile"
element={<Profile/>}
/>


</Route>



{/* Unknown Route */}

<Route
path="*"
element={<Navigate to="/dashboard" replace />}
/>


</Routes>

)

}