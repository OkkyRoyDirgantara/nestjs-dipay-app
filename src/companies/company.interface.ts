export interface CompanyInterface extends Document {
    readonly id: Object;
    readonly company_name: String;
    readonly telephone_number: String;
    readonly is_active: Boolean;
    readonly address: String;
}