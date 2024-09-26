import { ClearRefinements, Hits, HitsPerPage, Index, InstantSearch, Pagination } from "react-instantsearch"
import CustomSearchBox from "@/components/CustomSearchBox"
import CustomHit from "@/components/CustomHit"
import CustomMenuRefinement from "@/components/CustomMenuRefinement"
import { Button } from "@/components/ui/button"
import CustomHitQuran from "@/components/CustomHitQuran"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { liteClient as algoliasearch } from "algoliasearch/lite"

const searchClient = algoliasearch(import.meta.env.VITE_ALGOLIA_APP_ID, import.meta.env.VITE_ALGOLIA_SEARCH_ONLY_API_KEY)

const SearchPage = () => {
  return (
    <div className='min-h-[80vh]'>
      <InstantSearch searchClient={searchClient} indexName='Hadiths'>
        <div className='flex justify-center'>
          <CustomSearchBox />
        </div>
        <Accordion type='multiple' className='flex flex-col md:flex-row md:justify-around gap-5 mt-5'>
          <AccordionItem value='hadiths' className='w-full md:custom-accordion transition-all ease-in-out'>
            <AccordionTrigger>Hadiths</AccordionTrigger>
            <AccordionContent>
              {/* hadith index */}
              <div className='flex flex-col gap-4'>
                <Index indexName='Hadiths'>
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
                      list: "flex gap-1 justify-center flex-wrap",
                      item: "border rounded p-2 w-10 hover:scale-110 hover:shadow-md",
                      selectedItem: "bg-gray-500 text-white",
                      link: "w-full h-full flex justify-center",
                      disabledItem: "text-gray-300",
                    }}
                  />
                </Index>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='quran' className='md:custom-accordion transition-all ease-in-out '>
            <AccordionTrigger>Quran</AccordionTrigger>
            <AccordionContent>
              {/* quran index */}
              <div className='flex flex-col gap-4'>
                <Index indexName='Quran'>
                  <Hits hitComponent={CustomHitQuran} />
                  <HitsPerPage
                    className='flex justify-center'
                    items={[
                      { label: "8 hits per page", value: 8, default: true },
                      { label: "16 hits per page", value: 16 },
                    ]}
                  />
                  <Pagination
                    classNames={{
                      list: "flex gap-1 justify-center flex-wrap",
                      item: "border rounded p-2 w-10 hover:scale-110 hover:shadow-md",
                      selectedItem: "bg-gray-500 text-white",
                      link: "w-full h-full flex justify-center",
                      disabledItem: "text-gray-300",
                    }}
                  />
                </Index>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </InstantSearch>
    </div>
  )
}

export default SearchPage
