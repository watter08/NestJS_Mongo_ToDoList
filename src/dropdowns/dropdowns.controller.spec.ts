import { Test, TestingModule } from '@nestjs/testing';
import { DropdownsController } from './dropdowns.controller';

describe('DropdownsController', () => {
  let controller: DropdownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropdownsController],
    }).compile();

    controller = module.get<DropdownsController>(DropdownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
