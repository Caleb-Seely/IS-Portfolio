/**
 * Site Configuration
 * This file contains all customizable settings for the portfolio website.
 * Modify these values to customize your site without changing code.
 */

export const siteConfig = {
  // Site Information
  title: "Portfolio",
  description: "A showcase of innovative projects and designs",
  author: "Your Name",
  
  // Navigation
  navItems: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  
  // Social Links
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  },
  
  // Project Settings
  projects: {
    // Path to project markdown files
    contentPath: "src/content/projects",
    // Number of projects to show per page
    itemsPerPage: 6,
    // Default image path for projects without images
    defaultImage: "/images/default-project.jpg"
  },
  
  // Contact Information
  contact: {
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "City, Country"
  },
  
  // SEO Settings
  seo: {
    defaultImage: "/images/og-image.jpg",
    twitterHandle: "@yourusername"
  }
};

/**
 * Project Configuration
 * This interface defines the structure of project markdown files.
 * Use this as a reference when creating new projects.
 */
export interface ProjectFrontmatter {
  title: string;
  date: string;
  image: string;
  materials: string[];
}

/**
 * How to add a new project:
 * 1. Create a new markdown file in src/content/projects/
 * 2. Follow this structure:
 * ---
 * title: "Project Title"
 * date: "MM/DD/YYYY"
 * image: "/path/to/image.jpg"
 * materials:
 *   - Material 1
 *   - Material 2
 * ---
 * 
 * 3. Add your project description below the frontmatter
 * 4. The project will automatically appear in your portfolio
 */ 