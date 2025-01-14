import { Test, TestingModule } from '@nestjs/testing';
import { Departments\operationsController } from './departments/operations.controller';

describe('Departments\operationsController', () => {
  let controller: Departments\operationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Departments\operationsController],
    }).compile();

    controller = module.get<Departments\operationsController>(Departments\operationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
