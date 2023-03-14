import { Ref, RefObject, useEffect, useRef, useState } from 'react'

type ObserverEntries = Array<{ isIntersecting: boolean }>
type OnChangeObserver = { disconnect: () => void }
type NearScreenValue<T> = { isNearScreen: boolean; fromRef: Ref<T> }
type NearScreenOptions<T> = {
  externalRef?: RefObject<T> | null
  rootMargin?: string
}
const useNearScreen = <T extends HTMLElement>({
  externalRef = null,
  rootMargin = '600px'
}: NearScreenOptions<T> = {}): NearScreenValue<T> => {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef<T>(null)

  useEffect(() => {
    const currentElement = externalRef?.current ?? fromRef.current
    if (currentElement === null) return undefined
    const onChange = (
      entries: ObserverEntries,
      observer: OnChangeObserver
    ): void => {
      const { isIntersecting } = entries[0]
      if (!isIntersecting) return undefined
      setIsNearScreen(true)
      observer.disconnect()
    }
    const observer = new IntersectionObserver(onChange, { rootMargin })
    observer.observe(currentElement)
    return () => {
      observer.disconnect()
      setIsNearScreen(false)
    }
  }, [isNearScreen, externalRef, rootMargin])

  return { isNearScreen, fromRef }
}

export default useNearScreen
