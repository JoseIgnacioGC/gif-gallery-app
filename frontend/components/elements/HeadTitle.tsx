import Head from 'next/head'

const TITLE_SUFFIX = ' - Gif Web'

type Props = { title: string, withSuffix?: boolean }
const HeadTitle = ({ title, withSuffix = false }: Props): JSX.Element => (
  <Head>
    <title>{withSuffix ? title + TITLE_SUFFIX : title}</title>
  </Head>
)

export default HeadTitle
