import { Test, TestingModule } from '@nestjs/testing';
import { Departments\hrController } from './departments/hr.controller';

describe('Departments\hrController', () => {
  let controller: Departments\hrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Departments\hrController],
    }).compile();

    controller = module.get<Departments\hrController>(Departments\hrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
