document.getElementById('load').addEventListener('click', () => {
  fetch('http://localhost:5000/api/report/user123')
    .then(res => res.json())
    .then(data => {
      let output = '⏱️ Time Spent Today:\n\n';
      data.forEach(report => {
        output += `- ${report.site}: ${report.duration} seconds\n`;

      });
      document.getElementById('output').textContent = output;
    })
    .catch(err => {
      document.getElementById('output').textContent = '⚠️ Error loading report';
      console.error(err);
    });
});
