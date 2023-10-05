import {forwardRef, Module} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import {DatabaseModule} from "../../config/db/database.module";
import {MongooseModule} from "@nestjs/mongoose";
import {AdminSchema} from "./schemas/admin.schema";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {AuthModule} from "../auth/auth.module";
import {AuthService} from "../auth/auth.service";

@Module({
  imports: [
      forwardRef(() => AuthModule),
      MongooseModule.forFeature([
      { name: 'Admin', schema: AdminSchema},]),
  ],
  controllers: [AdminsController],
  providers: [AdminsService],
    exports: [AdminsService]
})
export class AdminsModule {}
