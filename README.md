
#

## SECTIONS

- Nextjs -- ssr
- Tailwind css -- styling
- Shadcn -- ui component
- authjs -- authentication
- nylas -- calendar api
- prisma -- orm
- zod -- typesafety
- conform -- validation
- supabase -- db
- vercel -- deployment

### SETTING UP AUTH

1. `pnpm add next-auth@beta`
2. `npx auth secret`

### ARCHITECTURE DESIGN

[![](https://app.eraser.io/workspace/4jM9dx6JPhdeiVJ2UtLP/preview?elements=ysOr8MKp3HOdA1Fqm7rwEg&type=embed)]()

### WORKFLOW

1. Create Next.js project
2. Create Dashboard layout
3. Onboarding Route

    a. Authenticate user using Authjs + Nylas to connect with out calendar

    b. Nylas creates connection to our calendar and we get a grant_id and email_id in return to authenticate all api requests

4. Create settings route for changing pp & username
5. Create Availability route
6. Create Event Route(create/update/delete)
7. Create Booking Form

    a. Unique Url with username

    b. Get data from our availability page. Get data from nylas display the correct date and available time frames

    c. Use nylas api to book the event in the calendar

8. Create the meetings route (see when, with whom and meeting call provider)
9. Create landing page.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

