import { Credential } from './credential';
import { User } from './user';
import { Role } from './role';

export interface Account {
  credential: Credential;
  user: User;
  roles: Array<string | Role>;
}
