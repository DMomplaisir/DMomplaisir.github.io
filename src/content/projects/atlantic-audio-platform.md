---
title: "The Atlantic Audio Platform"
description: "Building scalable audio infrastructure serving millions of listeners, more than doubling article play rates (100%+ increase) through a custom React player and platform modernization"
tags: ["Product Engineering", "Full-Stack", "Next.js", "Audio", "Infrastructure"]
line_color: "blue"
date: 2026-01-07
featured: true
tech_stack: ["Next.js", "React", "TypeScript", "GraphQL", "Django", "AWS"]
role: "Software Engineer"
impact: "100%+ increase in article play rates, built custom React player from scratch, migrated platform to Next.js/GraphQL, shipped Holy Week digital experience"
live_url: "https://www.theatlantic.com"
---

## Context

At The Atlantic since June 2021, I've focused on building and scaling audio infrastructure that serves millions of listeners while modernizing the technical stack powering the publication's digital presence. The work spans from low-level audio engineering to high-touch product experiences.

**Timeline:** June 2021 - Present (4+ years)
**Team:** Product Engineering, working cross-functionally with editorial, design, and audio teams
**Scope:** Audio infrastructure, platform migration, product development

## Challenge

The Atlantic needed to modernize its technical infrastructure while dramatically improving audio engagement. The existing audio player was a gnarly third-party embed that created multiple problems: slow load times, limited analytics capabilities, and no ability to build the features readers wanted. The Django-based system underneath was limiting product velocity.

### Key Problems

1. **Audio Engagement Below Potential**
   Article audio play rates were significantly below target despite growing listener demand. The third-party embed didn't allow for good analytics, making it hard to understand user behavior or optimize the experience.

2. **Third-Party Player Limitations**
   The existing embed was slow to load and didn't integrate well with our analytics stack. We had no visibility into how users were actually engaging with audio content.

3. **Legacy Architecture Limiting Velocity**
   Django-based system made shipping new features slow and difficult, particularly for high-touch surfaces

4. **Platform Fragmentation**
   Need to maintain consistent experiences across web, mobile, and emerging platforms

## Solution

Led multiple parallel initiatives modernizing The Atlantic's technical platform and audio infrastructure:

- **Custom React Player from Scratch**: Built a native audio player in React to replace the gnarly third-party embed. Key features include variable playback speed, cross-platform sync (so listeners can pick up where they left off), and deep analytics integration. This gave us full control over the experience and the data.
- **Next.js/GraphQL Migration**: Led migration of high-touch surfaces from Django to Next.js and GraphQL, enabling faster development velocity and better performance
- **[Holy Week Digital Experience](https://www.theatlantic.com/podcasts/holy-week/)**: Shipped immersive digital experience for Holy Week podcast, combining audio with interactive storytelling. This project set a pattern for similar editorial experiences that followed.
- **Cross-Platform Development**: Maintained consistency across web, mobile, and emerging platforms while iterating rapidly

## Impact

**100%+ increase in article play rates** - More than doubled audio engagement through a combination of better discovery and placement plus the new custom player infrastructure enabling a better cross-platform experience.

**Faster product velocity** - Next.js migration enabled significantly faster iteration cycles for new features and experiments

**Scalable infrastructure** - Platform now reliably serves millions of monthly listeners with dramatically improved performance over the old third-party embed

**Editorial impact** - [Holy Week](https://www.theatlantic.com/podcasts/holy-week/) digital experience showcased new possibilities for immersive audio journalism and inspired follow-on projects using similar patterns

## Technical Details

The platform modernization involved migrating critical surfaces from Django to Next.js with GraphQL data layer, providing better performance and developer experience.

The audio infrastructure work centered on building the custom React player from scratch. The third-party embed we replaced had been a constant source of friction - slow load times, no real analytics integration, and no way to build features like variable playback speed or cross-platform sync. The new player gave us complete control: we could instrument every interaction, optimize load performance, and build the features that actually mattered to listeners.

The engagement improvement came from multiple factors working together: better placement and discovery (editorial and design work), plus the technical infrastructure that made audio faster to load and easier to use across devices. Having our own player meant we could finally understand how people were actually using audio content and iterate based on real data.

*This ongoing work demonstrates full-stack engineering, infrastructure design, and product leadership in a high-scale journalism environment.*
