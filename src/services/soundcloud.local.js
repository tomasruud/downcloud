export const authenticate = async () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('some access token')
    }, 1000)
  )

export const getTracks = async () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve([
        {
          title: 'Funk Blaster',
          download_url:
            'https://github.com/sindresorhus/multi-download/raw/master/fixture/rainbow.jpg.zip'
        },
        {
          title: 'Lost in Thought',
          download_url:
            'https://github.com/sindresorhus/multi-download/raw/master/fixture/unicorn.jpg.zip'
        },
        {
          title: '7th Dimension',
          url:
            'https://github.com/sindresorhus/multi-download/raw/master/fixture/unicorn2.jpg.zip'
        }
      ])
    }, 1000)
  )
