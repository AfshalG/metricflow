interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

export function MetricCard({ label, value, change, up }: MetricCardProps) {
  return (
    <div style={{ padding: '24px', background: '#111', borderRadius: '12px', border: '1px solid #1a1a1a' }}>
      <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-1px' }}>{value}</div>
      <div style={{ fontSize: '13px', color: up ? '#22c55e' : '#ef4444', marginTop: '4px' }}>
        {change} vs last week
      </div>
    </div>
  );
}
