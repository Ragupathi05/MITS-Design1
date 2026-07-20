import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

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

function niceInterval(max: number): number {
  if (max <= 0) return 1;
  const raw = max / 5;
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  const candidates = [1, 2, 2.5, 5, 10].map((c) => c * magnitude);
  return candidates.find((c) => c >= raw) ?? candidates[candidates.length - 1];
}

/** Rounded-top-only rectangle as SVG path */
function roundedTopRect(x: number, y: number, w: number, h: number, r: number): string {
  if (h <= 0) return "";
  const cr = Math.min(r, w / 2, h);
  return [
    `M ${x} ${y + h}`,
    `L ${x} ${y + cr}`,
    `Q ${x} ${y} ${x + cr} ${y}`,
    `L ${x + w - cr} ${y}`,
    `Q ${x + w} ${y} ${x + w} ${y + cr}`,
    `L ${x + w} ${y + h}`,
    `Z`,
  ].join(" ");
}

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
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  if (!data?.length) return null;

  const PAD_LEFT   = 48;
  const PAD_RIGHT  = 12;
  const PAD_TOP    = showValueOnTop ? 30 : 12;
  const PAD_BOTTOM = rotateLabels ? 60 : 38;

  const barMinW  = 36;
  const perBarPx = 64;
  const totalW   = Math.max(data.length * perBarPx + PAD_LEFT + PAD_RIGHT, 320);
  const chartW   = totalW - PAD_LEFT - PAD_RIGHT;
  const chartH   = height - PAD_TOP - PAD_BOTTOM;

  const maxVal   = Math.max(...data.map((d) => d.value), 1);
  const interval = niceInterval(maxVal);
  const niceMax  = Math.ceil(maxVal / interval) * interval;
  const ticks    = useMemo(() => {
    const arr: number[] = [];
    for (let v = 0; v <= niceMax; v += interval) arr.push(v);
    return arr;
  }, [niceMax, interval]);

  const barGroupW  = chartW / data.length;
  const barW       = Math.min(Math.max(barGroupW * 0.58, barMinW), barGroupW * 0.72);
  const barOffsetX = (barGroupW - barW) / 2;
  const RADIUS     = 6;

  const yForValue = (v: number) => PAD_TOP + chartH - (v / niceMax) * chartH;
  const hForValue = (v: number) => (v / niceMax) * chartH;

  // Build unique gradient IDs per distinct colour
  const uniqueColors = Array.from(new Set(data.map((d) => d.color || accent)));
  const gradientId = (color: string) =>
    "bcg-" + color.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className="w-full space-y-1">
      {title && <p className="font-bold text-sm text-foreground">{title}</p>}
      {subtitle && <p className="text-xs text-muted-foreground mb-2">{subtitle}</p>}

      <div className="w-full overflow-x-auto">
        <svg
          ref={ref}
          viewBox={`0 0 ${totalW} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full"
          style={{ minWidth: Math.max(data.length * barMinW + PAD_LEFT + PAD_RIGHT, 280), height }}
          role="img"
          aria-label="Bar chart"
        >
          <defs>
            {uniqueColors.map((color) => (
              <linearGradient
                key={color}
                id={gradientId(color)}
                x1="0" y1="0" x2="0" y2="1"
              >
                <stop offset="0%"   stopColor={color} stopOpacity="1" />
                <stop offset="55%"  stopColor={color} stopOpacity="0.82" />
                <stop offset="100%" stopColor={color} stopOpacity="0.55" />
              </linearGradient>
            ))}
            {/* Shared shimmer overlay gradient */}
            <linearGradient id="bc-shimmer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="0.28" />
              <stop offset="40%"  stopColor="white" stopOpacity="0.08" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Y-axis gridlines + labels */}
          {ticks.map((tick) => {
            const y = yForValue(tick);
            return (
              <g key={tick}>
                <line
                  x1={PAD_LEFT} x2={totalW - PAD_RIGHT}
                  y1={y} y2={y}
                  stroke="hsl(var(--border))"
                  strokeWidth={tick === 0 ? 1.5 : 0.75}
                />
                <text
                  x={PAD_LEFT - 8} y={y + 4}
                  textAnchor="end" fontSize="10" fontWeight="600"
                  fill="hsl(var(--muted-foreground))"
                  fontFamily="var(--font-body, system-ui)"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Left Y axis rule */}
          <line
            x1={PAD_LEFT} x2={PAD_LEFT}
            y1={PAD_TOP} y2={PAD_TOP + chartH}
            stroke="hsl(var(--border))" strokeWidth={1}
          />

          {/* Bars */}
          {data.map((d, i) => {
            const bx    = PAD_LEFT + i * barGroupW + barOffsetX;
            const bh    = hForValue(d.value);
            const by    = yForValue(d.value);
            const cx    = bx + barW / 2;
            const color = d.color || accent;
            const baseY = PAD_TOP + chartH;
            const gid   = gradientId(color);

            return (
              <g key={i}>
                {/* Value label on top */}
                {showValueOnTop && d.value > 0 && (
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 + 0.5 }}
                    x={cx} y={by - 7}
                    textAnchor="middle" fontSize="11" fontWeight="800"
                    fill="hsl(var(--foreground))"
                    fontFamily="var(--font-body, system-ui)"
                  >
                    {d.value}
                  </motion.text>
                )}

                {/* Gradient bar with rounded top — animates height via scaleY */}
                <motion.path
                  d={roundedTopRect(bx, by, barW, bh, RADIUS)}
                  fill={`url(#${gid})`}
                  initial={{ scaleY: 0, originY: baseY }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${cx}px ${baseY}px` }}
                />

                {/* Shimmer overlay */}
                <motion.path
                  d={roundedTopRect(bx, by, barW, Math.min(bh, chartH * 0.45), RADIUS)}
                  fill="url(#bc-shimmer)"
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: `${cx}px ${baseY}px` }}
                />

                {/* X-axis label */}
                {rotateLabels ? (
                  <text
                    x={cx} y={PAD_TOP + chartH + 14}
                    textAnchor="end" fontSize="10" fontWeight="600"
                    fill="hsl(var(--muted-foreground))"
                    fontFamily="var(--font-body, system-ui)"
                    transform={`rotate(-40 ${cx} ${PAD_TOP + chartH + 14})`}
                  >
                    {d.label}
                  </text>
                ) : (
                  <text
                    x={cx} y={PAD_TOP + chartH + 18}
                    textAnchor="middle" fontSize="11" fontWeight="700"
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
