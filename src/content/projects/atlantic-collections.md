---
title: "Collections System"
description: "Led a comprehensive CMS rearchitecture at The Atlantic, replacing legacy taxonomy pages with a flexible system now powering 200+ reader-facing pages - improving editorial agility and ad revenue potential"
tags: ["Product Engineering", "Full-Stack", "CMS", "Architecture"]
line_color: "blue"
date: 2025-03-01
featured: false
draft: false
tech_stack: ["Next.js", "React", "TypeScript", "GraphQL", "Django"]
role: "Technical Project Lead"
impact: "200+ reader-facing pages, 66+ PRs, replaced all legacy taxonomy systems"
live_url: "https://www.theatlantic.com"
---

## The Problem

The Atlantic's content organization system had grown organically over years. Sections, channels, projects - each taxonomy type had its own implementation, its own quirks, its own technical debt. Creating a new landing page meant custom development. Editors couldn't build the pages they needed without engineering involvement.

## The Solution

I authored the RFC and led implementation of a comprehensive CMS rearchitecture - a unified Collections system that replaced all legacy taxonomy pages with a flexible, scalable approach.

**The key insight:** All our taxonomies were variations of the same concept - a curated group of content with a landing page. Sections, channels, projects, special reports - they all needed the same capabilities. Why maintain separate systems?

## Technical Approach

The key architectural insight was **component composition combined with data model flexibility**. Rather than building rigid templates for each taxonomy type, I designed a system where:

**Composable Components**: Each page element (hero, article grid, featured content, navigation) became a reusable component that could be arranged in different configurations. Editors could mix and match without engineering involvement.

**Flexible Data Model**: The underlying Collection model was designed to be extensible. Whether it's a Section, Channel, Project, or Special Report, the same core data structure works - with optional fields that activate different behaviors.

This architecture paid dividends beyond the initial project. When we later built the AI Watchdog product, the Collections system's flexibility meant we could spin up a new content vertical with minimal engineering effort. The component composition pattern made it trivial to create a distinct visual identity while reusing the underlying infrastructure.

## Results

**200+ reader-facing pages** now powered by the Collections system.

**66+ pull requests** spanning the entire frontend suite over six months.

**"One model to rule them all"** - engineers can now abstract organizational structure into a single unified model.

**Advertising partners** have called the revitalized design "attractive" - the new layouts increase ad revenue potential.

**Editorial agility** - teams can now create and manage landing pages without engineering involvement.

---

*This case study is a work in progress.*
