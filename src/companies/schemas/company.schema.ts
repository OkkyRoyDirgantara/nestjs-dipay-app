import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Company {
    @Prop({ type: String, required: true, unique: true, maxlength: 50, minlength: 3})
    company_name: string;

    @Prop({ type: String, maxlength: 16, minlength: 8 })
    telephone_number: string;

    @Prop({ type: Boolean, required: true, default: false })
    is_active: boolean;

    @Prop({ type: String, maxlength: 50, minlength: 10 })
    address: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);