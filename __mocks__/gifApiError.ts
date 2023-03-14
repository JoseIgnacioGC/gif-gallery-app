jest.mock('../frontend/services/gifs/gifApi', () => {
  const fakeResponse = jest
    .fn()
    .mockReturnValue({ meta: { mgs: null }, data: null })

  return {
    giphy: {
      trending: fakeResponse,
      id: fakeResponse,
      search: fakeResponse
    }
  }
})

export {}
