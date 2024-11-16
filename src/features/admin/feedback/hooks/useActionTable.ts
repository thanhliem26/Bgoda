import { useRef, useState } from 'react'

export type IuseUserActionTableReturn = {
  openUnApprove: boolean,
  setOpenUnApprove: (value: boolean) => void,
  handleOpenUnApprove: (id: string) => void,
  openEdit: boolean
  openDelete: boolean
  openDetail: boolean
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
  const [openUnApprove, setOpenUnApprove] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)

  function handleOpenEdit(id: string) {
    rowId.current = id
    setOpenEdit(true)
  }

  function handleOpenUnApprove(id: string) {
    rowId.current = id
    setOpenUnApprove(true)
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
    openUnApprove,
    setOpenUnApprove,
    handleOpenUnApprove,
    openEdit,
    openDelete,
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
