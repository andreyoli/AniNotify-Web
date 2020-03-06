import React from 'react'

import SearchItem from '../SearchItem'

import { Ul } from './styles'

export default function SearchResult({ name, searchResults }) {
  function filterAnimes(anime, name) {
    if (anime.title.english) {
      return (
        anime.title.romaji.toLowerCase().includes(name.toLowerCase()) ||
        anime.title.english.toLowerCase().includes(name.toLowerCase())
      )
    } else {
      return anime.title.romaji.toLowerCase().includes(name.toLowerCase())
    }
  }

  const loadAnimes = list => {
    return list
      .filter(anime => {
        return filterAnimes(anime, name)
      })
      .map(anime => (
        <SearchItem
          key={anime.id}
          img={anime.coverImage.large}
          coverColor={anime.coverImage.color}
          title={anime.title.romaji}
          desc={anime.description}
          nextEp={
            anime.nextAiringEpisode ? anime.nextAiringEpisode.airingAt : null
          }
          score={anime.averageScore}
        />
      ))
  }

  return (
    <>
      <Ul>{loadAnimes(searchResults)}</Ul>
    </>
  )
}
