import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh] py-2'>
      <main className='flex flex-col items-center justify-center w-full flex-1 max-w-xl text-center gap-10 my-20'>
        <h1 className='text-5xl font-thin'>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h1>
        <p className='mt-3 text-2xl'>Get started by searching for Hadiths and Quranic verses quickly</p>
        <Link to='/search'>
          <Button className='group'>
            Search &ensp; <ArrowRight className='transition-transform group-hover:translate-x-2' />
          </Button>
        </Link>
      </main>
      {/* Features section */}
      <div id='features' className='flex flex-col items-center justify-center w-full flex-1 max-w-xl text-center gap-10 mb-20'>
        <div className='text-xl font-light'>HadithVerse is currently indexed on the full quran translation and the following 6 hadith books containing over 17,000 Hadiths</div>
        <ul className='grid grid-cols-2 gap-4'>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>Sunan an-Nasa'i</li>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>Sunan Abi Da'ud</li>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>Sunan Ibn Majah</li>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>Jami' al-Tirmidhi</li>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>Sahih Bukhari</li>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>Sahih Muslim</li>
          <li className='border rounded-lg p-2 shadow hover:shadow-md hover:scale-110 transition-all'>More to come ...</li>
        </ul>
      </div>

      {/* Contact section */}
      <div id='contact' className='flex flex-col items-center justify-center w-full flex-1 max-w-xl text-center gap-10 mb-20'>
        <div className='text-xl font-light'>Shoot me an email if you'd like to see any new features or bug fixes!</div>
        <form
          className='w-full max-w-md'
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const subject = encodeURIComponent((form.elements.namedItem("subject") as HTMLInputElement).value)
            const body = encodeURIComponent((form.elements.namedItem("body") as HTMLTextAreaElement).value)
            window.location.href = `mailto:rushan52@gmail.com?subject=${subject}&body=${body}`
          }}>
          <div className='mb-4'>
            <input
              type='text'
              id='subject'
              placeholder='Subject'
              name='subject'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>
          <div className='mb-4'>
            <textarea
              id='body'
              name='body'
              placeholder='Message'
              rows={4}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              required></textarea>
          </div>
          <Button type='submit' className='w-full'>
            Send Email
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage
