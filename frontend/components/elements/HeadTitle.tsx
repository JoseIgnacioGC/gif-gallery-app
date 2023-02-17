import Head from 'next/head'

type Props = { title: string }

const HeadTitle = ({ title }: Props): JSX.Element => (
  <Head>
    <title>{title}</title>
  </Head>
)

export default HeadTitle
