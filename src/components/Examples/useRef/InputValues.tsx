import { useRef, useState } from 'react'

export const InputValues = () => {
  const [searchVal, setSearchVal] = useState<string>('')
  const search = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    if (search.current) setSearchVal(search.current.value)
  }

  return (
    <div>
      <p>{searchVal}</p>
      <hr />
      <input type='text' ref={search} onChange={handleChange}></input>
    </div>
  )
}
