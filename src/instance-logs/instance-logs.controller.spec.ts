import { Test, TestingModule } from '@nestjs/testing';
import { InstanceLogsController } from './instance-logs.controller';

describe('LogsController', () => {
  let controller: InstanceLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstanceLogsController],
    }).compile();

    controller = module.get<InstanceLogsController>(InstanceLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
