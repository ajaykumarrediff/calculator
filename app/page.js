"use client";

import * as React from "react";
import { redirect } from 'next/navigation'

export default function Home(props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-slate-100">
      {redirect('/factors')}
    </main>
  );
}
