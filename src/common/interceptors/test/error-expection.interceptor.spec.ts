import { ErrorExpectionInterceptor } from './error-expection.interceptor';

describe('ErrorExpectionInterceptor', () => {
  it('should be defined', () => {
    expect(new ErrorExpectionInterceptor()).toBeDefined();
  });
});
