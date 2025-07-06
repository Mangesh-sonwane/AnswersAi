import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  Customized,
} from 'recharts';

import type { DotProps } from 'recharts';
import { useResponsive } from '../../../store/useResponsive';

// Chart data interface
export interface ChartData {
  month: string;
  value: number;
}

export interface UnsatisfiedDemandChartProps {
  data: ChartData[];
  yAxisMax: number;
  currentMonth: string;
}

// Extended DotProps interface
interface GlowingDotProps extends DotProps {
  isActive?: boolean;
  index?: number;
}

// Point interface for vertical lines
interface Point {
  x: number;
  y: number;
}

// Custom props interface for the Customized component
interface CustomizedProps {
  children: React.ReactNode;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

// Custom tooltip props interface
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
    name: string;
    payload: ChartData;
  }>;
  label?: string;
}

// Glowing active dot (for current month)
const GlowingDot: React.FC<GlowingDotProps> = ({
  cx,
  cy,
  stroke,
  fill,
  r = 5,
  isActive,
}) => {
  if (typeof cx !== 'number' || typeof cy !== 'number') return null;
  return (
    <g>
      {isActive && (
        <circle
          cx={cx}
          cy={cy}
          r={r + 7}
          fill={fill}
          opacity={0.4}
          filter='url(#glow)'
        />
      )}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill='#232323'
        stroke={stroke}
        strokeWidth={isActive ? 3 : 2}
        filter={isActive ? 'url(#glow)' : undefined}
      />
    </g>
  );
};

// Custom tooltip with proper typing
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const value = payload[0].value;
    return (
      <div
        style={{
          background: '#232323',
          border: '1px solid #b5e853',
          borderRadius: 8,
          padding: '6px 10px',
          color: '#fff',
          fontSize: 14,
        }}
      >
        <strong>${(value / 1000).toFixed(0)}K</strong>
      </div>
    );
  }
  return null;
};

// Custom vertical lines under each data point
const VerticalLines: React.FC<{
  points: Point[];
  yAxisBase: number;
}> = ({ points, yAxisBase }) => (
  <g>
    {points.map((point, idx) => (
      <line
        key={idx}
        x1={point.x}
        y1={yAxisBase}
        x2={point.x}
        y2={point.y}
        stroke='#b5e853'
        strokeWidth={2}
        opacity={0.18}
      />
    ))}
  </g>
);

// Wrapper component to render vertical lines under each dot
const VerticalLinesWrapper: React.FC<CustomizedProps> = (props) => {
  const line = React.Children.toArray(props.children).find(
    (
      child
    ): child is React.ReactElement<{
      points?: Point[];
      baseLine?: Point[];
    }> =>
      React.isValidElement(child) &&
      child.type != null &&
      typeof child.type === 'object' &&
      'displayName' in child.type &&
      (child.type as { displayName?: string }).displayName === 'Line'
  );

  if (!line || !line.props || !line.props.points) return null;

  const points = line.props.points;
  const yAxisBase =
    line.props.baseLine && line.props.baseLine[0]
      ? line.props.baseLine[0].y
      : props.height - props.margin.bottom;

  return <VerticalLines points={points} yAxisBase={yAxisBase} />;
};

export const UnsatisfiedDemandChart: React.FC<UnsatisfiedDemandChartProps> = ({
  data,
  yAxisMax,
  currentMonth,
}) => {
  const activeIndex = data.findIndex((d) => d.month === currentMonth);
  const { isMobile } = useResponsive();

  const chartMargin = isMobile
    ? { top: 10, right: 20, left: 0, bottom: 20 }
    : { top: 20, right: 70, left: 10, bottom: 40 };

  return (
    <div
      style={{
        width: '100%',
        height: 350,
        background: '#232323',
        borderRadius: 12,
        paddingTop: 24,
      }}
    >
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data} margin={chartMargin}>
          <defs>
            <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
              <feGaussianBlur stdDeviation='6' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid
            stroke='#444'
            strokeDasharray='none'
            vertical={false}
            horizontal={true}
          />

          <XAxis
            dataKey='month'
            axisLine={true}
            tickLine={false}
            tick={{
              fill: '#999',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
            dy={15}
          />

          <YAxis
            axisLine={true}
            tickLine={false}
            tick={{
              fill: '#999',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
            tickFormatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
            domain={[0, yAxisMax]}
            ticks={[
              0,
              yAxisMax * 0.2,
              yAxisMax * 0.4,
              yAxisMax * 0.6,
              yAxisMax * 0.8,
              yAxisMax,
            ]}
            width={100}
          />

          <Tooltip content={<CustomTooltip />} cursor={false} />

          <Customized
            component={(props) => (
              <VerticalLinesWrapper {...(props as CustomizedProps)} />
            )}
          />

          <Line
            type='linear'
            dataKey='value'
            stroke='#b5e853'
            strokeWidth={2}
            dot={(dotProps) => {
              const propsWithIndex = dotProps as GlowingDotProps;
              return (
                <GlowingDot
                  {...propsWithIndex}
                  stroke='#b5e853'
                  fill='#b5e853'
                  r={propsWithIndex.index === activeIndex ? 7 : 0}
                  isActive={propsWithIndex.index === activeIndex}
                />
              );
            }}
            activeDot={false}
          />

          <ReferenceLine
            x={currentMonth}
            stroke='#b5e853'
            strokeDasharray='8 6'
            strokeWidth={2}
            label={{
              value: 'Now',
              position: 'bottom',
              fill: '#999',
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              offset: 10,
              dy: 30,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UnsatisfiedDemandChart;
