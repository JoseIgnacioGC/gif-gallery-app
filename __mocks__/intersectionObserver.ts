window.IntersectionObserver = jest
  .fn()
  .mockReturnValue({
    observe: () => null,
    disconnect: () => null,
    unobserve: () => null
  })

export {}
