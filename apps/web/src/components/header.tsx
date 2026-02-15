import Image from 'next/image'
import rocketseatIcon from '@/assets/rocketseat-icon.svg'
import { ProfileButton } from './profile-button'
import { Separator } from '@/components/ui/separator' //
import { ThemeSwitcher } from './theme/theme-switcher'

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src={rocketseatIcon}
            className="size-6 dark:invert"
            alt="Rocketseat"
          />

          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-muted-foreground/50">
              /
            </span>
            <span className="text-sm font-medium">Select organization</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Separator orientation="vertical" className="h-5" />
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}
