import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  TelegramIcon,
  LinkedInIcon,
  GmailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  target,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  target?: string
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target={target}
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Smae Tongmenglay. I live in Phnom Penh, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Smae Tongmenglay, a full-stack developer based in Cambodia.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve been passionate about creating and building things for
              as long as I can remember. My journey into coding began in 2016,
              when I was a kid (around 10 years old), starting with VB.net. My
              fascination with how computers work sparked a deep interest in
              programming, and from that point, I was hooked on solving problems
              through code.
            </p>
            <p>
              As I grew older, my love for technology only intensified. I dove
              deeper into both front-end and back-end development, gradually
              mastering the full-stack development process. Along the way, I
              also ventured into mobile development, building apps that bring
              powerful functionality to mobile devices. With each new project, I
              pushed the boundaries of my skills, creating more complex and
              functional applications across platforms.
            </p>
            <p>
              By the age of 18, I had already begun developing practical
              software solutions. Now, as a full-stack and mobile developer, I
              specialize in building both front-end and back-end components of
              applications. I’m dedicated to crafting high-quality solutions
              that meet the needs of users and businesses, fueled by a
              relentless passion for innovation.
            </p>
            <p>
              As a developer, my mission is to continue creating software that
              not only addresses real-world problems but also turns ideas into
              impactful and seamless digital experiences.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://t.me/J0seDev"
              icon={TelegramIcon}
              target="_blank"
            >
              Telegram
            </SocialLink>
            <SocialLink
              href="mailto:tongmenglaysmae5@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              Mail
            </SocialLink>
            <SocialLink
              href="https://github.com/Joselay"
              icon={GitHubIcon}
              className="mt-4"
              target="_blank"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/smaetongmenglay/"
              icon={LinkedInIcon}
              className="mt-4"
              target="_blank"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:tongmenglaysmae5@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              tongmenglaysmae5@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
