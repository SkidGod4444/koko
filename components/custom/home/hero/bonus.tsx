import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function Bonus() {
  return (
    <div className="w-full py-12 md:py-10">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get Joining Bonus up to $100!
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enter your email you will get invitation to our official telegram
            channel. Join the channel and follow steps to claim bonus.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Claim</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By claiming, you agree to our{" "}
            <Link
              href="/tos"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
