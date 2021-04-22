import { Test, TestingModule } from '@nestjs/testing';
import { InstanceLogsService } from './instance-logs.service';

describe('LogsService', () => {
  let service: InstanceLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstanceLogsService],
    }).compile();

    service = module.get<InstanceLogsService>(InstanceLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
