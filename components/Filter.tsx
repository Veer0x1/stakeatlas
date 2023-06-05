"use client"

import React, { FunctionComponent } from "react"
import photos from "@/public/img/photos"

import ContentGallery from "@/components/ui/ContentGallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OwnProps {}

type Props = OwnProps

const Filter: FunctionComponent<Props> = () => {
  const categories: string[] = [
    "All Photos",
    "Exterior",
    "Interior",
    "Mechanical",
    "Docs",
    "Other",
  ]

  return (
    <>
      <div className={"m-2 mb-4 flex justify-center"}>
        <Tabs defaultValue="All Photos" className="">
          <div className={"m-2 mb-4 flex justify-center"}>
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value="All Photos">
            <ContentGallery photos={photos.allPhotos} />
          </TabsContent>
          <TabsContent value="Exterior">
            <ContentGallery photos={photos.exterior} />
          </TabsContent>
          <TabsContent value="Interior">
            <ContentGallery photos={photos.interior} />
          </TabsContent>
          <TabsContent value="Mechanical">
            <ContentGallery photos={photos.mechanical} />
          </TabsContent>
          <TabsContent value="Docs">
            <ContentGallery photos={photos.docs} />
          </TabsContent>
          <TabsContent value="Other">
            <ContentGallery photos={photos.other} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default Filter
