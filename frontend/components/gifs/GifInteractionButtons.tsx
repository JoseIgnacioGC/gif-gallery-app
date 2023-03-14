import { useRef } from 'react'
import { MdLink, MdDownload } from 'react-icons/md'
import { saveAs } from 'file-saver'

type Props = { imgUrl: string; imgTitle: string }

const GifInteractionButtons = ({ imgUrl, imgTitle }: Props): JSX.Element => {
  const copyAlert = useRef<HTMLDivElement>(null)

  const handleCopyLink = (): void => {
    void navigator.clipboard.writeText(imgUrl)
    const { current } = copyAlert
    if (current === null) return undefined
    current.classList.toggle('opacity-0')
    current.classList.toggle('translate-y-60')
    setTimeout(() => {
      current.classList.toggle('opacity-0')
      current.classList.toggle('translate-y-60')
    }, 1000)
  }
  const handleDownloadGif = (): void => {
    saveAs(imgUrl, `${imgTitle}.gif`)
  }

  return (
    <div className='flex items-center justify-end pr-8 py-5'>
      <button
        className='bg-zinc-400  ml-4 inline-flex justify-center items-center w-11 h-11 rounded-full'
        aria-label='Copy gif link'
        onClick={handleCopyLink}
      >
        <MdLink className='text-eggshell dark:text-slate-200 text-2xl' />
      </button>
      <button
        className='bg-steel-teal ml-4 inline-flex justify-center items-center w-16 h-16 rounded-full'
        aria-label='Download gif'
        onClick={handleDownloadGif}
      >
        <MdDownload className='text-eggshell dark:text-slate-200 text-2xl' />
      </button>
      <span
        ref={copyAlert}
        className='bg-eggshell shadow-lg transition-all duration-500 ease-out p-3 fixed left-1/2 -translate-x-1/2 bottom-20 translate-y-60 opacity-0'
      >
        copiado!!
      </span>
    </div>
  )
}

export default GifInteractionButtons
