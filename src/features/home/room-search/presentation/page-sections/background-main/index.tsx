import { useContext, useEffect, useMemo, useState } from 'react'
import AppTextField from 'shared/components/form/AppTextField'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import {
    CalendarOutlined,
    DownOutlined,
    SearchOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons'
import {
    DatePicker,
    Divider,
    Dropdown,
    MenuProps,
} from 'antd'
import MainWrapperContext from 'features/home/room-search/context'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/vi'
import { capitalizeFirstLetter } from 'shared/utils/convert-string'
import {
    BoxWrapperMain,
    SearchField,
    SectionBackground,
} from 'features/home/room-search/shared/style'
import { useLocation } from 'react-router-dom'
import debounce from 'shared/utils/debounce'

const { RangePicker } = DatePicker

dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('vi')

const BackgroundMain = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const handleButtonClick = () => {
        setOpen(true)
    }

    const { state, action, state_application } = useContext(MainWrapperContext)
    const { rangeDate, roomTypeSelected, optionListRoom, optionListSuggest } = state
    // const { provinceData } = optionListRoom;

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

    useEffect(() => {
        setSearchField(location?.state?.search)
    }, [location?.state])

    return (
        <SectionBackground>
            <Box className="background-image-wrapper">
                <img src="/static/background/bg-agoda-homepage.png" />
            </Box>
            <Box className="background_overlay"></Box>
            <Box className="background_filter">
                <FlexBox className="background-action-filter">
                    <Box className="filter-search">
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
                                    style={{ height: '66px' }}
                                    value={searchField}
                                    onChange={(event) => {
                                        setSearchField(event?.target?.value);
                                        handleSearch(event?.target?.value)
                                    }}
                                />
                            </SearchField>
                        </Dropdown>

                    </Box>
                    <Box className="filter-date-range">
                        <FlexBox gap={'16px'}>
                            <BoxWrapperMain
                                style={{ display: 'flex', alignItems: 'center' }}
                                onClick={handleButtonClick}
                            >
                                <RangePicker
                                    open={open}
                                    onOpenChange={(status) => setOpen(status)}
                                    style={{
                                        width: 0,
                                        overflow: 'hidden',
                                        padding: 0,
                                        border: 'none',
                                    }}
                                    value={(rangeDate?.fromDate || rangeDate?.toDate) ? [dayjs(rangeDate?.fromDate), dayjs(rangeDate?.toDate)] : [dayjs(), dayjs().add(1, 'month')]}
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
                                                whiteSpace: 'nowrap',
                                                width: '180px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {rangeDate?.fromDate ? dayjs(rangeDate?.fromDate).format(
                                                'DD [tháng] MM [năm] YYYY'
                                            ) : "Nhận phòng"}
                                        </Tiny>
                                        <Span style={{ color: '#999', fontSize: '14px' }}>
                                            {rangeDate?.fromDate && capitalizeFirstLetter(
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
                                                whiteSpace: 'nowrap',
                                                width: '180px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {rangeDate?.toDate ? dayjs(rangeDate?.toDate).format(
                                                'DD [tháng] MM [năm] YYYY'
                                            ) : "Trả phòng"}
                                        </Tiny>
                                        <Span style={{ color: '#999', fontSize: '14px' }}>
                                            {rangeDate?.toDate && capitalizeFirstLetter(
                                                dayjs(rangeDate?.toDate).format('dddd')
                                            )}
                                        </Span>
                                    </FlexBox>
                                </FlexBox>
                            </BoxWrapperMain>
                        </FlexBox>
                    </Box>
                    <Box className="filter-room-type">
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
                                    gap: '10px',
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
                    </Box>
                </FlexBox>
            </Box>
        </SectionBackground>
    )
}

export default BackgroundMain
