import { GithubIcon, LinkedinIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className='flex w-full shrink-0 flex-col md:flex-row items-center justify-around gap-4 p-6 border-t'>
      <Link to='/'>HadithVerse</Link>

      <nav className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <Link
          to='/#features'
          className='rounded-md px-4 text-sm font-medium transition-colors hover:text-green-700 focus:outline-none focus:ring-1 focus:ring-gray-950  dark:focus:ring-gray-300'>
          Features
        </Link>

        <Link
          to='/#contact'
          className='rounded-md px-4 text-sm font-medium transition-colors hover:text-green-700 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:focus:ring-gray-300'>
          Contact/Feedback
        </Link>
      </nav>

      <div className='flex flex-row gap-2'>
        <a
          href='https://www.linkedin.com/in/rushanshahsaiyed/'
          target='_blank'
          className='h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2 hover:text-green-700'>
          <span className='sr-only'>Linkedin</span>
          <LinkedinIcon className='w-4 h-4' />
        </a>
        <a
          href='https://github.com/SaiyedRushan/HadithVerse'
          target='_blank'
          className='h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2 hover:text-green-700'>
          <span className='sr-only'>Github</span>
          <GithubIcon className='w-4 h-4' />
        </a>
      </div>
    </footer>
  )
}
