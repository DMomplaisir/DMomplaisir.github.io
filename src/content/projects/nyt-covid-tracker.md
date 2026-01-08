---
title: "NYT COVID-19 Data Infrastructure"
description: "Building scalable data infrastructure during the pandemic, triaging 30+ scrapers and migrating 2 million documents to support critical journalism"
tags: ["Python", "Data Engineering", "Infrastructure", "Public Health"]
line_color: "red"
date: 2020-06-15
featured: false
hero_image: "../../assets/images/projects/nyt-logo.png"
tech_stack: ["Python", "BeautifulSoup", "Pandas", "AWS", "GCP", "GitHub Actions"]
role: "Software Engineer"
impact: "Fixed/triaged 30+ scrapers, migrated 2M documents from AWS to GCP, enabled critical pandemic data journalism"
github_url: "https://github.com/nytimes/covid-19-data"
---

## Context

During the critical early months of the COVID-19 pandemic, The New York Times was racing to build data infrastructure that could track the virus's spread across thousands of jurisdictions. As public health data systems struggled to keep pace, reliable journalism depended on scalable, accurate data collection. This work was part of a larger team effort that contributed to the Times' Pulitzer Prize-winning pandemic coverage.

**Timeline:** June 2020 - November 2020
**Team:** NYT COVID-19 Data Team
**Scope:** Data scraping infrastructure, document migration, FOIA automation

## Challenge

The pandemic created unprecedented demand for real-time public health data, but sources were fragmented across thousands of government websites with inconsistent formats. The existing scraping infrastructure was breaking under the scale and complexity.

### Key Problems

1. **Scraper Maintenance at Scale**
   30+ scrapers required constant monitoring and fixes as government websites changed data formats

2. **Document Management**
   Millions of FOIA documents needed organized storage and conversion for analysis

3. **Infrastructure Migration**
   Need to migrate 2 million documents from AWS to GCP while maintaining data integrity

## Solution

Built and maintained critical data infrastructure supporting NYT's pandemic coverage:

- **Scraper Oncall**: Day-to-day work centered on scraper maintenance - government websites would change formats without warning, breaking our data pipelines. I was responsible for quickly diagnosing and fixing broken scrapers to ensure continuous data flow during critical news cycles. This meant understanding 30+ different scrapers, each with its own quirks and failure modes.
- **Building New Scrapers**: Beyond maintenance, I built new scrapers for additional data sources as the pandemic evolved and we needed to track new metrics and jurisdictions.
- **Modular Conversion Package**: Created reusable Python package for converting FOIA documents into standardized formats, reducing manual processing time
- **Large-Scale Migration**: Orchestrated migration of 2 million documents from AWS to GCP, implementing validation checks and maintaining zero data loss
- **Automation Infrastructure**: Built automated workflows for daily data collection, validation, and publication

## Impact

**30+ scrapers maintained** - Ensured reliable data collection from government sources during the most critical phase of the pandemic

**2 million documents migrated** - Successfully moved massive dataset to new infrastructure without service disruption

**Critical journalism enabled** - Data infrastructure supported hundreds of NYT articles and visualizations tracking the pandemic

**Public resource** - Contributed to [open-source dataset](https://github.com/nytimes/covid-19-data) used by researchers, policymakers, and journalists worldwide

## Technical Details

Infrastructure built primarily in Python with emphasis on reliability and maintainability. Scraping stack used BeautifulSoup and Pandas for data extraction and transformation. Migration project required careful orchestration between AWS and GCP services with comprehensive validation to ensure data integrity at scale.

*This project demonstrated the critical role of data engineering infrastructure in enabling urgent public service journalism.*
