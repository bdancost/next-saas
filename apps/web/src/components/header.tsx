import Image from 'next/image'

import rocketseatIcon from '@/assets/rocketseat-icon.svg'

import { ProfileButton } from '../components/profile-button'
import { Slash } from 'lucide-react'
import { OrganizationSwitcher } from './organization-switcher'

export function Header() {
  return (
    <div className="mx-auto flex max-w-300 items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={rocketseatIcon}
          className="size-6 dark:invert"
          alt="Rocketseat"
        />

        <Slash className="text-border size-3 -rotate-24" />

        <OrganizationSwitcher />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
