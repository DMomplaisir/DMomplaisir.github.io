---
title: "AI Watchdog"
description: "Technical Product Lead for The Atlantic's AI Watchdog - a high-visibility editorial destination tracking AI developments, built on an 8-week sprint with Elasticsearch powering search across 14M+ creative works"
tags: ["Product Engineering", "Technical Lead", "Elasticsearch", "Editorial"]
line_color: "blue"
date: 2025-09-01
featured: false
draft: false
tech_stack: ["Next.js", "React", "TypeScript", "Elasticsearch", "GraphQL"]
role: "Technical Product Lead"
impact: "7K+ unique visitors, 8-week sprint to launch, 14M documents indexed"
live_url: "https://www.theatlantic.com"
---

## The Brief

AI Watchdog needed to be a high-visibility editorial destination—a place where readers could track AI developments with The Atlantic's characteristic depth and perspective. The editorial team had ambitious interactive requirements: a searchable, filterable database of creative works affected by AI, with real-time exploration capabilities. We had 8 weeks to launch.

## My Role

I served as Technical Product Lead, owning the technical architecture and coordinating with Editorial, Product, and Design through an intensive sprint:

- **Architected the data pipeline**: Designed how 14M+ creative works would flow from Elasticsearch to the frontend
- **Built the search infrastructure**: Implemented aggregations, faceted search, and full-text search with relevance ranking
- **Continuous prototyping**: Shared working builds nightly, enabling rapid editorial feedback
- **Performance optimization**: Tuned queries to handle large result sets efficiently

## Technical Architecture

### Data Pipeline
The project required exposing a dataset of **14 million creative works** (deduplicated from ~30M with duplicate content) through an interactive UI. The architecture:

- **Cached aggregations + real-time search**: Pre-computed aggregations for fast dashboard loads, with live Elasticsearch queries for user searches
- **Custom index mappings**: Optimized field mappings for our specific query patterns (faceted filtering, full-text search)
- **Cursor-based pagination**: Efficient handling of large result sets without performance degradation

### Search Implementation
Built a filterable/searchable database UI with:

- **Aggregation pipelines**: Faceted search allowing users to filter by multiple dimensions simultaneously
- **Full-text search with ranking**: Relevance-tuned search across titles, descriptions, and metadata
- **Query result caching**: Cached frequent queries to reduce Elasticsearch load during traffic spikes

### Performance Optimization
With 14M documents, query performance was critical:

- **Index optimization**: Tuned shard counts, refresh intervals, and field mappings for read-heavy workloads
- **Query caching**: Implemented caching layer for repeated aggregations and common search patterns
- **Efficient pagination**: Cursor-based loading to handle deep pagination without performance cliffs

## What Made It Work

The architectural decisions we'd made for the Collections system paid off here. We could deliver an ambitious interactive experience without adding technical debt—the platform we'd built enabled rapid iteration.

**Agile development with editorial:** The continuous prototyping approach—sharing progress nightly—enabled a quicker feedback loop. Editorial could see their vision taking shape and course-correct in real-time.

## Results

**7K+ unique visitors** in the first weeks—one of our most-visited landing pages.

**8-week sprint** from kickoff to September 2025 launch.

**14M documents searchable** with sub-second query response times.

**No new technical debt**—leveraged existing Collections architecture for sustainable long-term maintenance.
