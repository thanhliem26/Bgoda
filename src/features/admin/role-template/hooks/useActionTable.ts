import { useRef, useState } from 'react'

export type IuseUserActionTableReturn = {
  openCreate: boolean
  openEdit: boolean
  openDelete: boolean
  openDetail: boolean
  setOpenCreate: (value: boolean) => void
  setOpenEdit: (value: boolean) => void
  setOpenDelete: (value: boolean) => void
  setOpenDetail: (value: boolean) => void
  handleOpenEdit: (id: string) => void
  handleOpenDelete: (id: string) => void
  handleOpenDetail: (id: string) => void
  rowId: React.MutableRefObject<string>
}

const useActionTable = (): IuseUserActionTableReturn => {
  const rowId = useRef('')
  const [openCreate, setOpenCreate] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)

  function handleOpenEdit(id: string) {
    rowId.current = id
    setOpenEdit(true)
  }

  function handleOpenDetail(id: string) {
    rowId.current = id
    setOpenDetail(true)
  }

  function handleOpenDelete(id: string) {
    rowId.current = id
    setOpenDelete(true)
  }

  return {
    openCreate,
    openEdit,
    openDelete,
    setOpenCreate,
    setOpenEdit,
    setOpenDelete,
    handleOpenEdit,
    handleOpenDelete,
    openDetail,
    setOpenDetail,
    handleOpenDetail,
    rowId,
  }
}

export default useActionTable
