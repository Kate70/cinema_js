import slideMenu from "./menu.js"
import renderVideo from './renderVideo.js'
import menuLink  from './menuLink.js'

slideMenu('.header__burger-btn', 
'.navigation', 
'navigation_active', 
'.navigation__close, .navigation__link',

);

menuLink()

renderVideo();