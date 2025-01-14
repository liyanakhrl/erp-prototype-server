import { Test, TestingModule } from '@nestjs/testing';
import { Departments\itService } from './departments/it.service';

describe('Departments\itService', () => {
  let service: Departments\itService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Departments\itService],
    }).compile();

    service = module.get<Departments\itService>(Departments\itService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
