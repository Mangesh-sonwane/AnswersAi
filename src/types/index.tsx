interface ScenarioResult {
  description: string;
}

interface BestScenarioResultsData {
  profitOptimized: ScenarioResult;
  demandOptimized: ScenarioResult;
}

interface DashboardData {
  dashboard: {
    bestScenarioResults: BestScenarioResultsData;
  };
}

export interface BestScenarioResultsProps {
  data?: BestScenarioResultsData | DashboardData;
}

export interface ResultsRowProps {
  rows: { key: string; description: string }[];
}

interface PerformanceIndicator {
  title: string;
  value: string;
  description: string;
}

export interface PerformanceCardProps {
  data: PerformanceIndicator;
}

export interface PerformanceStatsProps {
  keyPerformanceIndicators: Record<string, PerformanceIndicator>;
}

export type AuthUser = {
  google?: { name: string; email: string };
  github?: { name: string; email: string };
  email?: { name?: string; address: string };
  twitter?: { name: string };
};
