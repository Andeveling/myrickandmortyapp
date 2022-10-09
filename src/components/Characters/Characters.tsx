import { CharacterI } from '@/types'
import { Grid, Input, Spacer, Text, useInput } from '@nextui-org/react'
import { useEffect, useMemo, useRef, useState } from 'react'

export const Characters = () => {
  const [characters, setCharacters] = useState<CharacterI[]>([])
  const { value: search, bindings } = useInput('')
  const searchInput = useRef(null)

  const filteredCharacters = useMemo(
    () =>
      characters.filter((char) => {
        return char.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search],
  )

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .then((chars) => console.log(chars))
  }, [])

  return (
    <Grid.Container justify='center'>
      <Spacer y={1} />
      <Grid xs={12}>
        <Input
          {...bindings}
          clearable
          bordered
          labelPlaceholder='Search'
          ref={searchInput}
          color='warning'
          value={search}
        />
      </Grid>
      {filteredCharacters?.map((char) => (
        <Grid xs={12} sm={6} key={char.id}>
          <Text h4>{char.name}</Text>
        </Grid>
      ))}
    </Grid.Container>
  )
}
