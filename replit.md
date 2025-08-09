# Elite Gaming Tournament 2024

## Overview

This is a modern web application for an elite gaming tournament featuring multiple esports games including FC25, eFootball, Clash Royale, PUBG, and Free Fire. The application serves as a tournament registration and information platform with a total prize pool of $50,000. Built with a full-stack architecture using React frontend and Express backend, it provides a comprehensive solution for tournament management and participant registration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API architecture with `/api` prefix for all endpoints
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot module replacement and development server integration with Vite

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Schema Management**: Database migrations handled through Drizzle Kit
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Fallback Storage**: In-memory storage implementation for development and testing

### Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schema validation integrated with Drizzle for type-safe data handling

### External Dependencies
- **Database**: Neon Database (PostgreSQL) for production data storage
- **UI Components**: Extensive Radix UI component collection for accessible interfaces
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Development**: Various development tools including ESBuild, TSX, and Vite plugins
- **External Forms**: Integration with external registration forms (Google Forms) for tournament sign-ups
- **Image Assets**: Unsplash integration for tournament game imagery

The application follows a monorepo structure with shared types and schemas between frontend and backend, ensuring type consistency across the full stack. The architecture prioritizes developer experience with hot reloading, comprehensive TypeScript support, and modern tooling while maintaining production readiness with proper error handling and scalable data storage.