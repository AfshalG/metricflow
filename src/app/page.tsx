const metrics = [
  { label: 'Total Revenue', value: '$48,290', change: '+12.4%', up: true },
  { label: 'Active Users', value: '2,847', change: '+8.1%', up: true },
  { label: 'Conversion Rate', value: '3.24%', change: '-0.3%', up: false },
  { label: 'Avg. Session', value: '4m 32s', change: '+15.7%', up: true },
  { label: 'MRR', value: '$82,450', change: '+6.2%', up: true },
];

const recentActivity = [
  { event: 'New signup', user: 'sarah@acme.co', time: '2m ago', type: 'success' },
  { event: 'Plan upgraded', user: 'mike@startup.io', time: '5m ago', type: 'success' },
  { event: 'Payment failed', user: 'dev@corp.com', time: '12m ago', type: 'error' },
  { event: 'Feature used: Export', user: 'team@growth.co', time: '18m ago', type: 'info' },
  { event: 'New signup', user: 'alex@design.co', time: '24m ago', type: 'success' },
  { event: 'API rate limit hit', user: 'bot@scraper.net', time: '31m ago', type: 'warning' },
];

const topPages = [
  { path: '/dashboard', views: 12480, unique: 3201 },
  { path: '/pricing', views: 8932, unique: 6744 },
  { path: '/docs/api', views: 6211, unique: 4102 },
  { path: '/blog/launch', views: 4890, unique: 3988 },
  { path: '/signup', views: 3421, unique: 3102 },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '240px', borderRight: '1px solid #1a1a1a', padding: '24px 16px', flexShrink: 0 }}>
        <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', padding: '0 8px' }}>
          <span style={{ color: '#22c55e' }}>●</span> MetricFlow
        </div>
        {['Dashboard', 'Analytics', 'Users', 'Revenue', 'Funnels', 'Alerts', 'Settings'].map((item, i) => (
          <div key={i} style={{ padding: '10px 12px', borderRadius: '8px', fontSize: '14px', color: i === 0 ? '#fff' : '#666', background: i === 0 ? '#1a1a1a' : 'transparent', marginBottom: '2px', cursor: 'pointer' }}>
            {item}
          </div>
        ))}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: '32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Dashboard</h1>
            <p style={{ color: '#666', fontSize: '14px', margin: '4px 0 0' }}>Last updated: just now</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select style={{ padding: '8px 12px', background: '#111', border: '1px solid #333', borderRadius: '8px', color: '#ccc', fontSize: '13px' }}>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button style={{ padding: '8px 16px', background: '#22c55e', color: '#000', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Export</button>
          </div>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ padding: '24px', background: '#111', borderRadius: '12px', border: '1px solid #1a1a1a' }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{m.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-1px' }}>{m.value}</div>
              <div style={{ fontSize: '13px', color: m.up ? '#22c55e' : '#ef4444', marginTop: '4px' }}>{m.change} vs last week</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Chart placeholder */}
          <div style={{ background: '#111', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginTop: 0, marginBottom: '20px' }}>Revenue Over Time</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '180px', paddingBottom: '20px' }}>
              {[35, 42, 38, 55, 48, 62, 58, 71, 65, 78, 72, 85].map((h, i) => (
                <div key={i} style={{ flex: 1, background: `linear-gradient(to top, #22c55e40, #22c55e${Math.min(99, h + 20)})`, height: `${h}%`, borderRadius: '4px 4px 0 0', minWidth: '20px' }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#555' }}>
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>

          {/* Top Pages */}
          <div style={{ background: '#111', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginTop: 0, marginBottom: '20px' }}>Top Pages</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ fontSize: '12px', color: '#555', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0', borderBottom: '1px solid #1a1a1a' }}>Path</th>
                  <th style={{ padding: '8px 0', borderBottom: '1px solid #1a1a1a', textAlign: 'right' }}>Views</th>
                  <th style={{ padding: '8px 0', borderBottom: '1px solid #1a1a1a', textAlign: 'right' }}>Unique</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((p, i) => (
                  <tr key={i} style={{ fontSize: '14px' }}>
                    <td style={{ padding: '10px 0', borderBottom: '1px solid #111', fontFamily: 'monospace', fontSize: '13px' }}>{p.path}</td>
                    <td style={{ padding: '10px 0', borderBottom: '1px solid #111', textAlign: 'right', color: '#aaa' }}>{p.views.toLocaleString()}</td>
                    <td style={{ padding: '10px 0', borderBottom: '1px solid #111', textAlign: 'right', color: '#666' }}>{p.unique.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div style={{ background: '#111', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px', marginTop: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginTop: 0, marginBottom: '16px' }}>Recent Activity</h3>
          {recentActivity.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: i < recentActivity.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: a.type === 'success' ? '#22c55e' : a.type === 'error' ? '#ef4444' : a.type === 'warning' ? '#eab308' : '#3b82f6', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '14px' }}>{a.event}</span>
                <span style={{ fontSize: '13px', color: '#555', marginLeft: '8px' }}>{a.user}</span>
              </div>
              <span style={{ fontSize: '12px', color: '#444' }}>{a.time}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
