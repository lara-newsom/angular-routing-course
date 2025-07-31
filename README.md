# Angular Routing Course Application

This is a sample Angular application demonstrating advanced routing and navigation concepts, including lazy loading, route guards, in-memory API, and Material UI integration.

## Version Check

[Check Angular Version](package.json)

## Features

- Angular standalone components and modern configuration
- In-memory web API for mock backend
- Material Design components
- Routing with breadcrumbs
- Error handling and not-found page

## Getting Started

### Install dependencies

```sh
npm install
```

### Development server

Start the dev server:

```sh
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app will reload if you change any source files.

### Build

To build the project:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.


## Project Structure

- `src/app`: Main application code
  - `app.config.ts`: Angular application configuration
  - `app.routes.ts`: Application routes
  - `shared-ui/`: Shared UI components (breadcrumbs, sub-hero logo, etc.)
  - `services/`: Application services
  - `models/`: Data models
  - Feature views: `home`, `about`, `contact`, `combo-card-view`, etc.

## Further help

See the [Angular CLI documentation](https://angular.io/cli).
