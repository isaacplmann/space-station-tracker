import { formatFiles, generateFiles, Tree, updateJson } from '@nx/devkit';
import * as path from 'path';
import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(tree: Tree, options: LibraryGeneratorSchema) {
    const projectRoot = `${options.name}`;
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
    updateJson(tree, 'package.json', (json: any) => {
        json.workspaces.push(options.name);
        return json;
    });
    await formatFiles(tree);
}

export default libraryGenerator;
