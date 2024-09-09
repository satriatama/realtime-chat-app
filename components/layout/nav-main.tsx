'use client'
import { ChevronRight, GroupIcon, LucidePersonStanding } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type LinkItem = {
  label: string
  href: string
}

type MenuItem = {
  icon: React.ComponentType
  label: string
  href?: string
  subMenu?: LinkItem[]
}

const links: { owner: MenuItem[] } = {
  owner: [
    {
      icon: LucidePersonStanding,
      label: 'Personal Chat',
      href: '/personal-chat',
    },
    {
      icon: GroupIcon,
      label: 'Group Chat',
      href: '/group-chat',
    },
  ],
}

export default function NavMain() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<number[]>([])

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const rootMenuClassName = (isActive: boolean) => {
    return `relative flex items-center space-x-2 rounded-xl p-2 transition-colors duration-200 cursor-pointer ${
      isActive ? 'bg-primary text-white shadow-sm' : 'hover:bg-slate-100'
    }`
  }

  useEffect(() => {
    const activeDropdowns = links.owner
      .map((link, index) =>
        link.subMenu?.some((subLink) => pathname === subLink.href) ? index : -1,
      )
      .filter((index) => index !== -1)

    setOpenDropdown((prevOpenDropdown) => [
      ...Array.from(new Set([...prevOpenDropdown, ...activeDropdowns])),
    ])
  }, [pathname])

  return (
    <nav className="w-full">
      <ul>
        {links.owner.map((link, index) => (
          <li key={index} className="relative mb-2">
            {link.href ? (
              <div className="relative px-4">
                {pathname === link.href && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                )}
                <Link
                  href={link.href}
                  className={rootMenuClassName(pathname === link.href)}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              </div>
            ) : (
              <div className="relative px-4">
                {pathname.startsWith(link.subMenu![0].href) && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
                )}
                <div
                  onClick={() => handleDropdownToggle(index)}
                  className={rootMenuClassName(
                    link.subMenu!.some((subLink) => pathname === subLink.href),
                  )}
                >
                  <link.icon />
                  <span>{link.label}</span>

                  <ChevronRight
                    className={`absolute right-2 top-1/2 size-5 -translate-y-1/2 transform transition-transform ${
                      openDropdown.includes(index) ? 'rotate-90' : 'rotate-0'
                    }`}
                  />
                </div>
              </div>
            )}
            {link.subMenu && (
              <ul
                className={`mx-4 mt-2 overflow-hidden transition-all duration-300 ${
                  openDropdown.includes(index)
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {link.subMenu.map((subLink, subIndex) => (
                  <li key={subIndex} className="relative">
                    {pathname === subLink.href && (
                      <div className="absolute left-2 top-1/2 -translate-y-1/2">
                        <div className="size-2 rounded-full bg-primary" />
                      </div>
                    )}
                    <Link
                      href={subLink.href}
                      className="block rounded-md p-2 ps-6 transition-colors duration-200 hover:bg-gray-100"
                    >
                      {subLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
