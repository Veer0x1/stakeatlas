import React, { FunctionComponent } from "react"

interface OwnProps {}

interface Photo {
  src: string
}

interface ContentGalleryProps {
  photos: Photo[]
}

type Props = OwnProps & ContentGalleryProps

const ContentGallery: FunctionComponent<Props> = ({
  photos,
}: ContentGalleryProps) => {
  return (
    <section>
      <div className={""}>
        <div className="grid gap-2 sm:grid-cols-4 md:grid-cols-6">
          <div className="row-span-4 h-auto sm:col-span-3 md:col-span-4">
            <img
              className="h-auto w-full rounded-lg"
              src={photos[0].src}
              alt=""
            />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 ">
            <div className={"grid gap-1 sm:grid-cols-1 md:grid-cols-2 "}>
              {photos.slice(1, 9).map((photo: Photo) => (
                <img
                  key={photo.src}
                  className="h-auto w-full rounded-lg"
                  src={photo.src}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.slice(9).map((photo: Photo) => (
            <div>
              <img
                key={photo.src}
                className="h-auto w-full rounded-lg"
                src={photo.src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentGallery
