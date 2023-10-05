import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ObjectId} from "mongoose";

enum JobTitle {
    manager = 'manager',
    director = 'director',
    staff = 'staff'
}
@Schema()
export class Employee {
    @Prop({ type: String, required: true})
    name: String;
    @Prop({ type: String, required: true, unique: true})
    email: String;
    @Prop({type: String, required: true, unique: true})
    phone_number: String;
    // @Prop({ type: JobTitle, enum: JobTitle, default: JobTitle.staff })
    @Prop({enum: JobTitle, default: JobTitle.staff})
    jobtitle: JobTitle;

    @Prop({ type: Object, required: true})
    company_id: ObjectId;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);