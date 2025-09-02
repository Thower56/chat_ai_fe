# Chat AI Frontend

This is a modern Angular standalone frontend for a chat application.

## Features
- Standalone Angular components and routing
- Simple chat UI with bot reply
- Organized project structure
- Ready for further extension

## Project Structure
```
chat_ai_fe/
├─ src/
│   ├─ app/
│   │   ├─ chat/                  # Chat feature module
│   │   ├─ shared/                # Shared models
│   │   ├─ core/                  # Core services/interceptors
│   │   ├─ app.component.ts       # Main app component
│   │   ├─ app.routes.ts          # App routes
│   ├─ assets/                    # Static assets
│   ├─ environments/              # Environment configs
│   └─ index.html                 # App entry point
├─ angular.json                   # Angular CLI config
├─ package.json                   # Project metadata and scripts
├─ tsconfig.json                  # TypeScript config
├─ .gitignore                     # Git ignore rules
└─ README.md                      # Project info
```

## Getting Started
1. Install dependencies:
	```bash
	yarn install
	```
2. Start the development server:
	```bash
	yarn start
	```
3. Open [http://localhost:4200](http://localhost:4200) in your browser.

## Scripts
- `yarn start` — Run the development server
- `yarn build` — Build the app for production
- `yarn test` — Run tests

## License
Specify your license here.
