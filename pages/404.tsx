import Link from 'next/link'
import HeadTitle from '../frontend/components/elements/HeadTitle'
import NavBar from '../frontend/components/nav-bar/NavBar'

const PageNotFound = (): JSX.Element => {
  return (
    <>
      <HeadTitle title='Gif Web' />
      <NavBar />
      <main className='dark:bg-zinc-500 px-3 h-screen pt-10'>
        <h1 className='text-center text-5xl mb-5 font-semibold'>Oops!</h1>
        <h2 className=' text-center'>Page not found, sorry</h2>
        <div className='inline-flex justify-center w-full mt-10'>
          <Link href={'/'} className='bg-steel-teal text-eggshell dark:text-slate-200 p-5'>
            Go to homepage
          </Link>
        </div>
      </main>
    </>
  )
}

export { PageNotFound as default }
