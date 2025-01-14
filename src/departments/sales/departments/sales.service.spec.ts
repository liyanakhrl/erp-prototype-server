import { Test, TestingModule } from '@nestjs/testing';
import { Departments\salesService } from './departments/sales.service';

describe('Departments\salesService', () => {
  let service: Departments\salesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Departments\salesService],
    }).compile();

    service = module.get<Departments\salesService>(Departments\salesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
