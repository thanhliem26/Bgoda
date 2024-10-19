import { InputProps } from 'antd'
import React, { CSSProperties } from 'react'
import InputBase from 'shared/components/input'
import { SearchOutlined } from '@ant-design/icons'

interface SearchInput extends InputProps {
    onEnter?: (value: string) => void
    onSearch?: () => void
    icon_style?: CSSProperties
}
const SearchInput = ({
    onEnter,
    onSearch,
    icon_style,
    ...props
}: SearchInput) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code !== 'Enter') return
        if (onEnter) onEnter(e.currentTarget.value)
    }

    return (
        <InputBase
            onKeyDown={handleKeyDown}
            suffix={
                <SearchOutlined
                    onClick={onSearch}
                    style={{
                        fontSize: 16,
                        color: 'text.disabled',
                        ...icon_style,
                        cursor: 'pointer',
                    }}
                />
            }
            {...props}
        />
    )
}

export default SearchInput
