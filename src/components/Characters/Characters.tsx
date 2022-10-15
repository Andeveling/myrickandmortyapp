import { useGetCharactersQuery } from '@/redux'
import { Grid, Input, Pagination, Spacer, useInput } from '@nextui-org/react'
import { useMemo, useRef, useState } from 'react'
import { CharactersCard } from '@/components'

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data } = useGetCharactersQuery(currentPage)
  const { value: search, bindings } = useInput('')
  const searchInput = useRef(null)

  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  const filteredCharacters = useMemo(
    () =>
      data?.results.filter((char) => {
        return char.name.toLowerCase().includes(search.toLowerCase())
      }),
    [data, search, currentPage],
  )

  return (
    <Grid.Container justify='center' gap={2}>
      <Grid xs={12} justify='center'>
        <Input
          {...bindings}
          clearable
          bordered
          labelPlaceholder='Search by name'
          ref={searchInput}
          color='success'
          value={search}
          size='xl'
          css={{ mt: 30 }}
        />
      </Grid>

      {filteredCharacters?.map((character) => (
        <Grid xs={12} sm={6} md={3} key={character.id} justify='center'>
          <CharactersCard
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
            species={character.species}
            origin={character.origin}
          />
        </Grid>
      ))}
      <Grid xs={12} justify='center' css={{ mb: 10 }}>
        <Pagination
          total={data?.info.pages}
          initialPage={currentPage}
          siblings={1}
          boundaries={0}
          dotsJump={1}
          color='success'
          page={currentPage}
          size='xl'
          shadow
          onChange={(page: number) => handlePage(page)}
        />
      </Grid>
    </Grid.Container>
  )
}
