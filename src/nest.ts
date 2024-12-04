import { Uri } from "vscode";

export interface NestFile {
  type: string;
  name: string;
  fullName: string;
  uri: Uri;
  associatedArray: string | undefined;
}

export const NestImports = {
  filter: `import { APP_FILTER } from '@nestjs/core';`,
};

export const NestProviders = {
  filter: `{
        provide: APP_FILTER,
        useClass: AllExceptionsFilter,
      },`,
};
