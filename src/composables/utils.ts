export const dummyLoading = (time = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}
