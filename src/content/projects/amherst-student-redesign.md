---
title: "Amherst Student: Digital Transformation"
description: "Redesigning a 150-year-old college newspaper's digital presence, achieving 733% increase in readership through modern tech stack and machine learning"
tags: ["Web Development", "Next.js", "Machine Learning", "Journalism"]
line_color: "orange"
date: 2020-06-15
featured: true
hero_image: "../../assets/images/projects/amhstu-logo.png"
tech_stack: ["Next.js", "React", "Python", "Machine Learning", "Drupal"]
role: "Digital Director"
impact: "733% increase in readership (1,200 to 10,000 monthly users), 85-90% newsletter read rates"
live_url: "https://amherststudent.com"
---

## Context

The Amherst Student, founded in 1868, is one of the nation's oldest college newspapers. As Digital Director from 2018-2021, I led the complete digital transformation of the publication, growing readership from 1,200 to 10,000 monthly users while directly managing a mixed-discipline team of six - CS students learning web development, designers, and writers - focused on digital strategy.

**Timeline:** June 2018 - June 2021
**Team:** Six-person mixed-discipline team (developers, designers, writers)
**Scope:** Full platform migration, ML-powered archival system, newsletter strategy, team training

## Challenge

How do you modernize a 150-year-old institution's digital presence while making decades of archival content discoverable and maintaining editorial excellence?

### Key Problems

1. **Legacy Technology Stack**
   Drupal-based CMS was difficult to maintain and limited our ability to ship new features quickly

2. **Archival Content Inaccessible**
   150 years of journalism was trapped in legacy systems with no effective way for readers to discover historical articles

3. **Declining Digital Engagement**
   Traditional college newspaper model wasn't resonating with modern student readership patterns

4. **Traffic Spikes and Reliability**
   When news broke - like Jeff Sessions' campus visit that drove 30,000 hits in a single day - the legacy infrastructure couldn't handle the load

## Solution

Complete platform modernization with focus on performance, discoverability, and editorial workflow:

- **Next.js Migration**: Transitioned from Drupal to Next.js/React for faster development velocity and better performance
- **NLP Classification for Archives**: Implemented topic modeling and classification using natural language processing to power recommendations, enabling readers to discover relevant archival content based on article topics and themes
- **Newsletter Strategy**: Built high-engagement newsletter program achieving 85-90% read rates through targeted content and segmentation
- **Editorial Tools**: Created streamlined publishing workflow reducing friction for student journalists
- **Caching Strategy**: Implemented caching to handle traffic spikes - lessons learned after our infrastructure buckled under 30K hits during breaking news
- **Team Training & Mentorship**: Led training initiatives teaching non-technical team members digital skills, from basic CMS usage to understanding analytics and SEO
- **Process Improvements**: Established workflows for how the team collaborated across disciplines - editorial, design, and development working together more effectively

## Impact

**733% increase in readership** - Grew from 1,200 to 10,000 monthly users through improved UX and content strategy

**85-90% newsletter read rates** - Far exceeding industry averages through targeted content and engaged audience

**Archival content discovery** - NLP-powered topic classification made 150 years of journalism accessible and relevant to modern readers

**Team leadership** - Directly managed six-person mixed-discipline team, leading training and mentorship initiatives that helped non-technical members develop digital skills

## Technical Details

The Next.js migration provided dramatic improvements in page load times and developer experience.

The recommendation system used NLP classification - specifically topic modeling and classification - rather than vector search. Articles were analyzed and categorized by topic, allowing the system to surface related archival content when readers engaged with current stories. When reading about campus housing policy in 2020, the system could surface relevant articles from the 1990s or earlier that covered similar themes.

*This project demonstrated how modern web technology and NLP can breathe new life into legacy journalism institutions.*
