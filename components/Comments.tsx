import * as React from 'react'
import styles from './styles.module.css'

interface CommentsProps {
  repo: string
  issueTerm?: string
  label?: string
  theme?: string
}

// Lightweight Utterances wrapper that uses two containers approach for theme switching
export function Comments({ repo, issueTerm = 'pathname', label, theme = 'github-light' }: CommentsProps) {
  const lightContainerRef = React.useRef<HTMLDivElement>(null)
  const darkContainerRef = React.useRef<HTMLDivElement>(null)
  const [lightLoaded, setLightLoaded] = React.useState(false)
  const [darkLoaded, setDarkLoaded] = React.useState(false)

  const isDarkTheme = theme === 'github-dark'

  // Load light theme utterances
  React.useEffect(() => {
    if (!repo || lightLoaded) return
    const container = lightContainerRef.current
    if (!container) return

    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('repo', repo)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', 'github-light')
    if (label) script.setAttribute('label', label)

    script.onload = () => setLightLoaded(true)
    container.append(script)
  }, [repo, issueTerm, label])

  // Load dark theme utterances
  React.useEffect(() => {
    if (!repo || darkLoaded) return
    const container = darkContainerRef.current
    if (!container) return

    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('repo', repo)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', 'github-dark')
    if (label) script.setAttribute('label', label)

    script.onload = () => setDarkLoaded(true)
    container.append(script)
  }, [repo, issueTerm, label])

  return (
    <div className={styles.commentsInner}>
      <div 
        ref={lightContainerRef} 
        className="utterances-light"
        style={{ display: isDarkTheme ? 'none' : 'block' }}
      />
      <div 
        ref={darkContainerRef} 
        className="utterances-dark"
        style={{ display: isDarkTheme ? 'block' : 'none' }}
      />
    </div>
  )
}
