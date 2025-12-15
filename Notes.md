# NEXT.JS Getting Started

## Installation

### public: images and fonts

### ESLInt

Or use Biome (fast linter + formatter):
package.json

```TS {
  "scripts": {
    "lint": "biome check",
    "format": "biome format --write"
  }
```

}
If your project previously used next lint, migrate your scripts to the ESLint CLI with the codemod:

Terminal

```TS
 $ npx @next/codemod@canary next-lint-to-eslint-cli .
```

baseUrl deprecated:

```TS "baseUrl": "src/",
 "paths": {
   "@/*": ["./*"],
   "@/styles/*": ["styles/*"],
   "@/components/*": ["components/*"],
 }
```

## Project Structure and Organisation

src folder for apps and pages (error w/ .next>types>validator.ts)

instrumentation.ts OpenTelemetry and Instrumentation file
proxy.ts Next.js request proxy
.env Environment variables (should not be tracked by version control)
.env.local Local environment variables (should not be tracked by version control)
.env.production Production environment variables (should not be tracked by version control)
.env.development Development environment variables (should not be tracked by version control)

Component hierarchy:
layout .js .jsx .tsx Layout
template .js .jsx .tsx Re-rendered layout
error .js .jsx .tsx Error UI
loading .js .jsx .tsx Loading UI
not-found .js .jsx .tsx Not found UI
page .js .jsx .tsx Page OR route.js for content to be publicly accessible

global-error .js .jsx .tsx Global error UI
route .js .ts API endpoint
default .js .jsx .tsx Parallel route fallback page

Dynamic Routes [page] using params
Route Groups and Private Folders (section) \_folderName
NOT private %5F (underscore folder name to be visible url)
(name) grouping for organisation, ignored by url

App icons
favicon .ico Favicon file
icon .ico .jpg .jpeg .png .svg App Icon file
icon .js .ts .tsx Generated App Icon
apple-icon .jpg .jpeg, .png Apple App Icon file
apple-icon .js .ts .tsx Generated Apple App Icon

Open Graph and Twitter images
opengraph-image .jpg .jpeg .png .gif Open Graph image file
opengraph-image .js .ts .tsx Generated Open Graph image
twitter-image .jpg .jpeg .png .gif Twitter image file
twitter-image .js .ts .tsx Generated Twitter image

SEO
sitemap .xml Sitemap file
sitemap .js .ts Generated Sitemap
robots .txt Robots file
robots .js .ts Generated Robots file

##Layouts and Pages

### search params

Use the searchParams prop when you need search parameters to load data for the page (e.g. pagination, filtering from a database).
Use useSearchParams when search parameters are used only on the client (e.g. filtering a list already loaded via props).
As a small optimization, you can use new URLSearchParams(window.location.search) in callbacks or event handlers to read search params without triggering re-renders.

### Linking

<Link> 
useRouter (advanced)

### Route Props Helpers

Next.js exposes utility types that infer params and named slots from your route structure:

PageProps: Props for page components, including params and searchParams.
LayoutProps: Props for layout components, including children and any named slots (e.g. folders like @analytics).
These are globally available helpers, generated when running either next dev, next build or next typegen.

## Linking & Navigation

### Benefits of loading.tsx:

Immediate navigation and visual feedback for the user.
Shared layouts remain interactive and navigation is interruptible.
Improved Core Web Vitals: TTFB, FCP, and TTI.

Good to know: In development mode, you can use the Next.js Devtools to identify if the route is static or dynamic. See devIndicators for more information.

### Dynamic segments without generateStaticParams

If a dynamic segment could be prerendered but isn't because it's missing generateStaticParams, the route will fallback to dynamic rendering at request time.

Ensure the route is statically generated at build time by adding generateStaticParams:

app/blog/[slug]/page.tsx
TypeScript

```TypeScript
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // ...
}
```

### Slow networks

On slow or unstable networks, prefetching may not finish before the user clicks a link. This can affect both static and dynamic routes. In these cases, the loading.js fallback may not appear immediately because it hasn't been prefetched yet.

To improve perceived performance, you can use the useLinkStatus hook to show immediate feedback while the transition is in progress.

app/ui/loading-indicator.tsx
TypeScript

TypeScript
'use client'

import { useLinkStatus } from 'next/link'

export default function LoadingIndicator() {
const { pending } = useLinkStatus()
return (
<span aria-hidden className={`link-hint ${pending ? 'is-pending' : ''}`} />
)
}
You can "debounce" the hint by adding an initial animation delay (e.g. 100ms) and starting as invisible (e.g. opacity: 0). This means the loading indicator will only be shown if the navigation takes longer than the specified delay. See the useLinkStatus reference for a CSS example.

Good to know: You can use other visual feedback patterns like a progress bar. View an example [here](https://github.com/vercel/react-transition-progress)

### Disabling prefetching

```TS
<Link prefetch={false} href="/blog">
  Blog
</Link>

```

useful to avoid unnecessary usage of resources when rendering large lists of links (e.g. an infinite scroll table) - However, disabling prefetching comes with trade-offs:

Static routes will only be fetched when the user clicks the link.
Dynamic routes will need to be rendered on the server first before the client can navigate to it.

prefetch only on hover

```TS 'use client'

import Link from 'next/link'
import { useState } from 'react'

function HoverPrefetchLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)

  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  )
}
```

### Hydration

Using the @next/bundle-analyzer plugin to identify and reduce bundle size by removing large dependencies.
Moving logic from the client to the server where possible. See the [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) docs for guidance.

### Native histsory API

Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.
