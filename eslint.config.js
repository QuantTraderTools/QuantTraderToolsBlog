import { config } from '@fisch0920/config/eslint'
import nextConfig from 'eslint-config-next/core-web-vitals'

// Extract and unify plugin instances to resolve flat config conflicts in ESLint 9+
const reactPlugin = nextConfig.find((o) => o.plugins && o.plugins.react)?.plugins.react || config.find((o) => o.plugins && o.plugins.react)?.plugins.react
const reactHooksPlugin = nextConfig.find((o) => o.plugins && o.plugins['react-hooks'])?.plugins['react-hooks'] || config.find((o) => o.plugins && o.plugins['react-hooks'])?.plugins['react-hooks']
const importPlugin = config.find((o) => o.plugins && o.plugins.import)?.plugins.import || nextConfig.find((o) => o.plugins && o.plugins.import)?.plugins.import
const jsxA11yPlugin = config.find((o) => o.plugins && o.plugins['jsx-a11y'])?.plugins['jsx-a11y'] || nextConfig.find((o) => o.plugins && o.plugins['jsx-a11y'])?.plugins['jsx-a11y']
const typescriptPlugin = config.find((o) => o.plugins && o.plugins['@typescript-eslint'])?.plugins['@typescript-eslint'] || nextConfig.find((o) => o.plugins && o.plugins['@typescript-eslint'])?.plugins['@typescript-eslint']

const cleanConfig = (cfg) => cfg.map((c) => {
  if (c.plugins) {
    const newPlugins = { ...c.plugins }
    if (newPlugins.react && reactPlugin) newPlugins.react = reactPlugin
    if (newPlugins['react-hooks'] && reactHooksPlugin) newPlugins['react-hooks'] = reactHooksPlugin
    if (newPlugins.import && importPlugin) newPlugins.import = importPlugin
    if (newPlugins['jsx-a11y'] && jsxA11yPlugin) newPlugins['jsx-a11y'] = jsxA11yPlugin
    if (newPlugins['@typescript-eslint'] && typescriptPlugin) newPlugins['@typescript-eslint'] = typescriptPlugin
    return { ...c, plugins: newPlugins }
  }
  return c
})

const eslintConfig = [
  ...cleanConfig(config),
  ...cleanConfig(nextConfig),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
      '@next/next/no-img-element': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'simple-import-sort/imports': 'off',
      'unicorn/catch-error-name': 'off',
      'unicorn/prefer-optional-catch-binding': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-string-slice': 'off',
      'react/function-component-definition': 'off',
      'unicorn/no-useless-fallback-in-spread': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-global-this': 'off',
      'no-process-env': 'off',
      'array-callback-return': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/interactive-supports-focus': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      '@typescript-eslint/naming-convention': 'off'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/newline-after-import': 'off',
      'unicorn/no-named-default': 'off',
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  }
]

export default eslintConfig