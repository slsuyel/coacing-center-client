import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import "../App.css";
import Students from "../pages/Students/Students";
import ErrorPage from "../components/ErrorPage";
import EditStudent from "../pages/Students/EditStudent";
import StudentShow from "../pages/Students/StudentShow";
import Teacher from "../pages/Teacher/Teacher";
import TeacherEdit from "../pages/Teacher/TeacherEdit";
import HomePage from "../home/HomePage";
import AboutUs from "../home/AboutUs";
import Profile from "../StudentsDashboard/Profile";
import Program from "../home/Program";
import ProgramDetails from "../home/ProgramDetails";
import Contact from "../components/Contact";
import Users from "../pages/Users/Users";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from './AdminRoute';
import Programs from "../pages/Programs/Programs";
import AddPrograms from './../pages/Programs/AddPrograms';
import TeacherList from "../pages/Teacher/TeacherList";
import AddTeacher from "../pages/Teacher/AddTeacher";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: 'programs',
                element: <Program />
            },
            {
                path: 'programs/:id',
                element: <ProgramDetails />
            },
            {
                path: 'teachers',
                element: <Teacher />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: "signin",
                element: <Signin />,
            },
            {
                path: "/student/signup",
                element: <Signup />,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },

        ],
    },
    {
        path: 'dashboard',
        element: <AdminRoute><WithNavbar /></AdminRoute>,
        children: [
            {
                path: '',
                element: <Home />
            },

            {
                path: 'student',
                element: <Students />
            },
            {
                path: 'programs',
                element: <Programs />
            },
            {
                path: 'programs/add',
                element: <AddPrograms />
            },
            {
                path: 'student/edit/:id',
                element: <EditStudent />
            },
            {
                path: 'student/show/:id',
                element: <StudentShow />
            },

            {
                path: 'teachers',
                element: <TeacherList />
            },
            {
                path: 'teacher/add',
                element: <AddTeacher />
            },

            {
                path: 'teacher/edit/:id',
                element: <TeacherEdit />
            },
            {
                path: 'users',
                element: <Users />
            },


        ]
    }

]);