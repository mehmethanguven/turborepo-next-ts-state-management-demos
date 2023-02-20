// your data here

import { INavLink, ISocialLink } from '../types'

export const headerNavLinks: INavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
]

export const footerNavLinks: INavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
]

export const socialLinks: ISocialLink[] = [
  { title: 'facebook', imageUrl: '/images/icon-facebook.svg', url: '#' },
  { title: 'twitter', imageUrl: '/images/icon-twitter.svg', url: '#' },
  { title: 'instagram', imageUrl: '/images/icon-instagram.svg', url: '#' },
]
