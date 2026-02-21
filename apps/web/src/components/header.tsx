import { Slash } from 'lucide-react'
import Image from 'next/image'
import rocketseatIcon from '@/assets/rocketseat-icon.svg'
import { ability } from '@/auth/auth'
import { ProfileButton } from './profile-button'
import { ProjectSwitcher } from './project-switcher'
import { Separator } from '@/components/ui/separator' //
import { ThemeSwitcher } from './theme/theme-switcher'
import { OrganizationSwitcher } from './organization-switcher'
import { PendingInvites } from './pending-invites'

export async function Header() {
  const permissions = await ability()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={rocketseatIcon}
            className="size-6 dark:invert"
            alt="Rocketseat"
          />

          <Slash className="size-3 -rotate-[24deg] text-border" />

          <OrganizationSwitcher />

          {permissions?.can('get', 'Project') && (
            <>
              <Slash className="size-3 -rotate-[24deg] text-border" />
              <ProjectSwitcher />
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <PendingInvites />
          <ThemeSwitcher />
          <Separator orientation="vertical" className="h-5" />
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}
