var ctx = document.getElementById("skills");


var skillsChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
      labels: ["HTML", "CSS", "JS", "C++", "PYTHON"],
      datasets: [
          {
              label: "My Skills",
              backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
              ],
              borderColor: "rgba(75,192,192,1)",
              borderDash: [6],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [80, 52, 70, 80, 55],
          }
      ]
  }
});
