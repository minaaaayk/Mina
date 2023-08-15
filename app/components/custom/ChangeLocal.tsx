import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { HeaderButton } from '../modules';
import { Icon } from './Icon';

export const ChangeLocal:React.FC = () => {

  const [isHover, setHover] = useState<boolean>(false)
  const router = useRouter()
  const { pathname, asPath, query, locale } = router;

  const getNextLocal = () => {
    return locale === 'en' ? 'fa' : 'en';
  }
  return (
    <HeaderButton
      onClick={() => {
        router.push({ pathname, query }, asPath, { locale: getNextLocal() })

      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      { isHover ? getNextLocal() : <Icon className='fa-solid fa-earth-americas'/>}
    </HeaderButton>
  )
}
