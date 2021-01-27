import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

import { Post } from './post';
import { Item } from './item';

const schemas = validationMetadatasToSchemas()
console.log(JSON.stringify(schemas))
