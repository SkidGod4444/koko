import NumberTicker from "@/components/anim/num.ticker";
import React from "react";
import { NotifyList } from "../../notify-list";

export default function KeyFeatures() {
  return (
    <div className="container relative py-12 md:py-10">
      {/* gradient */}
      <div className="absolute -z-[50] inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-5">
        <div className="space-y-2">
          <div className="inline-block rounded-lg backdrop-blur-md bg-muted/20 px-3 py-1 text-sm border border-white mt-5 mb-10">
            <NumberTicker value={69} />% Winning Assurance
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Play & Earn Guarenteed!
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Koko.fun&apos;s advanced Ai algorithm is designed to maximize your
            chances of winning by providing real-time insights, personalized
            betting strategies, and seamless gameplay.
          </p>
        </div>
      </div>

      {/* Main content layout */}
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between mt-10 space-y-4 lg:space-y-0 gap-5">
        <div className="w-full lg:w-1/2">
          <NotifyList />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Secure Trading</h3>
                <p className="text-muted-foreground">
                  Trade a wide range of cryptocurrencies with advanced security
                  measures to protect your assets.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Intuitive Betting</h3>
                <p className="text-muted-foreground">
                  Bet on your favorite sports and esports events with a
                  user-friendly interface and competitive odds.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Thrilling Casino</h3>
                <p className="text-muted-foreground">
                  Experience a wide variety of casino games, including slots,
                  table games, and live dealer options, all optimized for
                  cryptocurrency.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Instant Payouts</h3>
                <p className="text-muted-foreground">
                  Enjoy fast and secure payouts directly to your account, with
                  multiple options for withdrawing your winnings. Our platform
                  ensures that your funds are always just a few clicks away.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
