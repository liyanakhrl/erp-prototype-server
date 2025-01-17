import { Test, TestingModule } from '@nestjs/testing'; 
import { ItService } from './it.service';

describe('Departments\itService', () => {
  let service: ItService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItService],
    }).compile();

    service = module.get<ItService>(ItService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
