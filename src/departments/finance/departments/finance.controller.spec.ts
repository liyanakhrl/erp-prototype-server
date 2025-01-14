import { Test, TestingModule } from '@nestjs/testing';
import { Departments\financeController } from './departments/finance.controller';

describe('Departments\financeController', () => {
  let controller: Departments\financeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Departments\financeController],
    }).compile();

    controller = module.get<Departments\financeController>(Departments\financeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
