import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	HomeLayout,
	Landing,
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











const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: '/register',
				element: <Register />,
				
			},
			{
				path: '/login',
				element: <Login />,
				
			},
			{
				path: '/portal',
				element: <Portal/>,
				children:[
					{
						index: true,
				       element: <Main/>,
					},
					{
						path: 'user',
						element: <User />,
					},
					{
						path: 'company',
						element: <Company />,
					},
					{
						path: 'department',
						element: <Department />,
					},
					{
						path: 'subDepartment',
						element: <SubDepartment />,
					},
					{
						path: 'designation',
						element: <Designation />,
					},
					{
						path: 'shift',
						element: <Shift />,
					},
					{
						path: 'shiftRoaster',
						element: <ShiftRoaster />,
					},
					{
						path: 'userRights',
						element: <UserRights />,
					},
					{
						path: 'enquiry-details',
						element: <EnquiryDetails />,
					},
					{
						path: 'registration',
						element: <Registration />,
					},
					{
						path: 'manual-attendance',
						element: <ManualAttendance />,
					},
					{
						path: 'deductions',
						element: <Deductions />,
					},
					{
						path: 'advance',
						element: <Advance />,
					},
					{
						path: 'resignation',
						element: <Resignation />,
					},
					{
						path: 'settlement',
						element: <Settlement />,
					},
				]
			},
		],
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
