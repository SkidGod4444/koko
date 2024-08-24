import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "Alex Turner",
      role: "Gambler",
      avatar: "/assets/re-1-boy.jpg",
      fallback: "AT",
      review:
        "Koko.fun is the best platform for betting. Fast payouts and great odds!",
    },
    {
      name: "Samantha Lee",
      role: "Crypto Trader",
      avatar: "/assets/re-2-girl.jpg",
      fallback: "SL",
      review:
        "I've had an amazing experience with Koko.fun. The security and ease of use are top-notch. Highly recommended for anyone looking to bet with confidence.",
    },
    {
      name: "David Brown",
      role: "High Roller",
      avatar: "/assets/re-3-boy.jpg",
      fallback: "DB",
      review:
        "Instant payouts and excellent customer service. Koko.fun has become my go-to site for all my gambling needs.",
    },
    {
      name: "Jessica Martin",
      role: "Bettor",
      avatar: "/assets/re-6-girl.jpg",
      fallback: "JM",
      review:
        "I love the variety of games and the user-friendly interface. Koko.fun makes gambling enjoyable and secure.",
    },
    {
      name: "Michael Clark",
      role: "Gambler",
      avatar: "/assets/re-4-boy.jpg",
      fallback: "MC",
      review:
        "The AI features on Koko.fun are impressive. It helps me make smarter bets and increase my winnings.",
    },
    {
      name: "Emma Wilson",
      role: "Player",
      avatar: "/assets/re-7-girl.jpg",
      fallback: "EW",
      review:
        "Fast and reliable. The platform is easy to navigate and offers great bonuses. I'm very satisfied with Koko.fun.",
    },
    {
      name: "John Adams",
      role: "Gamer",
      avatar: "/assets/re-5-boy.jpg",
      fallback: "JA",
      review:
        "Koko.fun has changed the way I gamble. The insights and strategies offered are incredibly helpful for maximizing my bets.",
    },
    {
      name: "Olivia Davis",
      role: "Bettor",
      avatar: "/assets/re-8-girl.jpg",
      fallback: "OD",
      review:
        "Great experience! Koko.fun provides a seamless betting process and excellent support whenever needed.",
    },
    {
      name: "James Taylor",
      role: "High Roller",
      avatar: "/assets/re-16-boy.jpg",
      fallback: "JT",
      review:
        "I've tried many gambling platforms, but Koko.fun stands out for its fast payouts and user-friendly interface.",
    },
    {
      name: "Sophia Martinez",
      role: "Crypto Enthusiast",
      avatar: "/assets/re-9-girl.jpg",
      fallback: "SM",
      review:
        "Koko.fun offers a fantastic gambling experience with advanced features and reliable payouts. It’s a game-changer!",
    },
    {
      name: "Daniel Rodriguez",
      role: "Gambler",
      avatar: "/assets/re-15-boy.jpg",
      fallback: "DR",
      review:
        "The platform is great, but the customer support could be improved. Overall, Koko.fun is a solid choice for online betting.",
    },
    {
      name: "Mia Gonzalez",
      role: "Bettor",
      avatar: "/assets/re-12-girl.jpg",
      fallback: "MG",
      review:
        "I've been using Koko.fun for a while now, and I'm impressed with the variety of games and fast transactions.",
    },
    {
      name: "Lucas White",
      role: "Gamer",
      avatar: "/assets/re-14-boy.jpg",
      fallback: "LW",
      review:
        "Koko.fun provides a secure and enjoyable betting experience. The platform is reliable and easy to use.",
    },
    {
      name: "Ava Lee",
      role: "Crypto Trader",
      avatar: "/assets/re-10-girl.jpg",
      fallback: "AL",
      review:
        "The betting options on Koko.fun are fantastic. I love the AI features that help me make smarter decisions.",
    },
    {
      name: "Ethan Harris",
      role: "High Roller",
      avatar: "/assets/re-13-boy.jpg",
      fallback: "EH",
      review:
        "Koko.fun has excellent odds and a user-friendly interface. It's my top choice for online gambling.",
    },
    {
      name: "Isabella Nelson",
      role: "Bettor",
      avatar: "/assets/re-11-girl.jpg",
      fallback: "IN",
      review:
        "The platform is secure and easy to navigate. Koko.fun offers great features for a satisfying betting experience.",
    },
  ];

  // Function to get two random reviews
  function getRandomReviews(array: any, num: any) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const randomReviews = getRandomReviews(reviews, 2);

  return (
    <div className="w-full py-12 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Reviews
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              What Our Gamblers Say
            </h2>
            <div className="grid gap-4">
              {randomReviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded-md border bg-background p-4 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold">{review.name}</h4>
                        <div className="text-sm text-muted-foreground">
                          {review.role}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        &quot;{review.review}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Koko.fun
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Koko.fun is a legitmate cryptocurrency gambling platform, trusted
              by millions of users worldwide. Our mission is to provide a
              secure, user-friendly, and innovative platform that empowers our
              customers to explore the world of digital assets, sports betting,
              and casino gaming.
            </p>
            <Link href={"/about"}>
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
