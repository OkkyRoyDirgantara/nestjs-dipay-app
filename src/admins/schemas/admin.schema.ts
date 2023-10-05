import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument, ObjectId} from "mongoose";


@Schema()
export class Admin {
   @Prop({ type: Object, unique: true })
    username: String;

    @Prop({ type: String, required: true, maxlength: 30 })
    password: String;
}


export const AdminSchema = SchemaFactory.createForClass(Admin);
