jest.mock('next/router', () => ({
  useRouter: jest
    .fn()
    .mockReturnValue({
      asPath: null
    })
}))

export {}
