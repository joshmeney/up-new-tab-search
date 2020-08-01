This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First you'll need to create a .env.local file in the root directory and add your Up API key like this:

```javascript
NEXT_PUBLIC_UP_API_KEY = "up:yeah:yourrealapikeywillgoinhere";
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To set your emojis and savings goals, you need to edit the `utils/accountDetails.js` file:

- The property key just needs to match your saving account name
- The emoji just needs to be the relevant emoji shortcode (minus the colons). Can find a list here: https://emojipedia.org
- The savings goals need to inputted as cents, not dollars

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
