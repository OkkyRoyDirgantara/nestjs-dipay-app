import {Body, Injectable, ParseArrayPipe, Req} from '@nestjs/common';
import { CreateCombinationDto } from './dto/create-combination.dto';
import { UpdateCombinationDto } from './dto/update-combination.dto';
import {raw, request} from "express";
import {validate} from "class-validator";

@Injectable()
export class CombinationService {
  create(@Body(new ParseArrayPipe({ items: Number, separator: ',' })) data: any) {
      try {
          if (!data.n) {
                throw new Error('n is required');
          }
          let n = data.n;
          let result = [];
          let count = 0;
          for (let i = 0; i < n.length; i++) {
              if (n.length == result.length) {
                  break;
              }
              if (n[i] === 0) {
                  result.push(0);
                  result.push(0);
                  count++;
              } else {
                  result.push(n[i]);
              }
          }
          return {
              "status": 200,
              "code": "200",
              "data": {
                  "result": result
              },
              "message": "Success"
          }
      }catch (e) {
          return {
              "status": 400,
              "code": "400",
              "data": null,
              "message": e.message
          }
      }
  }

  findAll() {
    return `This action returns all combination`;
  }

  findOne(id: number) {
    return `This action returns a #${id} combination`;
  }

  update(id: number, updateCombinationDto: UpdateCombinationDto) {
    return `This action updates a #${id} combination`;
  }

  remove(id: number) {
    return `This action removes a #${id} combination`;
  }
}
