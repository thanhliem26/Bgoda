import {
  BoxPlotOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

interface BaseMenu {
  key: string;
}

interface NormalMenu extends BaseMenu {
  label: string;
}

interface GroupMenu extends BaseMenu {
  type: 'group';
  label: string;
  icon: JSX.Element;
  children?: (NormalMenu & { icon: JSX.Element })[];
}

interface SubMenu extends BaseMenu {
  type: 'submenu';
  label: string;
  icon: JSX.Element;
  children: NormalMenu[];
}

interface DividerMenu extends BaseMenu {
  type: 'divider';
}


export type IMenuSideBar = GroupMenu | SubMenu | DividerMenu | NormalMenu;


export const navigation: IMenuSideBar[] = [
  {
    key: 'report',
    label: 'REPORT',
    type: 'group',
    children: [
      { key: 'evaluates', label: 'Evaluates', icon: <SettingOutlined /> },
    ],
  },
  {
    key: 'function',
    label: 'FUNCTION',
    type: 'group',
    children: [
      { key: 'business-partner', label: 'Business partner', icon: <TeamOutlined /> },
      // { key: 'system-employee', label: 'System employee', icon: <SettingOutlined /> },
      { key: 'room', label: 'Room', icon: <HomeOutlined /> },
      { key: 'booking', label: 'Booking', icon: <SettingOutlined /> },
      { key: 'discount', label: 'Discount', icon: <SettingOutlined /> },
    ],
  },
  {
    key: 'system',
    label: 'SYSTEM',
    type: 'group',
    children: [
      { key: 'room-type', label: 'Room type', icon: <BoxPlotOutlined /> },
      { key: 'service-room', label: 'Service room', icon: <CustomerServiceOutlined /> },
      { key: 'role-template', label: 'Role template', icon: <SettingOutlined /> },
    ],
  },
  {
   type: 'submenu',
   icon:  <UserOutlined />,
   label: 'User',
   children: [
    { key: '', label: 'Tourist',},
    { key: 'system-employee', label: 'System employee'}
   ],
   key: ''
  }
]