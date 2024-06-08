import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container py-5">
      {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Hostel Absent Details 2021-2024"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};