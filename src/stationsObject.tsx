export interface StationProps {
  station: string;
  frequency: string;
}

export const stations: Array<StationProps> = [
  { station: 'Putin FM', frequency: '66,6' },
  { station: 'Dribbble FM', frequency: '101,2' },
  { station: 'Doge FM', frequency: '99,4' },
  { station: 'Ballads FM', frequency: '87,1' },
  { station: 'Maximum FM', frequency: '142,2' },
];
