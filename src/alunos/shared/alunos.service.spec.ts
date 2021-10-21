import { Test, TestingModule } from '@nestjs/testing';
import { AlunosService } from './alunos.service';

describe('AlunosService', () => {
  let provider: AlunosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunosService],
    }).compile();

    provider = module.get<AlunosService>(AlunosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
