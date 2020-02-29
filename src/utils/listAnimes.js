import api from '../services/api'

function listAnimes(name) {
  const query = `
  query ($page: Int, $perPage: Int, $name: String, $type: MediaType, $isAdult: Boolean) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (search: $name, type: $type, isAdult: $isAdult, sort: TRENDING_DESC) {
        id
        title {
          romaji
          english
        }
        seasonYear
        description
        status
        nextAiringEpisode {
          id
          airingAt
        }
        startDate {
          year
          month
          day
        }
        bannerImage
        coverImage {
          medium
        }
      }
    }
  }`
  const variables = {
    page: 1,
    perPage: 50,
    name,
    type: 'ANIME',
    isAdult: false
  }
  return api
    .post('/', {
      query,
      variables
    })
    .then(res => {
      const data = res.data.data.Page
      return data.media
    })
}
export default listAnimes
