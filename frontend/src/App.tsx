import React from "react"
import { ThemeProvider } from "next-themes"
import { DarkModeToggle } from "./components/DarkModeToggle"
import { liteClient as algoliasearch } from "algoliasearch/lite"
import { ClearRefinements, Hits, HitsPerPage, InstantSearch, Pagination } from "react-instantsearch"
import CustomSearchBox from "./components/CustomSearchBox"
import CustomHit from "./components/CustomHit"
import CustomMenuRefinement from "./components/CustomMenuRefinement"
import { Button } from "./components/ui/button"

const searchClient = algoliasearch(import.meta.env.VITE_ALGOLIA_APP_ID, import.meta.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY)

const App: React.FC = () => {
  return (
    <ThemeProvider attribute='class'>
      <div className='container mx-auto p-4 min-h-screen flex flex-col gap-3'>
        <div className='flex justify-between items-center mb-4 '>
          <h1 className='text-3xl font-bold'>Hadith Verse</h1>
          <DarkModeToggle />
        </div>
        <div className='w-8'></div>

        <InstantSearch searchClient={searchClient} indexName='Hadiths'>
          <div className='flex justify-center'>
            <CustomSearchBox />
          </div>
          <div className='flex flex-col sm:flex-row justify-around items-center gap-2'>
            <CustomMenuRefinement attribute='source' />
            <CustomMenuRefinement attribute='chapter' limit={1000} />
            <Button variant={"ghost"} className='border'>
              <ClearRefinements
                translations={{
                  resetButtonText: "Clear filters",
                }}
              />
            </Button>
          </div>
          <Hits hitComponent={CustomHit} />
          <HitsPerPage
            className='flex justify-center'
            items={[
              { label: "8 hits per page", value: 8, default: true },
              { label: "16 hits per page", value: 16 },
            ]}
          />
          <Pagination
            classNames={{
              list: "flex gap-1 justify-center",
              item: "border rounded p-2 w-10",
              selectedItem: "bg-gray-500 text-white",
              link: "w-full h-full flex justify-center",
              disabledItem: "text-gray-300",
            }}
          />
        </InstantSearch>
      </div>
    </ThemeProvider>
  )
}

export default App
