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

## Adding New Patient Reviews (Home Page)

The homepage includes a rotating carousel of patient reviews that advance every 8 seconds. To add or edit reviews:

1. **Open the data file:** `app/data/patient-reviews.ts`
2. **Add a new review:** Append a new object to the `PATIENT_REVIEWS` array:
   ```ts
   {
     quote: "The full review text in quotation marks. This is what the patient said.",
     name: "First Name Last Initial.",
   },
   ```
3. **Order:** Reviews are shown in the order they appear in the array. The carousel loops through all entries.
4. **Formatting:** Keep the `quote` as a single string. Use proper punctuation and spacing. The `name` is displayed below the quote (e.g. "Jane D." or "John Smith").
5. **Save:** The home page will show the new review in the rotation after the next refresh. No other code changes are required.

To remove a review, delete its object from the `PATIENT_REVIEWS` array in the same file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
