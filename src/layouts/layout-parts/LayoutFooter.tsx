import { Box, FlexBox } from 'shared/styles'
import styled from 'styled-components'
import { Tiny } from 'shared/styles/Typography';
import useGetListBusinessPartner from 'layouts/hooks/useGetAllBusinessPartner';


const Footer = styled.footer`
  width: 100%;
  padding-top: 48px;
    padding-bottom: 12px;
    text-align: center;
    background-color: rgb(42, 42, 46);
    color: rgb(215, 215, 219);
`

const TinyText = styled(Tiny)`
      font-size: 14px;
    line-height: 14px;
    font-weight: 300;
    margin: 8px;
`

const LayoutFooter = () => {
  const { optionBusinessPartner } = useGetListBusinessPartner();
 
  return (
    <Footer>
      <TinyText>Mọi nội dung tại đây © 2005 – 2024 Công ty TNHH Tư nhân Bgoda. Bảo Lưu Mọi Quyền.</TinyText>
      <TinyText>Bgoda.com là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.</TinyText>
      <FlexBox style={{ margin: '35px auto 50px', justifyContent: 'space-around', gap: '20px' }}>
        <Box>
          <img style={{width: '100px'}} src='/static/logo/logo.svg' />
        </Box>
        {optionBusinessPartner.map((item) => {
          return <Box key={item?.id}>
          <img style={{width: '144px', height: '48px', objectFit: 'cover'}} src={item?.logo} />
        </Box>
        })}
      </FlexBox>
    </Footer>
  )
}

export default LayoutFooter
