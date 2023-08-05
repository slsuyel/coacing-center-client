import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import Blogs from "../pages/blogs";
import "../App.css";
import Students from "../pages/Students/Students";
import Question from "../pages/Question/Question";
import ErrorPage from "../components/ErrorPage";
import EditStudent from "../pages/Students/EditStudent";
import StudentShow from "../pages/Students/StudentShow";
import Teacher from "../pages/Teacher/Teacher";
import AddQuestions from "../pages/Question/AddQuestions";
import TeacherEdit from "../pages/Teacher/TeacherEdit";
import HomePage from "../home/HomePage";
import AboutUs from "../home/AboutUs";
import Profile from "../StudentsDashboard/Profile";
import TeacherList from "../home/TeacherList";
import Program from "../home/Program";
import ProgramDetails from "../home/ProgramDetails";
import Contact from "../components/Contact";
import Users from "../pages/Users/Users";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from './AdminRoute';
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
                element: <TeacherList />
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
                path: 'student/edit/:id',
                element: <EditStudent />
            },
            {
                path: 'student/show/:id',
                element: <StudentShow />
            },
            {
                path: 'question',
                element: <Question />
            },
            {
                path: 'question/add',
                element: <AddQuestions />
            },
            {
                path: 'teachers',
                element: <Teacher />
            },

            {
                path: 'teacher/edit/:id',
                element: <TeacherEdit />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },

        ]
    }

]);