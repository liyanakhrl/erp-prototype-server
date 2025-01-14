import { Test, TestingModule } from '@nestjs/testing';
import { Departments\financeService } from './departments/finance.service';

describe('Departments\financeService', () => {
  let service: Departments\financeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Departments\financeService],
    }).compile();

    service = module.get<Departments\financeService>(Departments\financeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
