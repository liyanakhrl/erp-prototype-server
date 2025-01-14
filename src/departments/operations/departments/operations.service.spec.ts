import { Test, TestingModule } from '@nestjs/testing';
import { Departments\operationsService } from './departments/operations.service';

describe('Departments\operationsService', () => {
  let service: Departments\operationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Departments\operationsService],
    }).compile();

    service = module.get<Departments\operationsService>(Departments\operationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
