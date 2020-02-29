export const convertDate = timestamp => {
  const date = new Date(timestamp * 1000).toLocaleDateString()
  const hour = new Date(timestamp * 1000).toLocaleTimeString()
  const now = Date.now()
  const nowDate = new Date(now).toLocaleDateString()

  console.log(now)

  if (date === nowDate) {
    return `release today at ${hour}`
  } else {
    return `Lança dia: ${date} - ${hour}`
  }
}
