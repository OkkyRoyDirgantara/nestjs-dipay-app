import {Controller, Get, Post, Body, Patch, Param, Delete, Inject, forwardRef} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import {AuthService} from "../auth/auth.service";


@Controller('api/admins')
export class AdminsController {
  constructor(
      private readonly adminsService: AdminsService,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
  ) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Post('login')
  login(@Body() body: Record<string, any>) {
    return this.adminsService.login(body);
  }
}
