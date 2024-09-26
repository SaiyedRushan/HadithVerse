import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link, useRouteError } from "react-router-dom"
interface RouterError {
  statusText?: string
  message?: string
}
export default function ErrorPage() {
  const error = useRouteError() as RouterError
  return (
    <div id='error-page' className='flex items-center justify-center min-h-screen bg-black text-red-900'>
      <div className='text-center p-6 border border-red-200 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4'>Oops!</h1>
        <p className='mb-2'>Sorry, an unexpected error has occurred.</p>
        <p className='italic text-red-500 mb-3'>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/'>
          <Button>
            Go Back &ensp; <ArrowLeft />
          </Button>
        </Link>
      </div>
    </div>
  )
}
