import React from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2"; // Import Bar, Pie, and Doughnut components for charts
import Chart from "chart.js/auto"; // Chart.js for creating charts
import { CategoryScale } from "chart.js"; // Import CategoryScale for scaling purposes
Chart.register(CategoryScale); // Register CategoryScale to enable its functionality

const ImpactDashboard = () => {
  // Data for the bar chart (Yearly progress of blood requests)
  const barData = {
    labels: ["2021", "2022", "2023", "2024"], // X-axis labels (Years)
    datasets: [
      {
        label: "Fulfilled Request", // Label for the first dataset
        data: [160, 250, 350, 400], // Data points for each year
        backgroundColor: "#800000", // Color of the bars for fulfilled requests
      },
      {
        label: "Cancelled Request", // Label for the second dataset
        data: [200, 260, 200, 100], // Data points for each year
        backgroundColor: "#F5B7B1", // Color of the bars for canceled requests
      },
    ],
  };

  // Configuration options for the bar chart
  const barOptions = {
    responsive: true, // Chart adjusts to the container's size
    maintainAspectRatio: false, // Prevents chart distortion
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
    },
    scales: {
      x: {
        title: {
          display: true, // Display title for the x-axis
          text: "Year", // Title text for the x-axis
        },
      },
      y: {
        beginAtZero: true, // Ensure the y-axis starts from zero
        title: {
          display: true, // Display title for the y-axis
          text: "Blood Requests", // Title text for the y-axis
        },
      },
    },
  };

  // Data for the Doughnut chart (Communities supported)
  const communitiesData = {
    labels: ["Hospitals", "Community Health Centers", "Blood Banks"], // Categories
    datasets: [
      {
        data: [35, 30, 35], // Data for each category
        backgroundColor: ["#800000", "#F5B7B1", "#E0A3AD"], // Colors for the doughnut segments
      },
    ],
  };

  // Data for the Pie chart (Donor distribution)
  const donorsData = {
    labels: ["Repeat Donors", "First-Time Donors"], // Donor types
    datasets: [
      {
        data: [30, 70], // Data for each donor type
        backgroundColor: ["#F5B7B1", "#800000"], // Colors for the pie segments
      },
    ],
  };

  return (
    <div style={styles.container}>
      {/* Bar Chart Section */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>
          Yearly Progress of Blood Requests: Increasing Fulfillments and Growing Demand
        </h3>
        <div style={styles.chart}>
          <Bar data={barData} options={barOptions} /> {/* Render the Bar chart */}
        </div>
      </div>

      {/* Doughnut Chart Section (Communities Supported) */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Communities Supported</h3>
        <div style={styles.chart}>
          <Doughnut
            data={communitiesData} // Pass data for the Doughnut chart
            options={{ maintainAspectRatio: false }} // Prevent distortion
          />
        </div>
      </div>

      {/* Pie Chart Section (Donors Distribution) */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Percentage of First-Time Donors vs. Repeat Donors</h3>
        <div style={styles.chart}>
          <Pie
            data={donorsData} // Pass data for the Pie chart
            options={{ maintainAspectRatio: false }} // Prevent distortion
          />
        </div>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    fontFamily: "Arial, sans-serif", // Font family for the entire dashboard
    padding: "20px", // Padding around the dashboard
    backgroundColor: "#f4f4f4", // Light gray background color
  },
  title: {
    textAlign: "center", // Center-align the title text
    marginBottom: "20px", // Space below the title
  },
  chartContainer: {
    marginBottom: "40px", // Space below each chart section
    display: "flex", // Use flexbox for layout
    flexDirection: "column", // Arrange items vertically
    alignItems: "center", // Center-align items
  },
  chartTitle: {
    textAlign: "center", // Center-align the chart titles
    marginBottom: "10px", // Space below the chart title
  },
  chart: {
    width: "100%", // Full width for responsive design
    maxWidth: "600px", // Maximum width for the chart
    height: "400px", // Fixed height for the chart container
  },
};

export default ImpactDashboard;
