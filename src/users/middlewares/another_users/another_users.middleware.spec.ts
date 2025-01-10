import { AnotherUsersMiddleware } from './another_users.middleware';

describe('AnotherUsersMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherUsersMiddleware()).toBeDefined();
  });
});
