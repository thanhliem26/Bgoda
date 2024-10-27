import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'

const BankAutoComplete = (props: IAutoCompleteBaseProps) => {

    return (
        <AutoCompleteBase options={options_bank} {...props} />
    )
}

export default BankAutoComplete

const options_bank =[
    { "value": "VCB", "label": "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)" },
    { "value": "TCB", "label": "Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank)" },
    { "value": "ACB", "label": "Ngân hàng TMCP Á Châu (ACB)" },
    { "value": "BIDV", "label": "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)" },
    { "value": "VIB", "label": "Ngân hàng TMCP Quốc tế Việt Nam (VIB)" },
    { "value": "MBB", "label": "Ngân hàng TMCP Quân Đội (MB Bank)" },
    { "value": "VPB", "label": "Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)" },
    { "value": "HDB", "label": "Ngân hàng TMCP Phát triển Nhà TP.HCM (HDBank)" },
    { "value": "STB", "label": "Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)" },
    { "value": "EIB", "label": "Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam (Eximbank)" },
    { "value": "SHB", "label": "Ngân hàng TMCP Sài Gòn - Hà Nội (SHB)" },
    { "value": "LPB", "label": "Ngân hàng TMCP Bưu Điện Liên Việt (LienVietPostBank)" },
    { "value": "OCB", "label": "Ngân hàng TMCP Phương Đông (OCB)" },
    { "value": "SCB", "label": "Ngân hàng TMCP Sài Gòn (SCB)" },
    { "value": "MSB", "label": "Ngân hàng TMCP Hàng Hải Việt Nam (MSB)" },
    { "value": "ABB", "label": "Ngân hàng TMCP An Bình (ABBANK)" },
    { "value": "BAB", "label": "Ngân hàng TMCP Bắc Á (Bac A Bank)" },
    { "value": "PGB", "label": "Ngân hàng TMCP Xăng Dầu Petrolimex (PG Bank)" },
    { "value": "VAB", "label": "Ngân hàng TMCP Việt Á (VietABank)" },
    { "value": "NVB", "label": "Ngân hàng TMCP Quốc Dân (NCB)" },
    { "value": "TPB", "label": "Ngân hàng TMCP Tiên Phong (TPBank)" },
    { "value": "SGB", "label": "Ngân hàng TMCP Sài Gòn Công Thương (Saigonbank)" },
    { "value": "SEAB", "label": "Ngân hàng TMCP Đông Nam Á (SeABank)" },
    { "value": "IVB", "label": "Ngân hàng TNHH Indovina (IVB)" },
    { "value": "VietABank", "label": "Ngân hàng TMCP Việt Á (VietABank)" },
    { "value": "VietBank", "label": "Ngân hàng TMCP Việt Nam Thương Tín (VietBank)" },
    { "value": "NamABank", "label": "Ngân hàng TMCP Nam Á (Nam A Bank)" },
    { "value": "DongABank", "label": "Ngân hàng TMCP Đông Á (DongA Bank)" },
    { "value": "CIMB", "label": "Ngân hàng TNHH MTV CIMB Việt Nam (CIMB)" },
    { "value": "UOB", "label": "Ngân hàng TNHH MTV United Overseas Bank (UOB)" },
    { "value": "OCBC", "label": "Ngân hàng TNHH MTV OCBC Việt Nam (OCBC)" }
  ]
  