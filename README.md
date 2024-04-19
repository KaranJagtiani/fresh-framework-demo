# Fresh Out of the Oven: Cooking Interactive Web Islands with Deno

This repo is part of a talk titled "Fresh Out of the Oven: Cooking Interactive Web Islands with Deno" presented at the JSLovers April 2024 conference.

### Prerequisites

1. Deno - [Installation](https://docs.deno.com/runtime/manual/getting_started/installation)


### Start the Project

```bash
deno task start
```

The development version should be up on `http://localhost:8000`.

### Project Structure

1. `dev.ts`: Serves as the development entry point for your project. You can start your project by running this file, although it's commonly named `dev.ts` by convention.

2. `main.ts`: Acts as the production entry point and is linked to Deno Deploy. While typically called `main.ts`, this naming is conventional.

3. `fresh.gen.ts`: This automatically generated manifest file outlines your project's routes and islands based on the `routes/` and `islands/` directories.

4. `deno.json`: Created in your project directory, this file performs two key functions:
    - Defines the "imports" field for managing dependencies through an import map, simplifying the import and update processes.
    - Registers a "start" task, enabling project execution without lengthy `deno run` commands.

Important directories:

1. `routes/`: Contains all project routes. Files here match the access path of each page, with code not directly served to the client.

2. `islands/`: Holds interactive elements ("islands") for both client and server execution. Each file's name identifies its corresponding island.

3. `static/`: This directory stores static files which are served directly as-is.