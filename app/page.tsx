import { Button } from "@/components/ui/button"
import Gallery from "@/components/Gallery"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  const data = {
    model: "1987 Porsche 944 S Coupe",
    desc: "5-Speed Manual, Recent Engine Rebuild, Mostly Unmodified, Reviewed by Doug DeMuro",
  }
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {data.model}
        </h1>
        <div className="w-full flex-wrap justify-between md:flex">
          <p className="text-lg text-muted-foreground">{data.desc}</p>
          <Button variant={"link"}>
            Share <Icons.share className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
      {/*<div className="flex gap-4">*/}
      {/*  <CarGallery carData={data} />*/}
      {/*</div>*/}
      <div className="container mx-auto">
        <Gallery />
      </div>
    </section>
  )
}
