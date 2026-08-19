<img width="1182" height="806" alt="image" src="https://github.com/user-attachments/assets/d67b699d-0ae5-42e6-b44e-93485794b515" />

**The Tor for P2P.**

Private by design. Community powered. Built for P2P.

AntTor is an open-source, community-operated privacy network for fast, decentralized, high-bandwidth peer-to-peer communication.

Inspired by Tor's architecture and philosophy, it's designed from the ground up around P2P traffic, distributed caching, parallel data retrieval, and adaptive routing — so private P2P networking feels like using a normal application.

> Install AntTor. Connect. Use your P2P application. Everything complicated happens underneath.

---

## 🌐 Why AntTor?

Tor pioneered decentralized anonymous routing. I2P built a powerful decentralized ecosystem. VPNs are easy but centralized. AntTor explores a different space: **a decentralized privacy network designed specifically for P2P.**

It isn't meant to replace Tor. It's meant to complement it.

- Use **Tor** for general-purpose anonymous internet access.
- Use **AntTor** when high-bandwidth P2P communication is the problem you're trying to solve.

---

## ✨ Core Features

- 🛡️ **Privacy by design** — multi-hop routing minimizes what any individual node can learn
- ⚡ **Performance focused** — routing weighs latency, bandwidth, congestion, geography, and node health
- 🧩 **Distributed chunking** — large objects split into independently verifiable chunks
- 💾 **Distributed cache** — popular data cached closer to users, adapting to demand
- 🔄 **Parallel retrieval** — chunks fetched simultaneously, resumable and verifiable
- 🧱 **Failure resistant** — nodes can vanish without taking the network down
- 🆓 **One tier** — the core network is intended to remain free to use
- 🧠 **Simple UX** — users never need to understand the underlying technology
- 📱 **Any device** — installs on phones, laptops, desktops, routers, NAS, and servers

---

## 🧠 The Big Idea

AntTor combines two cooperating networks:

1. 🛡️ **Routing network** — `Entry → Relay → Relay → Exit → Destination`
   The privacy layer: *how does this communication travel privately?*
2. ⚡ **Cache network** — `Chunk → Chunk → Chunk → Chunk`
   The performance layer: *how does this communication travel efficiently?*

---

## 🛠️ Status

AntTor is an ambitious project, built incrementally. It's currently in the early research and specification phases — threat model, protocol design, and node architecture — and is **not production-ready yet**.

---

## 📚 Learn More

This README is intentionally short. AntTor has a lot of moving parts, and the deep dives live in the [AntTor Wiki](https://github.com/CrossbowCraft13/AntTor/wiki).

**What's in the wiki:**

- 🔐 Privacy model & threat model — what AntTor protects against, what's conditional, and what it can't
- 🧅 Layered routing & intelligent circuit construction
- 🧩 Node roles — client, relay, cache, exit, and bridge
- 🧬 Distributed data layer — chunking, content addressing, Merkle verification
- 💾 Distributed caching — cold/warm/hot, ephemerality, and resource fairness
- 📺 Streaming & failure recovery
- 🛠️ Full development roadmap
