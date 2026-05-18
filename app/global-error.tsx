"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <h1>Unexpected error</h1>
        <button onClick={reset}>Retry</button>
      </body>
    </html>
  );
}