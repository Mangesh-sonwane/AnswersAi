import { SparkleIcon } from '@phosphor-icons/react';

export const chargingStationDashboard = {
  dashboard: {
    title: 'Charging Station',
    navigation: ['Charging Stations', 'Fleet Sizing', 'Parking'],
    bestScenarioResults: {
      profitOptimized: {
        description:
          'The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.',
      },
      demandOptimized: {
        description:
          'The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.',
      },
    },
    graphs: {
      unsatisfiedDemand: {
        title: 'Unsatisfied Demand %',
        timeframe: 'Apr - Oct',
        data: [
          { month: 'Apr', value: 40000 },
          { month: 'May', value: 20000 },
          { month: 'Jun', value: 35000 },
          { month: 'Jul', value: 90000 },
          { month: 'Aug', value: 50000 },
          { month: 'Sep', value: 50000 },
          { month: 'Oct', value: 75000 },
        ],
        yAxisMax: 100000,
        currentMonth: 'May',
      },
    },
    keyPerformanceIndicators: {
      infrastructureUnits: {
        title: 'Infrastructure Units',
        value: '€421.07',
        description:
          'This describes variable two and what the shown data means.',
      },
      chargingGrowth: {
        title: 'Charging Growth',
        value: '33.07',
        description:
          'This describes variable two and what the shown data means.',
      },
      localizationChange: {
        title: 'Localization change',
        value: '21.9%',
        description:
          'This describes variable two and what the shown data means.',
      },
      fleetGrowth: {
        title: 'Fleet growth',
        value: '7.03%',
        description:
          'This describes variable two and what the shown data means.',
      },
    },
    additionalMetrics: {
      metric1: 453,
      metric2: 502,
    },
    configuration: {
      maxZones: 11,
      totalPoles: 48,
      optimizationCriteria: ['profit', 'satisfied_demand'],
    },
  },
};

export const exampleButtonsFirst = [
  {
    id: 'carbon1',
    label: 'Carbon 1',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'co2-distribution',
    label: 'Co2 Distribution',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'fleet-sizing',
    label: 'Fleet sizing',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
];

export const RateDatabtn = [
  {
    id: 'parking-rate',
    label: 'Parking Rate',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'border-rate',
    label: 'Border Rate',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'request-rate',
    label: 'Request Rate',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'variable-1',
    label: 'Variable 1',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'variable-2',
    label: 'Variable 2',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'variable-3',
    label: 'Variable 3',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
];

export const VariableDataBtn = [
  {
    id: 'variable-1',
    label: 'Variable 1',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'variable-2',
    label: 'Variable 2',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
  {
    id: 'variable-3',
    label: 'Variable 3',
    icon: <SparkleIcon className='w-4 h-4' weight='fill' />,
  },
];
