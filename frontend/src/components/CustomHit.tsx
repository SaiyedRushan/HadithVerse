import { Highlight } from "react-instantsearch"

function CustomHit({ hit }) {
  return (
    <div className='border rounded-lg p-3 flex flex-col gap-2 mb-2'>
      <p>Hadith #{hit.hadith_no}</p>
      <h2>
        <Highlight attribute={"text_en"} hit={hit} />
      </h2>
      <p className='text-blue-700'>
        Chapter #{hit.chapter_no}: {hit.chapter}
      </p>
      <p className='text-blue-700'>Source: {hit.source}</p>
    </div>
  )
}

export default CustomHit
