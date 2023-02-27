import Head from 'next/head'

const TITLE_SUFFIX = ' - Gif Web'

type Props = { title: string, withSuffix?: boolean }
const HeadTitle = ({ title, withSuffix = false }: Props): JSX.Element => (
  <Head>
    <title>{title}{withSuffix ? TITLE_SUFFIX : ''}</title>
  </Head>
)

export default HeadTitle
