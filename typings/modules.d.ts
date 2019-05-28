// typings/modules.d.ts
declare module 'MyTypes';

declare interface NodeModule {
  hot: {
    accept(path?: string, fn: () => void, callback?: () => void): void;
  };
}