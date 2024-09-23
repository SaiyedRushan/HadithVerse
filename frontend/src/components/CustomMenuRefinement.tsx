import { useMenu, UseMenuProps } from "react-instantsearch"

export default function MenuSelect(props: UseMenuProps) {
  const { items, refine } = useMenu(props)
  const { value: selectedValue } = items.find((item) => item.isRefined) || { value: "" }

  const capitalizeString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <select
      className='border rounded p-3 max-w-[300px]'
      value={selectedValue}
      onChange={(event) => {
        refine((event.target as HTMLSelectElement).value)
      }}>
      <option value='' selected>
        Filter {capitalizeString(props.attribute)}
      </option>
      {items.map((item) => (
        <option value={item.value} className='max-w-sm'>
          {item.label} ({item.count})
        </option>
      ))}
    </select>
  )
}
