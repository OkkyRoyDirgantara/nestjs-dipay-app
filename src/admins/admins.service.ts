import {Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import {Model} from "mongoose";
import {Admin} from "./entities/admin.entity";
import {InjectModel} from "@nestjs/mongoose";
import {AdminInterface} from "./admin.interface";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AdminsService {
  constructor(
        private jwtService: JwtService,
      @InjectModel('Admin') private readonly model: Model<AdminInterface>) {
  }

  async create(createAdminDto: CreateAdminDto) {
    try {
        const user = await this.model.findOne({username: createAdminDto.username});
        if (user && user.username === createAdminDto.username) {
            throw new Error('Username already exists');
        }
        let admin = new this.model(createAdminDto);
        return admin.save();
    }catch (e) {
      return {
        "status": 400,
        "code": "400",
        "data": null,
        "message": e.message
      }
    }
  }

  async findAdmin(query) {
    try {
        const user = await this.model.findOne(query);
        if (user) {
            return {
                status: 200,
                code: "200",
                data: user,
                message: "Success"
            };
        }
        throw new Error('Username or password is incorrect');
    }catch (e){
        return {
            status: 400,
            code: "400",
            data: null,
            message: e.message
        };
    }
  }

    async login(body) {

        try {
        const user = await this.model.findOne({username: body.username});
        if (user?.password !== body.password) {
            throw new Error('Username or password is incorrect');
        }
        const payload = { sub: user._id, username: user.username };
        return {
            status: 200,
            code: "200",
            data: {
                access_token: await this.jwtService.signAsync(payload),
            },
            message: "Success"
        };
        }catch (e){
            return {
                status: 400,
                code: "400",
                data: null,
                message: e.message
            };
        }
    }

  findAll() {
    return `This action returns all admins`;
  }

    findOne(username: string) {
        return this.model.findOne({username: username});
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
