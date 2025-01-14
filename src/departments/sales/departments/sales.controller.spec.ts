import { Test, TestingModule } from '@nestjs/testing';
import { Departments\salesController } from './departments/sales.controller';

describe('Departments\salesController', () => {
  let controller: Departments\salesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Departments\salesController],
    }).compile();

    controller = module.get<Departments\salesController>(Departments\salesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
