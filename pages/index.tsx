import type { PageProps } from '@/lib/types'
import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)
    // Return a graceful error payload so the build can succeed.
    return {
      props: {
        error: {
          statusCode: 500,
          message: 'Failed to load Notion content for the homepage'
        }
      },
      revalidate: 10
    }
  }
}

export default function NotionDomainPage(props: PageProps) {
  return <NotionPage {...props} />
}