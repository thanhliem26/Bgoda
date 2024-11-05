import React, { useContext }  from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import styled from 'styled-components'
import { Box, FlexBox } from 'shared/styles'
import { navigation } from 'layouts/layout-parts/navigation'
import Scrollbar from 'shared/components/ScrollBar'
import { Link, useNavigate } from 'react-router-dom'
import ProfilePopover from 'layouts/layout-parts/ProfileAvatar'
import AuthAdminContext from 'contexts/AuthenticationAdmin'

const MenuSidebar = styled(Menu)`
  & .ant-menu-item-group-title {
    font-weight: 700;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 10px;
    text-transform: uppercase;
    transition: 0.15s;
    color: rgb(77, 96, 122);
    padding: 0;
  }

  & .ant-menu-item-group-list {
    padding: 0 10px !important;
  }

  & .ant-menu-item-group-list .ant-menu-item {
    display: inline-flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    outline: 0px;
    border: 0px;
    margin: 0px 0px 4px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    color: inherit;
    height: 44px;
    width: 100%;
    border-radius: 8px;
    padding: 0px 18px !important;
    justify-content: flex-start;
    transition: 0.15s;
    &.ant-menu-item-selected {
      background-color: #2499ef0f;

      & svg {
        color: rgb(36, 153, 239);
      }

      & .ant-menu-title-content {
        color: rgb(36, 153, 239);
      }
    }

    &:hover {
      background-color: rgba(11, 14, 30, 0.04);
    }
  }

  & .ant-menu-item-group-list .ant-menu-item svg {
    font-size: 16px;
    color: rgb(77, 96, 122);
  }

  & .ant-menu-item-group-list .ant-menu-item .ant-menu-title-content {
    margin-left: 16px;
    white-space: nowrap;
    transition: 0.15s;
    font-size: 13px;
    font-weight: 600;
    line-height: 15.85px;
    color: rgb(77, 96, 122);
  }

  & .ant-menu-submenu {
    & .ant-menu-submenu-title {
      color: rgb(77, 96, 122);
      & svg {
        font-size: 16px;
        color: rgb(77, 96, 122);
      }

      & .ant-menu-title-content {
        margin-left: 16px;
        white-space: nowrap;
        transition: 0.15s;
        font-size: 13px;
        font-weight: 600;
        line-height: 15.85px;
        color: rgb(77, 96, 122);
      }
    }

    & .ant-menu-sub {
      background-color: #fff !important;
      & .ant-menu-item {import { permissions } from './../../contexts/AuthenticationAdmin/constants/index';

        & .ant-menu-title-content {
          margin-left: 16px;
          white-space: nowrap;
          transition: 0.15s;
          font-size: 13px;
          font-weight: 600;
          line-height: 15.85px;
          color: rgb(77, 96, 122);
        }

        &::after {
          opacity: 1;
          background-color: red;
          content: '.';
          width: 4px;
          height: 4px;
          margin-left: 10px;
          margin-right: 8px;
          overflow: hidden;
          border-radius: 50%;
          background: rgb(140, 163, 186);
          box-shadow: none;
          position: absolute;
          top: 50%;
          left: 35px;
          transform: translateY(-50%);
        }
      }

      & .ant-menu-item-selected {
        background-color: #2499ef0f;

        &::after {
          background-color: rgb(36, 153, 239);
        }

        & svg {
          color: rgb(36, 153, 239);
        }

        & .ant-menu-title-content {
          color: rgb(36, 153, 239);
        }
      }
    }
  }
`

const DashboardWrapper = styled(Box)`
  height: 100vh;
    position: fixed;
    width: 280px;
    transition: 0.2s;
    z-index: 2;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(77, 96, 122, 0.03) 0px 3px 3px -2px, rgba(77, 96, 122, 0.04) 0px 2px 6px 0px, rgba(77, 96, 122, 0.08) 0px 1px;
`

const BoxAvatar = styled(Box)`
      height: 70px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
`

const NavWrapper = styled(Box)`
  padding-left: 16px;
  padding-right: 16px;
  height: 100%;
`

const filterNavigationRecursive = (items: any, permissions: any) => {
  return items
      .map((item: any) => {
          if (item.children) {
              const filteredChildren = filterNavigationRecursive(item?.children, permissions);

            
              return filteredChildren?.length > 0
                  ? { ...item, children: filteredChildren }
                  : null; 
          }

       
          return !item?.permission || permissions?.includes(item.permission) ? item : null;
      })
      .filter((item: any) => item !== null); 
};

const TOP_HEADER_AREA = 70;

const DashboardSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { permission } = useContext(AuthAdminContext);

  const onClick: MenuProps['onClick'] = (event) => {
    navigate(event.key);
  }

const navigationPermission = filterNavigationRecursive(navigation, permission)

  return (
    <DashboardWrapper>
      <FlexBox style={{ alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, paddingRight: 16, paddingLeft: 35, paddingBottom: 8, height:  TOP_HEADER_AREA}}>
        {/* LOGO */}
        <FlexBox style={{alignItems: 'center'}}>
          <Link to={'/admin'} style={{ display: 'flex' }}>
            <img src="/static/logo/logo.svg" alt="logo" width={70} />
          </Link>

        </FlexBox>
      </FlexBox>

      <Scrollbar
        autoHide
        clickOnTrack={false}
        style={{
          overflowX: 'hidden',
          maxHeight: `calc(100vh - 140px)`,
        }}
      >
        <NavWrapper>
          <MenuSidebar
            onClick={onClick}
            style={{ width: 265 }}
            defaultSelectedKeys={['user']}
            mode="inline"
            items={navigationPermission}
          />
        </NavWrapper>
      </Scrollbar>
      <BoxAvatar>
        <ProfilePopover />
      </BoxAvatar>
    </DashboardWrapper>
  )
}

export default DashboardSidebar
