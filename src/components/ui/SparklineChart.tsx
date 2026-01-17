interface SparklineChartProps {
  data: number[];
  color?: string;
  height?: number;
  trend?: "up" | "down";
}

const SparklineChart = ({ data, height = 30, trend = "up" }: SparklineChartProps) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = ((max - value) / range) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg className="w-full" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sparkline-gradient-${trend}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={trend === "up" ? "hsl(var(--primary))" : "hsl(var(--destructive))"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={trend === "up" ? "hsl(var(--primary))" : "hsl(var(--destructive))"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={trend === "up" ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        fill={`url(#sparkline-gradient-${trend})`}
        points={`0,${height} ${points} 100,${height}`}
      />
    </svg>
  );
};

export default SparklineChart;
