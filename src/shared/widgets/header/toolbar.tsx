"use client"

import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export const ToolBar = () => {
  return (
    <>
      <Button color='primary' className='text-lg'>
        Start Trial
      </Button>
      <Link href="/sign-up">Log In</Link>
    </>
  )
}
