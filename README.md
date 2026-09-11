# SP Infotech Sales & Services

Corporate website for SP Infotech Sales & Services, an IT infrastructure and technical support company serving Navi Mumbai, Mumbai and Panvel.

## Development

You need Node.js and npm installed locally.

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

The development server runs at `http://localhost:3000` by default. To use a
different port, run `npm run dev -- --port 8080`.

## Environment variables

Create a local `.env` file with these Supabase variables:

```text
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

The contact form works with the publishable key because the database migration
allows anonymous inserts. If you have a Supabase service-role key, add it only
as `SUPABASE_SERVICE_ROLE_KEY`; never expose it through a `VITE_` variable.

After starting the app, test the form locally and confirm a row appears in
Supabase under `Table Editor > contact_submissions`.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
