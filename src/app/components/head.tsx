'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Head({ className }: { className?: string }) {
  return (
    <header className='h-14 fixed border-b top-0 z-40 w-full bg-white shadow-xs'>
      <div className={`h-full px-4 md:px-8 flex justify-between items-center gap-3 ${className}`}>
        <Link className='h-full flex shrink-0 items-center cursor-pointer' href='/'>
          <Image src='/logo.png' alt='logo' width={28} height={28} priority />
          <div className='text-lg sm:text-xl ml-2 font-bold font-mono text-primary whitespace-nowrap'>大海封面</div>
        </Link>
        <nav aria-label='站点导航' className='h-full flex items-center justify-end gap-1 sm:gap-2'>
          <Button asChild size='sm' className='rounded-3xl px-2.5 sm:px-4 text-xs sm:text-sm'>
            <a href='https://www.bczj.online/' target='_blank' rel='noopener noreferrer'>
              大海资源网
            </a>
          </Button>
          <Button asChild size='sm' variant='outline' className='rounded-3xl px-2.5 sm:px-4 text-xs sm:text-sm'>
            <a href='https://tool.dhzyw.com/' target='_blank' rel='noopener noreferrer'>
              大海工具箱
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
