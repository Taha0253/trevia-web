export type ResourceCategory = 'technical' | 'industry' | 'trevia';

export type ResourceBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; language: string; code: string };

export interface Resource {
  slug: string;
  category: ResourceCategory;
  badge: string;
  title: string;
  description: string;
  publishedDate: string;
  readingTime: string;
  author: string;
  protocolVersion?: string;
  body: ResourceBlock[];
}

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  technical: 'Technical',
  industry: 'Industry',
  trevia: 'Trevia',
};

export const RESOURCES: Resource[] = [
  {
    slug: 'understanding-ocpp-1-6j',
    category: 'technical',
    badge: 'Technical Guide',
    title: 'Understanding OCPP 1.6J: How Chargers Communicate with a CMS',
    description: 'A practical walkthrough of how OCPP 1.6J lets a charge point and a central system talk to each other over a persistent connection.',
    publishedDate: '2026-02-03',
    readingTime: '6 min read',
    author: 'Trevia Team',
    protocolVersion: 'OCPP 1.6J (JSON over WebSocket)',
    body: [
      { type: 'p', text: 'OCPP (Open Charge Point Protocol) is the open standard most charging hardware vendors support to let a charger talk to a central management system (CMS). The 1.6J variant carries OCPP 1.6 messages as JSON over a persistent WebSocket connection, which is what makes real-time monitoring and remote commands possible in the first place.' },
      { type: 'h2', text: 'The connection' },
      { type: 'p', text: 'When a charger powers on, it opens a WebSocket connection to a CMS endpoint and keeps it alive with periodic heartbeats. As long as that connection stays open, the CMS can see the charger’s status in real time and the charger can push events — like the start or end of a charging session — the moment they happen.' },
      { type: 'h2', text: 'What gets exchanged' },
      { type: 'list', items: [
        'BootNotification — sent when a charger connects, identifying its model and firmware.',
        'Heartbeat — a periodic signal that keeps the connection alive and confirms the charger is still online.',
        'StatusNotification — reports connector-level state changes (Available, Preparing, Charging, Faulted, and so on).',
        'StartTransaction / StopTransaction — marks the beginning and end of a charging session, with meter values attached.',
        'RemoteStartTransaction / RemoteStopTransaction — lets a CMS initiate or end a session on a supported charger.',
      ] },
      { type: 'h2', text: 'Why this matters for operators' },
      { type: 'p', text: 'Because OCPP 1.6J is an open, widely supported standard, a CMS built against it can connect to chargers from different hardware vendors without a custom integration for each one. That is the basic mechanism that makes a multi-vendor operating layer possible — it is not a Trevia-specific protocol, it is the shared language the industry already uses.' },
      { type: 'code', language: 'json', code: '{\n  "action": "StatusNotification",\n  "payload": {\n    "connectorId": 1,\n    "status": "Charging",\n    "errorCode": "NoError",\n    "timestamp": "2026-02-03T10:15:00Z"\n  }\n}' },
    ],
  },
  {
    slug: 'multi-vendor-charging-operating-layer',
    category: 'industry',
    badge: 'Industry Insight',
    title: 'Why Multi-Vendor Charging Infrastructure Needs an Operating Layer',
    description: 'As charging networks grow past a single hardware vendor, the operational cost shifts from installing chargers to running them consistently.',
    publishedDate: '2026-02-10',
    readingTime: '5 min read',
    author: 'Trevia Team',
    body: [
      { type: 'p', text: 'Most charging networks do not start out multi-vendor. An operator installs chargers from whichever manufacturer fit the first site, then adds a second vendor for the next site — often because of pricing, lead times, or a specific hardware requirement. That is a reasonable way to grow a network. It is a much harder way to operate one.' },
      { type: 'h2', text: 'Where the fragmentation shows up' },
      { type: 'p', text: 'Each hardware vendor typically ships its own portal for monitoring and managing its own chargers. Once a network spans two or three vendors, operations staff end up switching between separate dashboards to answer basic questions: which chargers are online right now, which ones are mid-session, and which ones need a technician.' },
      { type: 'h2', text: 'What an operating layer changes' },
      { type: 'p', text: 'A charging management system (CMS) that connects to hardware through an open standard like OCPP sits between the chargers and the operator, regardless of which vendor built the hardware. That gives operators one place to see charger status, sessions and faults across the network, rather than one view per vendor.' },
      { type: 'list', items: [
        'One dashboard for charger status and connectivity across vendors.',
        'One place to see active and completed charging sessions.',
        'One workflow for remote operations, where the connected hardware supports it.',
      ] },
      { type: 'p', text: 'This is not a claim that any single platform replaces the need to understand each hardware vendor’s quirks — firmware differences and edge cases still exist. It is a claim that the operational layer, not the hardware layer, is where multi-vendor networks actually get harder to run, and where a shared operating system pays off.' },
    ],
  },
  {
    slug: 'ocpp-apis-charging-software-stack',
    category: 'technical',
    badge: 'Technical Explainer',
    title: 'OCPP, APIs and the EV Charging Software Stack',
    description: 'A short map of the layers between a physical charger and the applications that depend on its data — and where each protocol fits.',
    publishedDate: '2026-02-17',
    readingTime: '4 min read',
    author: 'Trevia Team',
    protocolVersion: 'OCPP 1.6J · REST / Webhooks',
    body: [
      { type: 'p', text: 'It helps to think of the EV charging software stack as three layers, each talking to the next through a different interface.' },
      { type: 'h2', text: 'Layer 1 — Charging infrastructure' },
      { type: 'p', text: 'The physical chargers themselves: AC, DC fast, and depot hardware from whichever vendors an operator has deployed. This layer speaks OCPP.' },
      { type: 'h2', text: 'Layer 2 — The operating layer (CMS)' },
      { type: 'p', text: 'A charging management system connects to supported chargers over OCPP, and is responsible for turning raw charger events into something operationally useful: live status, session records, and fault visibility.' },
      { type: 'h2', text: 'Layer 3 — Applications & integrations' },
      { type: 'p', text: 'The systems that consume that data — driver-facing apps, fleet and enterprise systems, reporting tools — typically talk to the CMS through REST APIs and webhooks rather than OCPP directly. This is what lets a CMS expose charging and session data to other software without every downstream system needing to understand the charger protocol itself.' },
      { type: 'code', language: 'text', code: 'Chargers  --OCPP 1.6J-->  CMS  --REST / Webhooks-->  Applications' },
      { type: 'p', text: 'Keeping these layers distinct is what lets each one evolve independently: hardware vendors can update firmware, the CMS can add operational features, and integrating systems can build against a stable API — without every change rippling through the whole stack.' },
    ],
  },
];
