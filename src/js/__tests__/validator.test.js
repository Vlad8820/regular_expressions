import Validator from '../validator';

describe('Validator class', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('should allow valid usernames', () => {
    const validUsernames = [
      'user123',
      'user_name',
      'user-name',
      'User123',
      'user1name',
    ];

    validUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(true);
    });
  });

  test('should not allow usernames with invalid characters', () => {
    const invalidUsernames = [
      'user@name',
      'user!name',
      'user#name',
      'user$name',
      'user%name',
      'user^name',
      'user&name',
      'user*name',
    ];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  test('should not allow usernames with more than three consecutive digits', () => {
    const invalidUsernames = [
      'user1234',
      '1234user',
      'user1_1234',
      'user-1234',
    ];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  test('should not allow usernames starting or ending with digits or special characters', () => {
    const invalidUsernames = [
      '1username',
      '-username',
      '_username',
      'username1',
      'username-',
      'username_',
    ];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });
});
