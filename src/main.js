

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="header-inner">
      <div class="logo">書きっぱ！<span>ステータス</span></div>
    </div>
  </header>
  <main class="main-content">
    <div class="status-summary global-status-ok">
      <i class="fa-solid fa-circle-check"></i>
      <h2>All Systems Operational</h2>
    </div>

    <section class="components-section">
      <h3>System Metrics</h3>
      <div class="components-list">
        <div class="component-card">
          <div class="component-name">Web Application</div>
          <div class="component-status status-ok">Operational</div>
        </div>
        <div class="component-card">
          <div class="component-name">API Server</div>
          <div class="component-status status-ok">Operational</div>
        </div>
        <div class="component-card">
          <div class="component-name">Database</div>
          <div class="component-status status-ok">Operational</div>
        </div>
        <div class="component-card">
          <div class="component-name">Asset Storage</div>
          <div class="component-status status-ok">Operational</div>
        </div>
      </div>
    </section>

    <section class="components-section">
      <h3>API Uptime (Last 7 Days)</h3>
      <div class="components-list graph-container" style="padding: 20px; height: 300px;">
        <canvas id="uptimeChart"></canvas>
      </div>
    </section>

    <section class="incidents-section">
      <h3>Past Incidents</h3>
      <div class="incident-card">
        <div class="incident-date">Apr 16, 2026</div>
        <div class="incident-title">No incidents reported today.</div>
      </div>
      <div class="incident-card">
        <div class="incident-date">Apr 15, 2026</div>
        <div class="incident-title">No incidents reported today.</div>
      </div>
      <div class="incident-card incident-resolved">
        <div class="incident-date">Apr 14, 2026</div>
        <div class="incident-title">Elevated Error Rates on API Server</div>
        <div class="incident-desc">
          <strong>Resolved</strong> - This incident has been resolved. (14:30 JST)<br>
          <strong>Monitoring</strong> - We are continuing to monitor API success rates. (13:15 JST)<br>
          <strong>Investigating</strong> - We are currently investigating elevated 500 error rates on our API. (12:45 JST)
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="footer-inner">
      <p>&copy; 2026 ラノベ書きっぱ！ All rights reserved.</p>
    </div>
  </footer>
`

// グラフの描画
const ctx = document.getElementById('uptimeChart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17'],
      datasets: [{
        label: 'Uptime (%)',
        data: [99.9, 100, 100, 98.5, 100, 100, 100],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#10B981',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false }
        },
        y: {
          min: 95,
          max: 100.5,
          ticks: {
            callback: function(value) { return value + '%' }
          },
          border: { display: false }
        }
      }
    }
  });
}
