import { Test, TestingModule } from '@nestjs/testing';
import { CombinationController } from './combination.controller';
import { CombinationService } from './combination.service';

describe('CombinationController', () => {
  let controller: CombinationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CombinationController],
      providers: [CombinationService],
    }).compile();

    controller = module.get<CombinationController>(CombinationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return an object', () => {
      expect(controller.create({n: [1,0,2,3,0,4,5,0]})).toEqual({
        "status": 200,
        "code": "200",
        "data": {
            "result": [1,0,0,2,3,0,0,4]
        },
        "message": "Success"
    });
    });
    it('should return error', () => {
        expect(controller.create({
          //empty
        })).toEqual({
            "status": 400,
            "code": "400",
            "data": null,
            "message": "n is required"
        });
    });
  })
});
