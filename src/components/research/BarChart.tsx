import { motion } from "framer-motion";
import { useMemo } from "react";

export type BarDatum = { label: string; value: number; color?: string };

type Props = {
  data: BarDatum[];
  height?: number;
  unit?: string;
  accent?: string;
  showValueOnTop?: boolean;
  rotateLabels?: boolean;
  title?: string;
  subtitle?: string;
};

/** Compute a human-readable Y-axis tick interval for a given max value */
function niceInterval(max: number): number {
  if (max <= 0) return 1;
  const raw = max / 5;
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  const candidates = [1, 2, 2.5, 5, 10].map((c) => c * magnitude);
  return candidates.find((c) => c >= raw) ?? candidates[candidates.length - 1];
}

/**
 * Premium bar chart — Y-axis gridlines, bold value labels, clean CTO-approved style.
 * Pure SVG + Framer Motion, zero external chart deps.
 */
const BarChart = ({
  data,
  height = 300,
  unit = "",
  accent = "hsl(var(--primary))",
  showValueOnTop = true,
  rotateLabels = false,
  title,
  subtitle,
}: Props) => {
  if (!data?.length) return null;

  // ── layout constants ──────────────────────────────────────────────────────
  const PAD_LEFT   = 48;   // room for Y-axis labels
  const PAD_RIGHT  = 12;
  const PAD_TOP    = showValueOnTop ? 30 : 12;
  const PAD_BOTTOM = rotateLabels ? 60 : 38;

  const barMinW   = 36;
  const perBarPx  = 64;
  const totalW    = Math.max(data.length * perBarPx + PAD_LEFT + PAD_RIGHT, 320);
  const chartW    = totalW - PAD_LEFT - PAD_RIGHT;
  const chartH    = height - PAD_TOP - PAD_BOTTOM;

  // ── Y-axis ticks ──────────────────────────────────────────────────────────
  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const interval = niceInterval(maxVal);
  const niceMax  = Math.ceil(maxVal / interval) * interval;
  const ticks    = useMemo(() => {
    const arr: number[] = [];
    for (let v = 0; v <= niceMax; v += interval) arr.push(v);
    return arr;
  }, [niceMax, interval]);

  // ── bar geometry ──────────────────────────────────────────────────────────
  const barGroupW  = chartW / data.length;
  const barW       = Math.min(Math.max(barGroupW * 0.58, barMinW), barGroupW * 0.72);
  const barOffsetX = (barGroupW - barW) / 2;

  const yForValue = (v: number) => PAD_TOP + chartH - (v / niceMax) * chartH;
  const hForValue = (v: number) => (v / niceMax) * chartH;

  return (
    <div className="w-full space-y-1">
      {title && (
        <p className="font-bold text-sm text-foreground">{title}</p>
      )}
      {subtitle && (
        <p className="text-xs text-muted-foreground mb-2">{subtitle}</p>
      )}

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${totalW} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full"
          style={{ minWidth: Math.max(data.length * barMinW + PAD_LEFT + PAD_RIGHT, 280), height }}
          role="img"
          aria-label="Bar chart"
        >
          {/* ── Y-axis gridlines + labels ─────────────────────────────── */}
          {ticks.map((tick) => {
            const y = yForValue(tick);
            return (
              <g key={tick}>
                {/* horizontal grid line */}
                <line
                  x1={PAD_LEFT}
                  x2={totalW - PAD_RIGHT}
                  y1={y}
                  y2={y}
                  stroke="hsl(var(--border))"
                  strokeWidth={tick === 0 ? 1.5 : 0.75}
                  strokeDasharray={tick === 0 ? undefined : "0"}
                />
                {/* Y label */}
                <text
                  x={PAD_LEFT - 8}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fontWeight="600"
                  fill="hsl(var(--muted-foreground))"
                  fontFamily="var(--font-body, system-ui)"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* ── Left Y axis rule ─────────────────────────────────────── */}
          <line
            x1={PAD_LEFT}
            x2={PAD_LEFT}
            y1={PAD_TOP}
            y2={PAD_TOP + chartH}
            stroke="hsl(var(--border))"
            strokeWidth={1}
          />

          {/* ── Bars ─────────────────────────────────────────────────── */}
          {data.map((d, i) => {
            const bx     = PAD_LEFT + i * barGroupW + barOffsetX;
            const bh     = hForValue(d.value);
            const by     = yForValue(d.value);
            const cx     = bx + barW / 2;
            const color  = d.color || accent;
            const baseY  = PAD_TOP + chartH;

            return (
              <g key={i}>
                {/* value label on top */}
                {showValueOnTop && d.value > 0 && (
                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 + 0.5 }}
                    x={cx}
                    y={by - 7}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="800"
                    fill="hsl(var(--foreground))"
                    fontFamily="var(--font-body, system-ui)"
                  >
                    {d.value}
                  </motion.text>
                )}

                {/* animated bar — grows upward from baseline */}
                <motion.rect
                  initial={{ height: 0, y: baseY }}
                  whileInView={{ height: bh, y: by }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  x={bx}
                  width={barW}
                  rx={3}
                  ry={3}
                  fill={color}
                />

                {/* subtle top highlight stripe */}
                <motion.rect
                  initial={{ height: 0, y: baseY }}
                  whileInView={{ height: Math.min(bh, 5), y: by }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  x={bx}
                  width={barW}
                  rx={3}
                  ry={3}
                  fill="rgba(255,255,255,0.25)"
                />

                {/* X-axis label */}
                {rotateLabels ? (
                  <text
                    x={cx}
                    y={PAD_TOP + chartH + 14}
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="600"
                    fill="hsl(var(--muted-foreground))"
                    fontFamily="var(--font-body, system-ui)"
                    transform={`rotate(-40 ${cx} ${PAD_TOP + chartH + 14})`}
                  >
                    {d.label}
                  </text>
                ) : (
                  <text
                    x={cx}
                    y={PAD_TOP + chartH + 18}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="hsl(var(--muted-foreground))"
                    fontFamily="var(--font-body, system-ui)"
                  >
                    {d.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {unit && (
        <p className="text-[11px] text-muted-foreground text-center font-medium tracking-wide pt-0.5">
          {unit}
        </p>
      )}
    </div>
  );
};

export default BarChart;
