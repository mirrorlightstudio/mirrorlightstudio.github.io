import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'
export { upcoming } from './ComingSoon'

export const render = page => renderToStaticMarkup(<App page={page} />)
