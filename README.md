This is a [Badgeth](https://badgeth.com/) badge subgraph, responsible for awarding the "Testnet Wanderer" badge to those who participated in The Graph Testnet.

## Getting Started

First, run the development server:

```bash
npm run codegen
npm run build
npm run create-local
npm run deploy-local
```

## Learn More

To learn more about Badgeth and The Graph, take a look at the following resources:

- [The Graph Documentation](https://thegraph.org/docs) - learn about The Graph protocol and subgraph development
- [Badgeth Subgraph Starter](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your FeedSummaryback and contributions are welcome!

## Deploy on The Graph Studio

The easiest way to deploy your Badgeth badge subgraph is to use the [The Graph CLI](https://github.com/graphprotocol/graph-cli) and [The Graph Studio](https://thegraph.com/studio/). First, download The Graph CLI:

```bash
npm install -g @graphprotocol/graph-cli
```

Next, create an account and new subgraph on [The Graph Studio](https://thegraph.com/studio/). Go to your subgraph page, click the "Details" tab, scroll down to the "AUTH & DEPLOY" section, and find your auth token. Then, authenticate within the CLI:

```bash
graph auth  --studio <STUDIO_AUTH_TOKEN>
```

Finally, you can build and deploy your subgraph:

```bash
npm run codegen
npm run build
npm run deploy
```

For questions and additional details, join our [Discord Channel](https://discord.com/invite/464p6GzrWq).
