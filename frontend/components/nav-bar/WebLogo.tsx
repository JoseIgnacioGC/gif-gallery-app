import Link from 'next/link'

type Props = { scrollInTop: boolean }

const WebLogo = ({ scrollInTop }: Props): JSX.Element => (
  <Link
    className={
      'bg-dark-gunmetal inline-flex justify-center w-7 h-7 rounded-full ' +
      (scrollInTop ? 'ml-4 mt-4' : 'absolute left-0 ml-3 flex-none')
    }
    aria-label='Go to home page'
    href={'/'}
  >
    <span className='text-eggshell dark:text-slate-200 font-semibold text-xl'>
      G
    </span>
  </Link>
)

export default WebLogo
