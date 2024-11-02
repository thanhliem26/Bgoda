import {
  FormBodyWrapper,
} from 'features/home/main/shared/style'
import { Box, FlexBox } from 'shared/styles'
import { H2 } from 'shared/styles/Typography'
import AppTabComponent, { ITabType } from 'shared/components/AppTabs'
import RoomComponent from './components/RoomComponent'

const ProposePlace = () => {

  const data1 = [
    {
      image:
        'https://pix8.agoda.net/hotelImages/36087877/-1/5232f35748f1af5439d39426e1152f70.jpg?ce=0&s=375x',
      name: 'Ekemo Home',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/42047083/0/fbbea1abf195f0af5223006d68fbba95.jpg?ce=0&s=375xx',
      name: 'Stock Holm Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/562569907.jpg?k=2d97bc7413decf12bd3aae3a623140db5a6bd7dced24667a129d7fbff01edb77&o=&s=375x',
      name: 'Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/551361109.jpg?k=6e3aae5ea36a6cec59de2500b1666afe3d59e40a821f46ad4ad675080f3e2462&o=&s=375x',
      name: 'Start House DORM Walk 5 Minutes to the Airport',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
  ]

  const data2 = [
    {
      image:
        'https://pix8.agoda.net/hotelImages/46749015/0/d786e3d1b0ed675d3f1908cf7da85d5e.jpg?ce=0&s=375x',
      name: 'Ekemo Home',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/46045575/-1/a12343a53774034a054e6106426da962.jpg?ce=0&s=375x',
      name: 'Stock Holm Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/23168138/328908056/bcbc05be111ee21b734332b297089ccb.jpg?ca=18&ce=1&s=375x',
      name: 'Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/13571807/-1/4a70d0252960a0c7aa88be3cf1bd71a5.jpg?ca=16&ce=1&s=375x',
      name: 'Start House DORM Walk 5 Minutes to the Airport',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
  ]

  const data3 = [
    {
      image:
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/468986192.jpg?k=4247a6003d8fa9bc7f2adf4c49ef9b7636cc4d11b973dfe6ac38c4be1f027df1&o=&s=375x',
      name: 'Ekemo Home',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/34729716/-1/ee66846abd7342ff5be949276f99092f.jpg?ce=0&s=375x',
      name: 'Stock Holm Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/34467676/-1/7d8d235ca74b0c5388e7325e838129c9.png?ce=0&s=375x',
      name: 'Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/42087644/-1/e7598b35028d6bc8f5a9554c2050ddc8.jpg?ce=0&s=375x',
      name: 'Start House DORM Walk 5 Minutes to the Airport',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
  ]

  const data4 = [
    {
      image:
        'https://pix8.agoda.net/hotelImages/42391344/-1/01d373ae6a1a730abfbcc1ea083bd7bc.jpg?ce=0&s=375x  ',
      name: 'Ekemo Home',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/550490822.jpg?k=8f00ca4c3da8b59bec4577ddbbed5fa940327944fa8d40c17c6c504a5a06ebac&o=&s=375x',
      name: 'Stock Holm Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://q-xx.bstatic.com/xdata/images/hotel/max500/539957830.jpg?k=73ef81155a15724a35c2f94ae8837d89d88b5cff98cab966d70255d008f9e775&o=&s=375x',
      name: 'Vinhomes Luxury Residence at Binh Thanh - LUNA Landmark Apartment',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
    {
      image:
        'https://pix8.agoda.net/hotelImages/35937927/-1/2ff9db623b1fd9a3818f67f4a3e0c0ef.jpg?ce=0&s=375x',
      name: 'Start House DORM Walk 5 Minutes to the Airport',
      price: '617,037',
      address: 'Quận 1 Hồ Chí Minh',
    },
  ]

  const items: ITabType[] = [
    {
      key: 'hcm',
      label: 'Hồ Chí Minh',
      children: <RoomComponent data={data1} />,
    },
    {
      key: 'dn',
      label: 'Đà Nẵng',
      children: <RoomComponent data={data2} />,
    },
    {
      key: 'hn',
      label: 'Hà nội',
      children: <RoomComponent data={data3} />,
    },
    {
      key: 'vt',
      label: 'Vũng tàu',
      children: <RoomComponent data={data4} />,
    },
  ]

  return (
    <FormBodyWrapper>
      <Box>
        <H2>Những chỗ nghĩ được đề xuất cho quí khách</H2>
      </Box>
      <FlexBox>
        <AppTabComponent items={items} />
      </FlexBox>
    </FormBodyWrapper>
  )
}

export default ProposePlace
