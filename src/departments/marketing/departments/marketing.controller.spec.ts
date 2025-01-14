import { Test, TestingModule } from '@nestjs/testing';
import { Departments\marketingController } from './departments/marketing.controller';

describe('Departments\marketingController', () => {
  let controller: Departments\marketingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Departments\marketingController],
    }).compile();

    controller = module.get<Departments\marketingController>(Departments\marketingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
