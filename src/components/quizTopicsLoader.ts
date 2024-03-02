export const questionsTopicsLoader = async () => {
  const res = await fetch('https://opentdb.com/api_category.php')

  return res.json()
}
