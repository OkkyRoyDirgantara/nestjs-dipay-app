import { Test, TestingModule } from '@nestjs/testing';
import { CombinationService } from './combination.service';

describe('CombinationService', () => {
  let service: CombinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CombinationService],
    }).compile();

    service = module.get<CombinationService>(CombinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return combination', () => {
      expect(service.create({
        n : [1, 2, 0, 3, 4, 5]
      })).toEqual({
        status : 200,
        code : "200",
        data : {
          result : [1, 2, 0, 0, 3, 4]
        },
        "message": "Success"
      });
    });
    it('should return parameter error', () => {
      expect(service.create({
        b : []
      })).toEqual({
        status : 400,
        code : "400",
        data : null,
        "message": "n is required"
      });
    });
  });

});
