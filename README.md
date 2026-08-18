🐜 AntTor

The Tor for P2P.

Private by design. Community powered. Built for P2P.

AntTor is an open-source, community-operated privacy network designed specifically for fast, decentralized, high-bandwidth peer-to-peer communication.

Inspired by the architecture and philosophy of Tor, AntTor explores a different problem: what would a privacy network look like if it were designed from the beginning around P2P traffic, distributed caching, parallel data retrieval, adaptive routing, and performance?

The goal is simple:

«Make private P2P networking as easy as using a normal application.»

Install AntTor. Connect. Use your P2P application.

Everything complicated happens underneath.

---

🌐 Why AntTor?

The Internet has excellent privacy tools, but each comes with different tradeoffs.

Tor pioneered decentralized anonymous routing and remains one of the most important privacy projects ever created.

I2P provides a powerful decentralized privacy ecosystem, particularly for applications designed around its network.

Traditional VPNs are easy to use and can provide strong protection from local network observers, but typically rely on centralized infrastructure and require users to trust a provider.

AntTor explores a different space:

🐜 A decentralized privacy network designed specifically for P2P.

The goal isn't to replace Tor.

It's to complement it.

Use Tor when you want general-purpose anonymous Internet access.

Use AntTor when high-bandwidth P2P communication is the problem you're trying to solve.

---

✨ Core Features

Feature| Description
🛡️ Privacy by Design| Multi-hop routing designed to minimize what any individual node can learn
🌎 Community Powered| Anyone can contribute relays, cache capacity, bandwidth, or infrastructure
🐜 Decentralized Architecture| No single server is intended to carry the entire network
⚡ Performance Focused| Routing considers latency, bandwidth, congestion, geography, and node health
🧩 Distributed Chunking| Large objects can be split into independently verifiable chunks
💾 Distributed Cache| Popular data can be temporarily cached closer to users
🔐 Cryptographic Verification| Chunks can be independently verified before being accepted
🔄 Parallel Retrieval| Multiple chunks can be retrieved simultaneously
📺 Streaming Ready| Designed toward rolling buffers and predictive prefetching
🧭 Adaptive Routing| Circuits can adapt to network conditions and application requirements
🧱 Failure Resistant| Individual nodes can disappear without necessarily taking the network down
🆓 One Tier| The core network is intended to remain free to use
🔓 Open Source| Protocols, architecture, security assumptions, and limitations are intended to be public
🧠 Simple UX| Users shouldn't need to understand the underlying networking technology

---

🐜 The Anthill Philosophy

The name AntTor comes from the way ants work.

No individual ant needs to understand the entire colony.

No individual ant needs to carry the entire workload.

Thousands of small actions combine into something much larger and more resilient than any single participant.

AntTor applies the same philosophy to network infrastructure.

       🐜        🐜
          🐜  🐜
     🐜            🐜
          🐜  🐜
       🐜        🐜

       MANY INDEPENDENT
          WORKERS

              ↓

       ONE RESILIENT
          NETWORK

Nodes can join.

Nodes can leave.

Nodes can fail.

Cache replicas can disappear.

Routes can change.

The system should continue functioning because no individual worker is essential.

---

🧠 The Big Idea

AntTor is not simply a VPN with a different interface.

It is intended to combine two cooperating networks:

┌────────────────────────────────────────────────────┐
│                   🛡️ ROUTING NETWORK               │
│                                                    │
│     Entry → Relay → Relay → Exit → Destination    │
│                                                    │
│                 Privacy Layer                     │
└────────────────────────┬───────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────┐
│                    ⚡ CACHE NETWORK                 │
│                                                    │
│     Chunk → Chunk → Chunk → Chunk → Chunk          │
│                                                    │
│          Distributed Performance Layer             │
└────────────────────────────────────────────────────┘

The routing layer answers:

«How can this communication travel privately?»

The cache layer answers:

«How can this communication travel efficiently?»

Together, they create the foundation of AntTor.

---

🔐 Privacy Layer

AntTor takes inspiration from Tor's multi-hop routing model.

A simplified circuit can look like:

👤 USER
  │
  ▼
🟢 ENTRY
  │
  ▼
🔵 RELAY
  │
  ▼
🟣 EXIT
  │
  ▼
🌐 DESTINATION

The architecture is designed so that different nodes have different views of a connection rather than giving one centralized provider complete knowledge of the user's activity.

The ISP or local network observer may be able to see that a user is communicating with AntTor infrastructure.

The goal is that they should not ordinarily be able to determine the user's P2P destination through ordinary traffic inspection.

Likewise, an individual relay should not automatically possess enough information to reconstruct the complete communication.

Important

AntTor will not claim that it provides magical or absolute anonymity.

Traffic correlation, compromised nodes, endpoint behavior, application-level metadata, user mistakes, and other attacks can still exist.

The project's threat model will explicitly document:

- 🟢 What AntTor protects against
- 🟡 What protection is conditional
- 🔴 What AntTor cannot protect against

Privacy claims should be earned through engineering, testing, and review.

---

🧅 Layered Routing

The project is inspired by the principle behind Tor's layered routing: different pieces of the network should know different pieces of information.

Conceptually:

User
 │
 │ knows own connection
 ▼
Entry
 │
 │ knows the circuit
 ▼
Relay
 │
 │ knows adjacent routing information
 ▼
Exit
 │
 │ knows destination-side connection
 ▼
Internet

The exact protocol and cryptographic construction will be formally specified before production claims are made.

AntTor will use established cryptographic primitives rather than attempting to invent its own cryptography.

---

🚦 Intelligent Circuit Construction

Not every application needs the same network.

A file transfer may prioritize:

Bandwidth + reliability

An interactive application may prioritize:

Latency + stability

Streaming may prioritize:

Sustained bandwidth + low latency + predictable throughput

AntTor's client can therefore evaluate available nodes using factors such as:

- 📍 Geographic proximity
- ⚡ Latency
- 📡 Available bandwidth
- 📊 Current load
- 🟢 Uptime
- 🔧 Node capabilities
- 🌐 Network conditions
- 🛡️ User privacy requirements

A node might advertise:

🐜 AntTor Node
────────────────────────
Role: Relay
Region: North America
Bandwidth: 1 Gbps
Latency: 18 ms
Uptime: 99.4%
Load: 23%

Capabilities:
✓ Relay
✓ P2P
✓ High Bandwidth
✓ Streaming

The client can use this information to construct a route appropriate for the task.

---

🧩 Node Roles

AntTor is designed around several voluntary node roles.

👤 Client

The default user.

Clients consume the network without contributing infrastructure.

No contribution is required to use AntTor.

---

🔵 Relay

Relays forward encrypted traffic between other parts of the network.

Their primary contribution is:

- Bandwidth
- Connectivity
- Availability

---

💾 Cache Node

Cache nodes temporarily store encrypted chunks of distributed data.

They primarily contribute:

- Storage
- Bandwidth
- Availability

Cache nodes should have configurable limits and automatic expiration.

---

🟣 Relay + Cache

A more powerful node can perform both roles.

This allows participants with more capable systems to contribute more to the network.

---

🔴 Exit Node

Exit nodes connect AntTor to destinations outside the network.

Because exits interact directly with the public Internet, they are a particularly sensitive role and should be explicitly opt-in with appropriate safeguards.

---

🌉 Bridge

Bridges help users connect to AntTor when direct access to the public network is difficult.

---

🧬 Distributed Data Layer

This is where AntTor begins to differ significantly from traditional anonymity networks.

Large objects can be represented as independently verifiable chunks:

📦 OBJECT

├── 🧩 Chunk 001 → A7F2...
├── 🧩 Chunk 002 → 91BC...
├── 🧩 Chunk 003 → 44D1...
├── 🧩 Chunk 004 → E82A...
└── 🧩 Chunk 005 → 6C19...

Instead of requiring a single node to possess the entire object, chunks can be distributed across multiple participating nodes.

The client can retrieve them simultaneously.

        🧩 C1 ──────►
        🧩 C2 ──────►
USER    🧩 C3 ──────►  🧠 ASSEMBLE
        🧩 C4 ──────►
        🧩 C5 ──────►

This enables:

- ⚡ Parallel downloads
- 🔄 Resumable transfers
- 🛡️ Failure recovery
- 🔐 Integrity verification
- 💾 Distributed caching
- 🌎 Geographic locality
- 📉 Reduced dependence on a single source

---

🔑 Content Addressing

Chunks should be identified using cryptographically derived content identifiers wherever practical.

Conceptually:

Chunk
  │
  ▼
Cryptographic Hash
  │
  ▼
Chunk ID

If two users request the same chunk, the network can recognize that they are requesting identical content without requiring a centralized naming system.

This also provides integrity verification.

If a node claims to have a chunk but the received data doesn't match its expected identifier:

❌ Reject it.

The client should independently verify data rather than blindly trusting cache nodes.

---

🌳 Merkle-Based Verification

AntTor can use Merkle-tree-style structures to describe how chunks form larger objects.

                  🌳 ROOT
                 /       \
              HASH       HASH
             /   \       /   \
           C1     C2    C3     C4

This provides efficient verification while allowing chunks to remain independently retrievable.

A malicious node should not be able to silently modify a chunk and have the altered data accepted as authentic.

---

💾 Distributed Caching

AntTor's cache is designed to make the network faster as more people use it.

When something has never been requested:

🧊 Cold

Origin
  ↓
AntTor
  ↓
Chunking
  ↓
Distributed Cache
  ↓
User

The initial request retrieves the data from its source and makes verified chunks available to the cache network according to its policies.

Once requested:

🌡️ Warm

Cache A ───┐
Cache B ───┼──► Users
Cache C ───┘

As demand increases:

🔥 Hot

             Cache A
            /       \
       Cache B     Cache C
        /   \       /   \
      👤    👤     👤    👤

Popular chunks can be replicated closer to demand.

The objective is a self-optimizing distributed cache that adapts to the network rather than relying on a centralized CDN.

---

🐜 Moving the Cache

AntTor should not require every chunk to permanently live on a specific node.

Instead, the network can move and replicate availability based on demand.

          High Demand
               ↓

Node A ──► Node B ──► Node C
            │
            └────► Node D

As demand disappears:

Replica expires
      ↓
Cache space reclaimed

This allows the network to continuously adapt to where users actually are.

---

📺 Streaming

One of AntTor's most ambitious goals is supporting high-bandwidth streaming.

Streaming should not require an entire object to download before playback begins.

Instead, AntTor can maintain a rolling buffer:

         🎬 PLAYBACK
              │
              ▼
┌──────────────────────────────┐
│ ███████████████              │
│ Current Buffer               │
└──────────────────────────────┘
              │
              ▼
        ⚡ PREFETCH
              │
              ▼
      Future Chunks

While the user is watching one section, the network can retrieve and verify future chunks in advance.

If one cache becomes slow:

Switch sources.

If one node disappears:

Find another replica.

If demand increases:

Replicate closer to users.

The long-term goal is a P2P privacy network capable of supporting continuous, high-bandwidth applications.

Streaming is an ambitious target and will not be considered production-ready until the underlying network can reliably sustain it.

---

🔄 Failure Recovery

AntTor assumes nodes will fail.

A relay may disconnect.

A cache may disappear.

A node may become overloaded.

A user's network connection may change.

The network should be designed so that individual failures do not automatically become system failures.

For example:

Chunk 1 → Node A
Chunk 2 → Node B
Chunk 3 → Node C ❌
Chunk 4 → Node D

The system can locate another source for Chunk 3:

Chunk 3 → Node F ✅

Continue.

No worker should be essential to the colony.

---

🧹 Ephemeral Caching

Cache participation should not turn someone's computer into a permanent distributed file server.

Users should control their resources.

Potential settings include:

💾 Cache Storage

○ Disabled
○ 1 GB
○ 10 GB
○ 50 GB
○ 100 GB
○ Custom

and:

⏱️ Maximum Cache Age

○ 1 hour
○ 6 hours
○ 24 hours
○ 7 days
○ Custom

Cache entries should automatically expire or be evicted according to network and user policies.

The goal is temporary network infrastructure, not permanent archives.

---

⚖️ Resource Fairness

A decentralized network still needs congestion control.

AntTor should not attempt to decide whether someone's intentions are "good" or "bad."

Instead, it should manage measurable resource consumption.

Potential mechanisms include:

- 📡 Bandwidth limits
- 🔌 Connection limits
- 💾 Cache quotas
- 🚦 Congestion control
- ⚖️ Fair-use scheduling
- ⏱️ Circuit limits
- 📊 Node load management
- 🔄 Adaptive routing

The objective is simple:

«Keep the anthill healthy.»

---

🌎 Geographic Awareness

The network should understand where nodes are located at a coarse level without requiring precise user location information.

Geographic information can help optimize:

- Latency
- Bandwidth
- Cache placement
- Circuit construction
- Streaming performance
- Failure recovery

The goal is not to make the network centralized around geography.

The goal is to use geography as one input among many when deciding how data should move.

---

🛡️ Privacy vs Performance

AntTor intentionally treats privacy and performance as separate but cooperating concerns.

                 PRIVACY
                    ▲
                    │
                    │
                    │
                    └──────────────► PERFORMANCE

More hops can increase privacy properties but may introduce latency.

More aggressive caching can improve performance but requires careful privacy analysis.

Longer-lived cache objects may improve availability but require stronger lifecycle controls.

These tradeoffs will be measured rather than hidden.

The objective is not to maximize one metric while ignoring the others.

The objective is:

Useful privacy.

A network that is perfectly private but unusably slow will not serve the people it was designed for.

A network that is extremely fast but exposes users' activity defeats its purpose.

AntTor aims to find the engineering balance.

---

🆓 One Tier

AntTor is intended to remain free to use.

There is no planned:

❌ Premium privacy

❌ Faster privacy

❌ Paid anonymity

❌ Subscription-only nodes

❌ Bandwidth paywall for basic access

The network is community infrastructure.

People can use it.

People can contribute to it.

People can build on it.

---

💰 Funding

The core concept does not require advertising.

Community-operated infrastructure allows the network to grow organically as participants contribute resources.

However, advertising or other non-invasive funding mechanisms may eventually be considered for optional infrastructure operated by the project, such as dedicated high-bandwidth servers, development infrastructure, testing environments, or other costs that cannot reasonably be supplied by volunteers.

If advertising is ever used, it should remain completely separate from user network activity.

AntTor should never need to inspect a user's P2P traffic to serve an advertisement.

Privacy is not the product being sold.

---

🧩 Application Support

AntTor is intended to remain protocol-agnostic.

Potential applications include:

- 🧲 P2P file transfer
- 🌐 Decentralized applications
- 📦 Open-source software distribution
- 🗄️ Distributed storage
- 📊 Public datasets
- 🎮 P2P applications
- 🎬 Authorized P2P media
- 📺 Streaming
- 🔗 Other decentralized protocols

BitTorrent-style applications are an important motivating use case, but the core network should not become permanently tied to a single protocol.

---

🎬 Streaming Integrations

A long-term objective is integration with applications that rely heavily on P2P retrieval.

This could eventually include media applications such as Stremio and compatible P2P providers.

The intended experience would be simple:

Install AntTor
      ↓
Connect
      ↓
Open supported application
      ↓
P2P traffic uses AntTor
      ↓
Enjoy

No manual routing configuration should be necessary for ordinary users.

This is intentionally a later milestone.

The underlying network must first demonstrate strong security, reliability, privacy properties, and sufficient performance.

---

🧠 Client Experience

AntTor should hide complexity without hiding important information.

A normal user should see something as simple as:

╭──────────────────────────────╮
│                              │
│          🐜 AntTor           │
│                              │
│        ● CONNECTED           │
│                              │
│      Private P2P Network     │
│                              │
│      ⚡ 412 Mbps             │
│      🛡️ 3-Hop Circuit        │
│      🌎 24 ms latency        │
│                              │
│         [ CONNECT ]          │
│                              │
╰──────────────────────────────╯

Advanced users can inspect the network.

Ordinary users don't have to.

---

🛠️ Development Roadmap

AntTor is an ambitious project and will be built incrementally.

🔬 Phase 0 — Research & Specification

Define the foundations before building the full network.

- [ ] Threat model
- [ ] Privacy model
- [ ] Node architecture
- [ ] Cryptographic identity
- [ ] Protocol specification
- [ ] Circuit construction
- [ ] Chunk model
- [ ] Cache model
- [ ] Performance requirements

---

🧪 Phase 1 — Local Prototype

Build the smallest functional network.

- [ ] Node identity
- [ ] Encrypted connections
- [ ] Basic discovery
- [ ] Two-node communication
- [ ] Multi-node communication
- [ ] Failure detection

---

🌐 Phase 2 — Multi-Hop Network

Introduce the privacy routing layer.

- [ ] Entry nodes
- [ ] Relay nodes
- [ ] Exit nodes
- [ ] Circuit construction
- [ ] Layered encryption
- [ ] NAT traversal
- [ ] Connection recovery

---

🐜 Phase 3 — Community Nodes

Allow independent participants to operate infrastructure.

- [ ] Node installer
- [ ] Node configuration
- [ ] Resource limits
- [ ] Capability advertisement
- [ ] Health reporting
- [ ] Relay management
- [ ] Exit configuration

---

🧩 Phase 4 — Distributed Chunk Transport

Introduce the data layer.

- [ ] Content addressing
- [ ] Chunk manifests
- [ ] Integrity verification
- [ ] Parallel retrieval
- [ ] Resumable transfers
- [ ] Chunk discovery
- [ ] Failure recovery

---

💾 Phase 5 — Distributed Cache

Turn the network into a distributed cache.

- [ ] Temporary caching
- [ ] Replication
- [ ] Cache expiration
- [ ] Storage quotas
- [ ] Locality-aware caching
- [ ] Cache discovery
- [ ] Demand-based replication

---

⚡ Phase 6 — Intelligent Routing

