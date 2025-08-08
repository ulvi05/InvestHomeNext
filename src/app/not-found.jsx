import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col mt-10'>
      <h2 className='text-[50px] font-[600]'>404-Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}