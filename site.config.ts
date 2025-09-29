import { siteConfig } from '@/lib/site-config'

export default siteConfig({
  // the site's root Notion page (required) - Updated for QuantTraderTools Blog
 
  rootNotionPageId: '26b5e2ddc87f80239017e81020415565',
                    
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)

  rootNotionSpaceId: 'c4e5e2dd-c87f-8182-890e-0003c2861774',

  // basic site info (required)
  
  name: 'QuantTraderTools Blog',
  domain: 'blog.quanttradertools.com',
  author: 'QuantTraderTools',

  // open graph metadata (optional)
  
  description: 'Next.js Notion Blog for QuantTraderTools',

  // remove notion page IDs from URLs (clean URLs)
  includeNotionIdInUrls: false,

  // enable search functionality
  isSearchEnabled: true,

  // social usernames (optional)
  twitter: undefined,


  // comments (Utterances). Set your GitHub repo to enable, e.g. 'owner/repo'
  isCommentsEnabled: true,
  utterancesRepo: 'QuantTraderTools/QuantTraderToolsBlog',
  utterancesLabel: 'comment',
  utterancesTheme: 'github-light',

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})