# Website Assets

This directory contains all the assets for the website, including CSS, JavaScript, images, and other resources.

## CSS Structure

The CSS is organized in a modular way to improve maintainability and reduce duplication:

### Core Files

- `variables.css` - Single source of truth for all CSS variables (colors, spacing, typography, etc.)
- `shared.css` - Base styles that apply to all pages (typography, layout, utilities)

### Component-Specific Files

- `navigation.css` - Styles for the site navigation
- `header_styles.css` - Styles for different header variants

### Page-Specific Files

- `index.css` - Styles specific to the homepage
- `aboutme.css` - Styles specific to the about page
- `projects.css` - Styles specific to the projects listing and detail pages
- `blog.css` - Styles specific to the blog listing page
- `post.css` - Styles specific to individual blog posts
- `contactme.css` - Styles specific to the contact page

## JavaScript Structure

JavaScript is organized by functionality:

- `header.js` - Handles header collapse/expand behavior on scroll
- `navigation.js` - Handles mobile navigation menu toggle

## Usage Guidelines

### Adding New CSS

1. Use variables from `variables.css` for consistency
2. Add page-specific styles to the appropriate page CSS file
3. Add shared styles to `shared.css`

### Adding New JavaScript

1. Create a new file for each distinct functionality
2. Include the file in the appropriate layout templates

## Dark Mode Support

Dark mode is implemented using CSS media queries in `variables.css`. To ensure proper dark mode support:

1. Always use CSS variables for colors
2. Test both light and dark modes when making changes
