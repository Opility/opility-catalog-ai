import type { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import style from './style.module.css'
export interface AppIconProps {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}
const AppIcon: FC<AppIconProps> = ({ size = 'medium', rounded = false, className }) => (
  <span className={classNames(style.appIcon, size !== 'medium' && style[size], rounded && style.rounded, className ?? '', 'ella-app-icon')}>
    <Image src="/opility/catalog-ai-icon.webp" alt="Opility Catalog AI — Ella" width={64} height={64} className="h-full w-full object-cover" priority />
  </span>
)
export default AppIcon
