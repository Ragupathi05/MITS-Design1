import { motion } from "framer-motion";

export type BarDatum = { label: string; value: number; color?: string };

type Props = {
  data: BarDatum[];
  height?: number;
  unit?: string;
  accent?: string;
  showValueOnTop?: boolean;
  rotateLabels?: boolean;
};

/**
 * Pure-SVG responsive bar chart for research analytics.
 * No external deps. Animated bars, semantic-token colors.
 */
const BarChart = ({
  data,
  height = 260,
  unit = "",
  accent = "hsl(var(--primary))",
  showValueOnTop = true,
  rotateLabels = true,
}: Props) => {
  if (!data?.length) return null;
  const max = Math.max(...data.map((d) => d.value)) || 1;
  const barW = 100 / data.length;
  const usableH = height - (rotateLabels ? 56 : 36) - (showValueOnTop ? 18 : 4);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${Math.max(data.length * 48, 320)} ${height}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ minWidth: data.length * 36, height }}
        role="img"
      >
        {/* baseline */}
        <line
          x1="0"
          x2={Math.max(data.length * 48, 320)}
          y1={height - (rotateLabels ? 56 : 36)}
          y2={height - (rotateLabels ? 56 : 36)}
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        {data.map((d, i) => {
          const totalW = Math.max(data.length * 48, 320);
          const x = (i / data.length) * totalW + (totalW / data.length) * 0.18;
          const w = (totalW / data.length) * 0.64;
          const h = (d.value / max) * usableH;
          const y = height - (rotateLabels ? 56 : 36) - h;
          const cx = x + w / 2;
          return (
            <g key={i}>
              {showValueOnTop && (
                <text
                  x={cx}
                  y={y - 6}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="hsl(var(--foreground))"
                >
                  {d.value}
                </text>
              )}
              <motion.rect
                initial={{ height: 0, y: height - (rotateLabels ? 56 : 36) }}
                whileInView={{ height: h, y }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                x={x}
                width={w}
                rx={4}
                fill={d.color || accent}
              />
              <text
                x={cx}
                y={height - (rotateLabels ? 38 : 18)}
                textAnchor={rotateLabels ? "end" : "middle"}
                fontSize="10"
                fill="hsl(var(--muted-foreground))"
                transform={rotateLabels ? `rotate(-45 ${cx} ${height - 38})` : undefined}
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      {unit && (
        <p className="text-xs text-muted-foreground text-center mt-1">{unit}</p>
      )}
    </div>
  );
};

export default BarChart;
