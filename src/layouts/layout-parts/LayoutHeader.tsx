import { Box, FlexBox } from 'shared/styles'
import AppButton from 'shared/components/AppButton'
import {
  EditOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Span, Tiny } from 'shared/styles/Typography';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from 'features/authorization/hooks/useAuth';
import { Fragment } from 'react/jsx-runtime';
import { Dropdown, MenuProps } from 'antd';
import handleAuthLocalStorage from 'services/auth-local-storage-service';
import { toast } from 'react-toastify';
import { BoxImageUser, FeatureInfo, Header, LogoPage, MenuFeature, Section } from 'layouts/shared/styles';
import { useContext, useState } from 'react';
import UpdateUserModal from 'layouts/components/UpdateUesrModal';
import UpdatePasswordModal from 'layouts/components/UpdatePasswordModal';
import useDetailBusinessPartner from 'contexts/Authentication/hooks/useGetInfoUser';
import AuthUserContext from 'layouts/context';

const LayoutHeader = () => {
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [openPassword, setOpenPassword] = useState<boolean>(false);

  const { isAuthTourist } = useAuth()
  const { removeToken } = handleAuthLocalStorage();
  const handleLogout = () => {
    removeToken()
    toast.success('You Logout Successfully')
    window.location.reload()
  }

  const suggestList: MenuProps['items'] = [
    {
      key: '1',
      label: <FlexBox style={{ padding: '5px 10px', gap: 8 }} onClick={() => setOpenUser(true)}>
        <SettingOutlined />
        <Tiny>Change user info</Tiny>
      </FlexBox>
    },
    {
      key: '2',
      label: <FlexBox style={{ padding: '5px 10px', gap: 8 }} onClick={() => setOpenPassword(true)}>
        <EditOutlined />
        <Tiny>Change password</Tiny>
      </FlexBox>
    },
    {
      key: '3',
      label: <FlexBox style={{ padding: '5px 10px', gap: 8 }} onClick={handleLogout}>
        <LogoutOutlined />
        <Tiny>Logout</Tiny>
      </FlexBox>
    },
  ]

  const { userInfo } = useContext(AuthUserContext)

  return (
    <Header>
      <Section>
        <LogoPage>
          <Link to={'/'}>
            <img src="/static/logo/logo.svg" /></Link>
        </LogoPage>
        <MenuFeature>
          <Box className='feature_item'>
            <Link to={'/'}>
              <Span>Phiếu giảm giá và ưu đãi</Span></Link>
          </Box>
        </MenuFeature>
        <FeatureInfo gap={'8px'}>
          {isAuthTourist ? <FlexBox style={{ gap: 20, alignItems: 'center' }}>
            <Tiny>Hi, {userInfo?.name}</Tiny>
            <Dropdown
              trigger={['hover']}
              menu={{
                items: suggestList,
              }}
              placement="bottomLeft"
            >
              <BoxImageUser>
                <img src={userInfo?.avatar ? userInfo?.avatar : '/static/avatar/001-man.svg'} />
              </BoxImageUser>
            </Dropdown>

          </FlexBox> : <Fragment>
            <AppButton className="btn_auth btn_login" onClick={() => navigate('/login')}>Đăng nhập</AppButton>
            <AppButton className="btn_auth btn_register" onClick={() => navigate('/register')}>Tạo tài khoản</AppButton>
          </Fragment>}

          {/* <AppButton className='btn_auth btn_cart'>
                        <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                    </AppButton> */}

        </FeatureInfo>
      </Section>
      {openUser && <UpdateUserModal open={openUser} setOpen={setOpenUser} />}
      {openPassword && <UpdatePasswordModal open={openPassword} setOpen={setOpenPassword} />}
    </Header>
  )
}

export default LayoutHeader
