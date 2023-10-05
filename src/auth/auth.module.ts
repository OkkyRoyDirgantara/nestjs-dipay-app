import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {UsersModule} from "../users/users.module";
import {AdminsModule} from "../admins/admins.module";

@Module({
    imports:[
        forwardRef(() => AdminsModule),
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1000s' },
    })],
  controllers: [AuthController],
  providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}
