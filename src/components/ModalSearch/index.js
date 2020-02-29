import React, { useState, useEffect } from 'react'

import { Results, ModalSearch, CloseModal } from './styles'
import { Input } from '../Form'
import SearchResult from '../SearchResult'
import Loading from '../Loading'
import listAnimes from '../../utils/listAnimes'

export default ({ isOpen, onRequestClose }) => {
  const [searchResults, setSearchResults] = useState([])
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setName(e.target.value)
  }

  useEffect(() => {
    setLoading(true)
    listAnimes(name).then(res => {
      setSearchResults(res)
      setLoading(false)
    })
  }, [name])

  return (
    <ModalSearch
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className={{
        base: 'modal-base',
        afterOpen: 'modal-base_after-open',
        beforeClose: 'modal-base_before-close'
      }}
      overlayClassName={{
        base: 'overlay-base',
        afterOpen: 'overlay-base_after-open',
        beforeClose: 'overlay-base_before-close'
      }}
      closeTimeoutMS={2000}
    >
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Find your favorite anime"
        value={name}
        onChange={handleChange}
      />
      <CloseModal onClick={onRequestClose} />
      <Results>
        <Loading loading={loading} />
        <SearchResult name={name} searchResults={searchResults} />
      </Results>
    </ModalSearch>
  )
}
