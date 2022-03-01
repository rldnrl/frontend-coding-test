import isPrime from '../src/01'

describe('isPrime', () => {
  it('should be true', () => {
    expect(isPrime(2)).toBeTruthy()
    expect(isPrime(3)).toBeTruthy()
    expect(isPrime(5)).toBeTruthy()
    expect(isPrime(13)).toBeTruthy()
  })

  it('should be false', () => {
    expect(isPrime(0)).toBeFalsy()
    expect(isPrime(1)).toBeFalsy()
    expect(isPrime(4)).toBeFalsy()
    expect(isPrime(100)).toBeFalsy()
  })
})
