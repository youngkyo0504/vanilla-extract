import { browserRuntimeAdapter } from './runtimeAdapter';
import { setAdapter } from './adapter';

if (typeof window !== 'undefined') {
  setAdapter(browserRuntimeAdapter);
}

export type { StyleRule, Adapter } from './types';
export * from './api';
