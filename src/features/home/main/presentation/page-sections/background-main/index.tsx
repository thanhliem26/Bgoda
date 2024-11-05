import { useContext, useMemo, useState } from 'react'
import AppTextField from 'shared/components/form/AppTextField'
import { Box, FlexBox } from 'shared/styles'
import { H1, H6, Span, Tiny } from 'shared/styles/Typography'
import styled from 'styled-components'
import {
    CalendarOutlined,
    DownOutlined,
    HomeOutlined,
    SearchOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons'
import {
    DatePicker,
    Divider,
    Dropdown,
    MenuProps,
} from 'antd'
import AppButton from 'shared/components/AppButton'
import MainWrapperContext from 'features/home/main/context'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/vi'
import { capitalizeFirstLetter } from 'shared/utils/convert-string'
import {
    BoxWrapperMain,
    HotelWrapper,
    SearchField,
    SectionBackground,
} from 'features/home/main/shared/style'
import debounce from 'shared/utils/debounce'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const { RangePicker } = DatePicker

dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('vi')

const BackgroundMain = () => {
    const [open, setOpen] = useState(false)
    const handleButtonClick = () => {
        setOpen(true)
    }

    const { state, action, state_application } = useContext(MainWrapperContext)
    const { rangeDate, roomTypeSelected, optionListSuggest, search } = state

    const { optionRoomTypes } = state_application
    const { onChangeRangeDate, onChangeSelectRoomType, onChangeSearch } = action

    const roomTypes: MenuProps['items'] = useMemo(() => {
        return optionRoomTypes.map((item) => {
            return {
                key: item?.value,
                label: item?.label,
            }
        })
    }, [optionRoomTypes])
    const navigate = useNavigate();

    const [searchField, setSearchField] = useState('');

    const suggestList: MenuProps['items'] = useMemo(() => {
        return optionListSuggest.map((item) => {
            return {
                key: item?.name,
                label: (
                    <FlexBox style={{ alignItems: 'center', gap: '10px' }}>
                        <Box style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '12px',
                                    objectFit: 'cover',
                                }}
                                src={item?.image}
                            />
                        </Box>
                        <FlexBox style={{ flexDirection: 'column' }}>
                            <Tiny style={{ fontSize: '14px', fontWeight: 600 }}>{item?.name}</Tiny>
                            <Span>{item?.room_number} room(s)</Span>
                        </FlexBox>
                    </FlexBox>
                ),
            }
        })
    }, [optionListSuggest])

    const handleSearch = debounce(onChangeSearch, 500)

    const handleFilter = () => {
        if(!searchField || !rangeDate.fromDate || !rangeDate?.toDate || !roomTypeSelected) {
            toast.error('Vui lòng nhập đủ thông tin!')
        } else {
            console.log("hehe")
            navigate('/room-search', {state: {
                search: state?.search,
                rangeDate: state?.rangeDate,
                roomTypeSelected: state?.roomTypeSelected
            }})
        }
    }

    return (
        <SectionBackground>
            <Box className="background-image-wrapper"></Box>
            <Box className="background-title">
                <Box className="TileContainer__wrapper">
                    <Box className="WelcomeMessage">
                        <H1>Rong chơi bốn phương, giá vẫn "yêu thương"</H1>
                    </Box>
                </Box>
            </Box>
            <FlexBox className="background-filter">
                <Box className="inner-background">
                    <FlexBox
                        className="inner-background-modal"
                        style={{ flexDirection: 'column', gap: '20px' }}
                    >
                        <HotelWrapper>
                            <Box className="item_menu">
                                <FlexBox
                                    style={{
                                        padding: '15px 0 0',
                                        gap: '2px',
                                        borderBottom: '4px solid rgb(32, 103, 218)',
                                    }}
                                >
                                    <HomeOutlined style={{ color: 'rgb(32, 103, 218)' }} />
                                    <H6
                                        style={{
                                            color: 'rgb(83, 146, 249',
                                            fontSize: '16px',
                                            fontWeight: 400,
                                        }}
                                    >
                                        Khách sạn
                                    </H6>
                                </FlexBox>
                            </Box>
                        </HotelWrapper>
                        <Dropdown
                            menu={{
                                items: suggestList,
                                onClick: (data) => {
                                    setSearchField(data?.key);
                                    onChangeSearch(data?.key);
                                },
                            }}
                            placement="bottomLeft"
                        >
                            <SearchField>
                                <SearchOutlined />
                                <AppTextField
                                    style={{ height: '50px' }}
                                    value={searchField}
                                    onChange={(event) => {
                                        setSearchField(event?.target?.value);
                                        handleSearch(event?.target?.value)
                                    }}
                                />
                            </SearchField>
                        </Dropdown>

                        <FlexBox gap={'16px'}>
                            <BoxWrapperMain
                                style={{ display: 'flex', alignItems: 'center' }}
                                onClick={handleButtonClick}
                            >
                                <RangePicker
                                    open={open}
                                    onOpenChange={(status) => setOpen(status)}
                                    style={{ width: 0, overflow: 'hidden', padding: 0 }}
                                    value={[dayjs(rangeDate?.fromDate), dayjs(rangeDate?.toDate)]}
                                    onChange={(dateRange) => {
                                        const fromDate = dateRange?.[0]?.toDate() ?? new Date()
                                        const toDate = dateRange?.[1]?.toDate() ?? new Date()

                                        onChangeRangeDate(fromDate, toDate)
                                    }}
                                />
                                <FlexBox style={{ width: '100%', gap: '16px' }}>
                                    <CalendarOutlined />
                                    <FlexBox style={{ flexDirection: 'column' }}>
                                        <Tiny
                                            style={{
                                                color: '2a2a2e',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {dayjs(rangeDate?.fromDate).format(
                                                'DD [tháng] MM [năm] YYYY'
                                            )}
                                        </Tiny>
                                        <Span style={{ color: '#999', fontSize: '14px' }}>
                                            {capitalizeFirstLetter(
                                                dayjs(rangeDate?.fromDate).format('dddd')
                                            )}
                                        </Span>
                                    </FlexBox>
                                </FlexBox>
                                <Divider
                                    type="vertical"
                                    style={{ background: '#dcd1d1', height: '70%' }}
                                />
                                <FlexBox style={{ width: '100%', gap: '16px' }}>
                                    <CalendarOutlined />
                                    <FlexBox style={{ flexDirection: 'column' }}>
                                        <Tiny
                                            style={{
                                                color: '2a2a2e',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {dayjs(rangeDate?.toDate).format(
                                                'DD [tháng] MM [năm] YYYY'
                                            )}
                                        </Tiny>
                                        <Span style={{ color: '#999', fontSize: '14px' }}>
                                            {capitalizeFirstLetter(
                                                dayjs(rangeDate?.toDate).format('dddd')
                                            )}
                                        </Span>
                                    </FlexBox>
                                </FlexBox>
                            </BoxWrapperMain>
                            <Dropdown
                                menu={{
                                    items: roomTypes,
                                    onClick: (data) => {
                                        onChangeSelectRoomType(data?.key)
                                    },
                                }}
                                placement="bottomLeft"
                            >
                                <BoxWrapperMain
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <FlexBox style={{ gap: '16px' }}>
                                        <UsergroupAddOutlined />
                                        <Tiny
                                            style={{
                                                color: '2a2a2e',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {roomTypeSelected?.label}
                                        </Tiny>
                                    </FlexBox>
                                    <FlexBox>
                                        <DownOutlined />
                                    </FlexBox>
                                </BoxWrapperMain>
                            </Dropdown>
                        </FlexBox>

                        <FlexBox
                            style={{
                                position: 'absolute',
                                bottom: '-35px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <AppButton style={{ height: '64px', padding: '10px 100px' }} onClick={handleFilter}>
                                Tìm kiếm khách sạn phù hợp
                            </AppButton>
                        </FlexBox>
                    </FlexBox>
                </Box>
            </FlexBox>
        </SectionBackground>
    )
}

export default BackgroundMain

const MenuComponent = styled(FlexBox)`
  flex-direction: column;
  width: 200px;
  gap: 2px;

  & .menu_item {
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`

const RenderRoomType = () => {
    return (
        <MenuComponent
            style={{ flexDirection: 'column', width: '200px', gap: '2px' }}
        >
            <Box className="menu_item">Phòng đơn</Box>
            <Box className="menu_item">Phòng đôi</Box>
            <Box className="menu_item">Phòng gia đình</Box>
        </MenuComponent>
    )
}
