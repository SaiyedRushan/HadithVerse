import { Highlight } from "react-instantsearch"

function CustomHitQuran({ hit }) {
  return (
    <div className='border rounded-lg p-3 flex flex-col gap-2 mb-2'>
      <p className='text-green-700'>
        Surah {hit.SurahNameEnglish} - Verse {hit.AyahNo}
      </p>
      <h2>
        <Highlight attribute={"EnglishTranslation"} hit={hit} />
      </h2>
      <h2>
        <Highlight attribute={"ArabicText"} hit={hit} />
      </h2>
    </div>
  )
}

export default CustomHitQuran
