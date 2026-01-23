---
title: Five Constants for ENS in 2026
description: Instead of attempting to sell a narrative about what ENS might become in 2026, this essay names a few constants that are already in motion.
tags: [web3, ens, blockchain, identity]
date: 2026-01-02
featuredImage: /images/blog/five-constants-ens-2026.png
---

I do like reading new year predictions. They are a comforting genre. Predictions suggest that the future can be shaped by imagination, ready to be pointed in a direction by those confident enough to narrate it, or with the institutional credibility to make it so.

Over break I was re-reading Byung-Chul Han's *The Crisis of Narration* and was struck by how relevant it is as an explanation to why this genre is becoming less potent. He argues that modern life suffers from a loss of true storytelling, replaced instead by "storyselling."

I actually think that 2025 was the year where narratives became less convincing. Everyday internet users are more critically able to identify how narratives are constructed or contingent. Even if they are reflexively wrong – "this is AI slop;" "this is a psyop;" "someone should give the marketer a raise" – narratives have begun to lose their original power. Like information and the dollar, we are living with narrative inflation. Storyselling on every third scroll.

LLMs have multiplied the speed at which narratives can be recycled endlessly. Prediction markets have shown how even small groups can manipulate public opinion, and potentially future realities (or as Land would call them, "hyperstitions").

Perhaps in collective reaction, companies are attempting to hire "storytellers" because it's clear that people are losing patience with narratives that lack reality and meaning. a16z has even been rather transparently sharing their strategy on building a new media environment "to make certain futures feel inevitable by controlling the infrastructure through which we understand what's possible." (h/t @aaronjmars)

It's through this lens that I wanted to offer constants for ENS instead of predictions. What are the realities that have remained true for years and continue to compound, rather than narratives to sell the newly hyped thing? ENS does not need to constantly reinvent its story to justify its existence. It persists because like DNS for the internet, it's becoming the default onchain translation layer between humans and machines. It makes the ways in which value moves more legible. It provides a container for a multitude of onchain identities, human or code. So instead of attempting to sell a narrative about what ENS might become in 2026, this essay names a few constants that are already in motion.

## 1. The protocol is evolving.

ENSv2 arriving in 2026 is a culmination of years of rethinking ENS from first principles: how names can encapsulate not just a single address, but a growing constellation of identities: wallets, apps, social graphs, protocols, agents, and real-world assets. A dedicated zkEVM chain, Namechain, will make it cheaper for end users and organizations to manage names, not sacrifice the decentralizations and trust that building on Ethereum has afforded the protocol for 8 years. Namechain allow for more identity systems to come onchain without the higher fees of Ethereum Mainnet. There will be two new apps to support the management of names. We are so excited to unveil new experiences to help with the migration of your name in 2026, and for users to try the new features that the protocol enables.

## 2. ENS is providing namespace optionality.

ENSv2 acknowledges the reality that as more and more blockchains serve different purposes, as blockspace becomes more commodified, standards around naming and identity are even more important for making sense of this ever-branching onchain world. This largely has been made possible because of technologies like CCIP Read, which enabled names to delegate resolution across L2s, external databases, and even centralized systems. ENSv2 reduces CCIP Read latency, and, critically, makes it simpler for end users.

What this means in practice is that teams can use ENS to build out their own vision for identity or a namespace. Basenames used name.base.eth to give users and teams an identity on Base, but also one that prioritizes a user's onchain credibility through Talent Protocol's "Builder Score." Uniswap Wallet gives users free uni.eth subnames to name addresses in the onboarding flow, simply because it's a better user experience for end users to use a name instead of a long 0x address. Celo created Celonames with their own pricing model that allowed users to verify their real identity in order to claim a free name. New integrations with protocols like Doma mean that the traditional DNS domain world can bridge their domains to the onchain financial space.

Where some see identify fragmentation, we see optionality. ENS is more like SMTP (Simple Mail Transfer Protocol) than a standalone product. SMTP won because it defined a simple, extensible protocol that allowed anyone to build on top of it permissionlessly. Over decades, SMTP absorbed new features like attachments, spam filtering, and encryption without fragmenting into incompatible systems. ENS will only be the onchain naming standard if it can encompass the new ways in which users or contracts come onchain.

ICANN 85 will initiate a new round of applications for TLDs. Some of these may be successful, some will not, and it's likely the new TLDs don't even come online until 2028. Our goal as an organization is to make sure that registries and TLD operators also see value in collaborating with ENS to bring their TLDs onchain.

Does ENS' optionality diminish the value of a .eth 2ld? If anything, protocol flexibility means that names are more useful in more contexts, but also introduces users to the figurative and literal root of this ever-branching tree: the .eth name itself, which is still the most universally supported identity in wallets and apps.

## 3. ENS is supporting new use cases for identity.

There are many use cases for onchain and offchain identity that ENS can support. This year, governments will be beginning pilots using ENS subdomains for administering services. Increasingly, real world assets moving onchain will also need identification standards. As banking messaging networks begin exploring their own blockchains, they will need ENS to coordinate naming standards between financial institutions.

ENS can also serve as a coordination and trust layer for agentic commerce, where autonomous software agents transact, negotiate, and execute on behalf of humans and organizations. As these agents begin to interact across chains, institutions, and jurisdictions, they require stable, interoperable identities that are not tied to any single platform or API. ENS names can resolve to the contracts, payment routes, permissions, and service endpoints an agent is authorized to use, enabling agents to discover one another, authenticate intent, and transact programmatically in a human-readable and composable way. In this context, ENS extends beyond naming people and organizations to naming autonomous actors themselves, making emerging markets of software agents legible, auditable, and interoperable.

We are also excited about privacy getting renewed attention. One of the assumptions about ENS is that you publicly link a digital identity with your onchain transactions? However, with standards like stealth addresses, people can tie a public address to a human-readable ENS name and maintain anonymity. Fluidkey, a project focused on privacy-enhanced smart wallets uses ENS subnames and is a great option if you want to send or receive funds – or even onboard or offboard to a bank account – without leaking an account's transaction history.

## 4. ENS will continue to rely on its distribution through other apps.

In many ways, ENS' continued power is in its distribution. You can use your ENS name in most of the major crypto wallets, exchanges, and apps. You can use your ENS name in fintech apps like Venmo and PayPal.

> Use ENS to Venmo your friends PYUSD on Solana and Ethereum. If you have a Solana or Ethereum address connected to your ENS name, you can receive PayPal USD (PYUSD) via Venmo just like that.

The frontends that attract the most users will increasingly capture a larger share of the value onchain. Coinbase is a great example of this, by giving users access to onchain yields from Morpho or offering the Kalshi prediction market in-app. In 2026 when you're using the Base app to make a prediction or earn yield, you'll be using your Basename.

For ENS to continue being valuable, it will need more distribution through all the major fintech apps that are beginning to experiment with onchain offerings, like yield, tokenized equities, and prediction markets.

> The Fat App Thesis is Dead: Welcome to the Fat Distribution Era. Even crypto apps are commoditizing into interchangeable infrastructure for web2 and TradFi actors that own frontends users are already familiar with.

## 5. ENS will continue experimenting with new forms of social organization.

ENS is still, at its core, an experiment: an attempt to give individuals ownership of their presence on the web, governed not by a company, but by a protocol and a community of token holders who can opt in to shape its evolution. Over the past year, the very essence of the effectiveness of DAOs has been fervently debated. (No, I will not wade into the Aave Labs / Aave DAO debates). ENS has not escaped scrutiny either.

But if we zoom out a bit, we realize this tension is familiar. Humans have always tested new coordination mechanisms at the edges of existing systems. Merchant guilds invented shared standards to facilitate trade; cooperatives and credit unions redefined collective ownership. Open-source communities discovered, often painfully, how fragile voluntary coordination can be without shared norms. None of these arrangements were final forms. As one of my favorite anthropologists David Graeber wrote in *The Dawn of Everything*,

> "Is not the capacity to experiment with different forms of social organization itself a quintessential part of what makes us human? That is, beings with the capacity for self-creation, even freedom?"
