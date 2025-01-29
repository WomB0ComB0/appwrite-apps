import { $ } from 'bun';

async function initializeWebProjects(): Promise<void> {
  console.log('Initializing web projects...');

  // JavaScript (Vanilla JS with Vite)
  await $`mkdir -p web/ts && cd web/ts && npm create vite@latest . -- --template react-ts && bun install`;

  // Next.js
  await $`mkdir -p web/nextjs && cd web/nextjs && npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias --no-git`;

  // React (using Vite)
  await $`mkdir -p web/react && cd web/react && npm create vite@latest . -- --template react-ts && bun install`;

  // Vue (using Vite)
  await $`mkdir -p web/vue && cd web/vue && npm create vite@latest . -- --template vue-ts && bun install`;

  // Nuxt
  await $`mkdir -p web/nuxt && cd web/nuxt && npx nuxi init . --force --packageManager npm && bun install`;

  // SvelteKit
  await $`mkdir -p web/sveltekit && cd web/sveltekit && npm create vite@latest . -- --template svelte-ts && bun install`;

  // Refine
  await $`cd web && npm create refine-app@latest refine --template refine-vite --skip-install && bun install`;

  // Angular
  await $`cd web && npx @angular/cli@latest new angular --defaults --skip-git && bun install`;

  // Solid
  await $`mkdir -p web/solid && cd web/solid && npm create vite@latest . -- --template solid-ts && bun install`;

  console.log('Web projects initialized!');
}

async function initializeMobileProjects(): Promise<void> {
  console.log('Initializing mobile projects...');

  // React Native (using Expo)
  await $`mkdir -p mobile/expo-app && cd mobile/expo-app && npx create-expo-app@latest . --template tabs --no-install && bun install`;

  // Flutter
  await $`mkdir -p mobile/flutter_app && cd mobile/flutter_app && flutter create .`;

  // Android
  await $`mkdir -p mobile/android && cd mobile/android && gradle init --type kotlin-application --dsl kotlin`;

  console.log('Mobile projects initialized!');
}

async function initializeServerProjects(): Promise<void> {
  console.log('Initializing server projects...');

  // Node.js (using Bun)
  await $`mkdir -p server/nodejs && cd server/nodejs && bun init -y && bun install`;

  // Python (with a virtual environment)
  await $`mkdir -p server/python && cd server/python && python3 -m venv venv && touch main.py`;

  // Dart
  await $`mkdir -p server/dart && cd server/dart && dart create . --force -t console-full`;

  // PHP
  await $`mkdir -p server/php && cd server/php && composer init --name=myproject/php-app --type=project --no-interaction`;

  // Ruby
  await $`mkdir -p server/ruby && cd server/ruby && bundle init`;

  // .NET
  await $`mkdir -p server/dotnet && cd server/dotnet && dotnet new console -n MyDotNetApp --no-restore && cd MyDotNetApp && dotnet restore`;

  // Deno
  await $`mkdir -p server/deno && cd server/deno && deno init -- -y`;

  // Go
  await $`mkdir -p server/go && cd server/go && go mod init my-go-app && touch main.go`;

  // Kotlin
  await $`mkdir -p server/kotlin && cd server/kotlin && gradle init --type kotlin-application --dsl kotlin --project-name my-kotlin-app --package my.kotlin.app`;

  console.log('Server projects initialized!');
}

async function initializeAllProjects(): Promise<void> {
  console.log('Starting project initialization...');

  await initializeWebProjects();
  await initializeMobileProjects();
  await initializeServerProjects();

  console.log('All projects initialized successfully!');
}

if (require.main === module) {
  initializeAllProjects().catch((err) => {
    console.error('Error initializing projects:', err);
  });
}