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
		element: <Portal />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <h1>Landing</h1>,
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
				path: '/main',
				element: <Main />,
			},
		],
	},
	{
		path: '/user',
		element: <User />,
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
