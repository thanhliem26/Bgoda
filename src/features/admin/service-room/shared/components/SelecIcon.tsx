import { SelectProps } from 'antd';
import AutoCompleteBase, { IAutoCompleteBaseProps } from 'shared/components/autocomplete/auto-complete-base'
import style from '../styles/index.module.scss';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import BlenderIcon from '@mui/icons-material/Blender';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BalconyIcon from '@mui/icons-material/Balcony';
import IronIcon from '@mui/icons-material/Iron';
import CountertopsIcon from '@mui/icons-material/Countertops';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const options: SelectProps['options'] = [
  { label: <ConnectedTvIcon />, value: 'tv-icon' },
  { label: <HeatPumpIcon />, value: 'air-conditioner-icon' },
  { label: <BlenderIcon />, value: 'blender-icon' },
  { label: <KitchenIcon />, value: 'kitchen-icon' },
  { label: <BalconyIcon />, value: 'balcony-icon' },
  { label: <IronIcon />, value: 'iron-icon' },
  { label: <BathtubIcon />, value: 'bathhub-icon' },
  { label: <WifiIcon />, value: 'wifi-icon' },
  { label: <CountertopsIcon />, value: 'counter-top-icon' },
  { label: <PoolIcon />, value: 'pool-icon' },
  { label: <CoffeeMakerIcon />, value: 'coffee-marker-icon' },
  { label: <FitnessCenterIcon />, value: 'fitness-center-icon' },
  { label: <LocalDiningIcon />, value: 'local-dining-icon' },
]

export const getServiceByValue = (value: string) => {
  return options?.find((item) => item?.value === value);
}
 
const SelectIcon = (props: Omit<IAutoCompleteBaseProps, 'options' | 'popupClassName'>) => {

  return (
    <AutoCompleteBase
      options={options}
      popupClassName={style['select_icon']}
      className={style['select_parent']}
      {...props}
    />
  )
}

export default SelectIcon