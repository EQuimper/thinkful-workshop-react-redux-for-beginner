import userReducer, { initialState } from '../user';
import { login, logout } from '../../actions/user';

describe('user: reducer', () => {
  describe('#login()', () => {
    it('should log a user', () => {
      expect(
        userReducer(
          initialState,
          login({
            email: 'quimperemanuel@gmail.com',
            password: '123',
          })
        )
      ).toMatchSnapshot();
    });
  });
  describe('#logout()', () => {
    it('should logout a user', () => {
      expect(
        userReducer(
          initialState,
          logout()
        )
      ).toMatchSnapshot();
    });
  });
});
