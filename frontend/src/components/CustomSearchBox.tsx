import { Input } from "@/components/ui/input"
import { useState, useRef } from "react"
import { useInstantSearch, useSearchBox, UseSearchBoxProps } from "react-instantsearch"
import { Button } from "./ui/button"
import { SearchIcon, X } from "lucide-react"

const SearchBox = (props: UseSearchBoxProps) => {
  const { query, refine, clear } = useSearchBox(props)
  const { status } = useInstantSearch()
  const [inputValue, setInputValue] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)
  const isSearchStalled = status === "stalled"

  return (
    <div className='w-full max-w-sm'>
      <form
        action=''
        role='search'
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()
          if (inputRef.current) {
            inputRef.current.blur()
          }
          refine(inputValue)
        }}
        onReset={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setInputValue("")
          clear()
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }}
        className='flex justify-center gap-2'>
        <Input
          placeholder='Search...'
          value={inputValue}
          ref={inputRef}
          onChange={(e) => {
            setInputValue(e.currentTarget.value)
          }}
        />

        <Button variant='outline' size='icon' type='submit'>
          <SearchIcon className='h-4 w-4' />
        </Button>

        <Button variant='outline' size='icon' type='reset'>
          <X className='h-4 w-4' />
        </Button>

        <span hidden={!isSearchStalled}>Searching…</span>
      </form>
    </div>
  )
}

export default SearchBox
