import { Tag, TagProps } from 'antd'

const AppTag = (props: TagProps) => {
    const { children, ...inputProps } = props
    return <Tag color="blue" {...inputProps}>{children}</Tag>
}

export default AppTag