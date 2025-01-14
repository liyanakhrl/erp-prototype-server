import { Test, TestingModule } from '@nestjs/testing';
import { Departments\hrService } from './departments/hr.service';

describe('Departments\hrService', () => {
  let service: Departments\hrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Departments\hrService],
    }).compile();

    service = module.get<Departments\hrService>(Departments\hrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
