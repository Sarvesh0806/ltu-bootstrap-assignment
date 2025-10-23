"use client";
import { useState } from "react";

export default function SaveButton({
  title,
  html,
  description,
}: {
  title: string;
  html: string;
  description?: string;
}) {
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );

  const save = async () => {
    try {
      setStatus("saving");
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, html, description }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("saved");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={save}
        disabled={status === "saving"}
        className="px-4 py-2 rounded-xl bg-black text-white"
      >
        {status === "saving" ? "Saving…" : "Save"}
      </button>

      {status === "saved" && (
        <a
          href="/generate/22133836"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-600"
        >
          Open generated page ↗
        </a>
      )}

      {status === "error" && (
        <span className="text-red-600">Failed. Check console.</span>
      )}
    </div>
  );
}
