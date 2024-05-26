import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-[10rem] gap-[12rem] ">
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        {/* grid */}
        <p className="text-center">
          Run Your Agency, in One Place
        </p>
        <div className="bg-gradient-to-r from-primary to-secondary-forground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]" >
            Plura
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={'/assets/preview.png'}
            alt="Picture of the image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10">

          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 ">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx(`w-[300px] flex flex-col justify-between`, {
                'border-2 border-primary': card.title === 'Unlimited Saas',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas',
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">
                  {card.price}
                </span>
                <span className="text-muted-foreground">
                  /m
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>{card.features.map((feature) => (<div className="flex gap-2 items-center">
                  <Check />
                  <p className="text-muted-foreground">{feature}</p>
                </div>))}</div>
                <Link href={`/agency?plan=${card.priceId}`} className={clsx("w-full text-center bg-primary p-2 rounded-md" , { '!bg-muted-foreground' : card.title !== "Unlimited Saas"})}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}