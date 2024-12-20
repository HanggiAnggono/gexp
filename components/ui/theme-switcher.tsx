'use client'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-full h-11 w-11"
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
