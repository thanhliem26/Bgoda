import { Spin } from 'antd'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Box } from 'shared/styles';

const LoadingSpinner: React.FC = () => {
  return (
    <Box>
         <Spin fullscreen={true} indicator={<LoadingOutlined  style={{ fontSize: 48}} spin />} />
    </Box>
  )
}

export default LoadingSpinner
