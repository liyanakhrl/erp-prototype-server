import { Test, TestingModule } from '@nestjs/testing'; 
import { ItController } from './it.controller';

describe('ItController', () => {
  let controller: ItController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItController],
    }).compile();

    controller = module.get<ItController>(ItController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
