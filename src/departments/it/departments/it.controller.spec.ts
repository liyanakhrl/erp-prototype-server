import { Test, TestingModule } from '@nestjs/testing';
import { Departments\itController } from './departments/it.controller';

describe('Departments\itController', () => {
  let controller: Departments\itController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Departments\itController],
    }).compile();

    controller = module.get<Departments\itController>(Departments\itController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
