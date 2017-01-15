import { Privilege } from './privilege';

export interface Role {
  id: string;
  description: string;
  privileges: Array<string | Privilege>;
}
