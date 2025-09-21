/* eslint-disable simple-import-sort/imports */
import Link from 'next/link'
import * as React from 'react'
import cs from 'classnames'
import type * as types from 'notion-types'
import { Header, Search, useNotionContext } from 'react-notion-x'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoHome } from '@react-icons/all-files/io5/IoHome'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

function ToggleThemeButton() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  const { components, mapPageUrl } = useNotionContext()
  const { isDarkMode } = useDarkMode()

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <div className='notion-nav-header-left breadcrumbs'>
          <Link href='https://quanttradertools.vercel.app/' className={cs('breadcrumb', 'button')} aria-label='Home' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src={isDarkMode ? '/logo-QTT.svg' : '/logo-light-qtt.svg'}
              alt='QuantTrader Tools'
              style={{ height: 40 }}
            />
            <span className='header-brand-title'>Quant Trader Tools</span>
          </Link>
        </div>

  {/* Center heading removed */}

        <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              if (!link?.pageId && !link?.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          <Link href='/' className={cs('breadcrumb', 'button')} aria-label='Home' style={{ marginRight: '0.5rem' }}>
            <IoHome />
          </Link>

          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
    </header>
  )
}