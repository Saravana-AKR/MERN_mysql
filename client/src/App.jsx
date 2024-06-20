import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	Portal,
	Main,
	Login,
	Register,
	User,
	Error,
	UserRights,
	SubDepartment,
	ShiftRoaster,
	Shift,
	Designation,
	Department,
	Company,
	Settlement,
	Resignation,
	ManualAttendance,
	EnquiryDetails,
	Deductions,
	Advance,
	Registration,
	DailyAttendance,
	MonthlyAttendance,
	WeeklyAttendance,
	Bonus,
	MonthlySalary,
	Reports
} from './ComponentPages/Pages';
import { action as registerAction } from './Components/Register';
import { action as loginAction } from './Components/Login';









const router = createBrowserRouter([
	{
		path: '/',
		element: <Portal />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: '/register',
				element: <Register />,
				action: registerAction
			},
			{
				path: '/login',
				element: <Login />,
				action: loginAction
			},
			{
				path: '/main',
				element: <>main</>,
			},
		],
	},
	{
		path: '/user',
		element: <User />,
	},
	{
		path: '/company',
		element: <Company />,
	},
	{
		path: '/department',
		element: <Department />,
	},
	{
		path: '/subDepartment',
		element: <SubDepartment />,
	},
	{
		path: '/designation',
		element: <Designation />,
	},
	{
		path: '/shift',
		element: <Shift />,
	},
	{
		path: '/shiftRoaster',
		element: <ShiftRoaster />,
	},
	{
		path: '/userRights',
		element: <UserRights />,
	},
	{
		path: '/enquiry-details',
		element: <EnquiryDetails />,
	},
	{
		path: '/registration',
		element: <Registration />,
	},
	{
		path: '/manual-attendance',
		element: <ManualAttendance />,
	},
	{
		path: '/deductions',
		element: <Deductions />,
	},
	{
		path: '/advance',
		element: <Advance />,
	},
	{
		path: '/resignation',
		element: <Resignation />,
	},
	{
		path: '/settlement',
		element: <Settlement />,
	},
	
	
]);




function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
