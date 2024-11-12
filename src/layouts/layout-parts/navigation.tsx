import {
  BankOutlined,
  BoxPlotOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { TYPE_PERMISSION } from 'contexts/AuthenticationAdmin/constants';
import DiscountIcon from '@mui/icons-material/Discount';
import MoreIcon from '@mui/icons-material/More';
interface BaseMenu {
  key: string;
}

interface NormalMenu extends BaseMenu {
  label: string;
  permission?: TYPE_PERMISSION | null
}

interface GroupMenu extends BaseMenu {
  type: 'group';
  label: string;
  icon: JSX.Element;
  children?: (NormalMenu & { icon: JSX.Element, permission: TYPE_PERMISSION | null })[];
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
  // {
  //   key: 'report',
  //   label: 'REPORT',
  //   type: 'group',
  //   children: [
  //     { key: '/admin/evaluates', label: 'Evaluates', icon: <SettingOutlined />, permission: null },
  //   ],
  // },
  {
    key: 'function',
    label: 'FUNCTION',
    type: 'group',
    children: [
      { key: '/admin/business-partner', label: 'Business partner', icon: <TeamOutlined />, permission: 'account_manage' },
      { key: '/admin/bank-business-partner', label: 'Business partner bank', icon: <BankOutlined />, permission: 'bank_manage' },
      { key: '/admin/room', label: 'Room', icon: <HomeOutlined />, permission: 'room_manage' },
      { key: '/admin/booking', label: 'Booking', icon: <MoreIcon />, permission: 'booking_manage' },
      { key: '/admin/discount', label: 'Discount', icon: <DiscountIcon />, permission: 'discount_manage' },
    ],
  },
  {
    key: 'system',
    label: 'SYSTEM',
    type: 'group',
    children: [
      { key: '/admin/room-type', label: 'Room type', icon: <BoxPlotOutlined />, permission: 'room_manage'},
      { key: '/admin/service-room', label: 'Service room', icon: <CustomerServiceOutlined />, permission: 'service_manage' },
      { key: '/admin/role-template', label: 'Role template', icon: <SettingOutlined />, permission: 'role_manage' },
    ],
  },
  {
   type: 'submenu',
   icon:  <UserOutlined />,
   label: 'User',
   children: [
    { key: '/admin', label: 'Tourist',  permission: 'account_manage' },
    { key: '/admin/system-employee', label: 'System employee', permission: 'account_manage'}
   ],
   key: ''
  }
]