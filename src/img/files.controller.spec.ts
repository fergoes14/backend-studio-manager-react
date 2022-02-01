/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { FilesController } from './files.controller';

describe('FilesController', () => {
    let filesController: FilesController;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        filesController = moduleRef.get<FilesController>(FilesController);
    });

    it('should be defined', () => {
        expect(filesController).toBeDefined();
    });
});
