export interface menu {
  id?: string;
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  getURL?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  
  { header: 'dashboard' },
  {
    id: 'statistics',
    title: 'Statistics',
    icon: 'custom-story',
    to: '/widget/statistics'
  },
  {
    id: 'data',
    title: 'Data',
    icon: 'custom-fatrows',
    to: '/widget/data'
  },
  {
    id: 'chart',
    title: 'Chart',
    icon: 'custom-presentation-chart',
    to: '/widget/chart'
  },
 
  
];

export default sidebarItem;
