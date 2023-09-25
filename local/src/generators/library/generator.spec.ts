import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readJson, readProjectConfiguration } from '@nx/devkit';

import { libraryGenerator } from './generator';
import { LibraryGeneratorSchema } from './schema';

describe('library generator', () => {
    let tree: Tree;
    const options: LibraryGeneratorSchema = { name: 'test' };

    beforeEach(() => {
        tree = createTreeWithEmptyWorkspace();
    });

    it('should run successfully', async () => {
        tree.write('package.json', '{ "workspaces": [] }');
        await libraryGenerator(tree, options);
        const workspaces = readJson(tree, 'package.json').workspaces;
        expect(workspaces).toContain('test');
    });
});
