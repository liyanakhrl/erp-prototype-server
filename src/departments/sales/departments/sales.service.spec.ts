import { Test, TestingModule } from '@nestjs/testing'; 
import { SalesServices } from './sales.service';

describe('SalesService', () => {
  let service: SalesServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesServices],
    }).compile();

    service = module.get<SalesServices>(SalesServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
