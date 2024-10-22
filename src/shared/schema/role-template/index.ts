type TypePermission = "quản lí tài khoản" | "quản lí đặt phòng" | "quản lí quyền" | "quản lí giảm giá" | "kiểu ảnh" | "quản lí giao dịch" | "phản hồi, đánh giá" | "quản lí phòng" | "quản lí dịch vụ" | "quản lí chi nhánh" | "quản lí thông tin cá nhân"

export interface RoleTemplate {
    id: string
    name: string
    permission: Array<TypePermission>
    createdDate: string
    updatedDate: string
}

export type CreateRoleTemplateArguments = {
    name: string
    permission: string[]
}

export type UpdateRoleTemplateArguments = {
    name: string
    permission: string[]
}
