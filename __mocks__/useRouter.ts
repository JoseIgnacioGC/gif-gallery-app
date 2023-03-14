jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: null,
    query: { searchQuery: '' }
  })
}))

export {}
