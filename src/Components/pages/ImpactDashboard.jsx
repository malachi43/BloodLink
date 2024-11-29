// import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const ImpactDashboard = () => {
  const barData = {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Fulfillments",
        data: [150, 200, 300, 400],
        backgroundColor: "#A10A28",
      },
      {
        label: "Requests",
        data: [199, 250, 370, 450],
        backgroundColor: "#C0575C",
      },
    ],
  };


  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

    // Data for Pie Charts
    const communitiesData = {
      labels: ["Hospitals", "Community Health Centers", "Blood Banks"],
      datasets: [
        {
          data: [60, 30, 10],
          backgroundColor: ["#A10A28", "#C0575C", "#E0A3AD"],
        },
      ],
    };
  
    const donorsData = {
      labels: ["Repeat Donors", "First-Time Donors"],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["#A10A28", "#C0575C"],
        },
      ],
    };


  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f4f4f4" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>IMPACT DASHBOARD</h2>

    {/* Bar Chart */}
    <div style={{ marginBottom: "40px" }}>
      <h3>Yearly Progress of Blood Requests: Increasing Fulfillments and Growing Demand</h3>
      <Bar data={barData} options={barOptions} />
    </div>

    {/* Communities Supported */}
    <div style={{ marginBottom: "40px" }}>
      <h3>Communities Supported</h3>
      <Pie data={communitiesData} />
    </div>

    {/* Donors Chart */}
    <div>
      <h3>Percentage of First-Time Donors vs. Repeat Donors</h3>
      <Pie data={donorsData} />
    </div>
  </div>
);
};


export default ImpactDashboard;
