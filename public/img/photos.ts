interface Photo {
  exterior: Array<PhotoItem>;
  interior: Array<PhotoItem>;
  mechanical: Array<PhotoItem>;
  docs: Array<PhotoItem>;
  other: Array<PhotoItem>;
  allPhotos: Array<PhotoItem>;
}

interface PhotoItem {
    src: string;
}
//ts-ignore
const photos:Photo = {

    exterior:[
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-Hl0k2YF863-(edit).jpg?t=168073955990",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-fWJpP-JuC3-(edit).jpg?t=168073961512",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-wj1l3JCXCl-(edit).jpg?t=168074004002",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-f-MOYETdJy-(edit).jpg?t=168073965438",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-gbogBOrOPL-(edit).jpg?t=168073984049"
        }
    ],
    interior:[
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Gojasfq_5.jpg?t=167770202530",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-qI0N9S2rQuS.jpg?t=167770209284",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-xYOtaEqjKUp.jpg?t=167770208546",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-z3h4q_Ed9SX.jpg?t=167770208547",
        },
      {
        src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-x6cgrl1g792.jpg?t=167770207780"
      }
    ],
    mechanical:[
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-Jz9m4u28Es.jpg?t=167770201278",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-RMevctOwffy.jpg?t=167770200018",
        },
        {
            src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-d-GO421zXp2.jpg?t=167770202800",
        },
    ],
  docs:[
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=1560,quality=80/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rjMANgwK-l1CIReKiBh-(edit).jpg?t=168029728153"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=1560,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/rjMANgwK-I-ITzq7kb.JPG?t=168133954531"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/rjMANgwK-Y59K249l1T-(edit).jpg?t=168054986645"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/rjMANgwK-GUZ5qriu9C-(edit).jpg?t=168054998046"
    },

  ],
  other:[
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-9j3lowSOMx.jpg?t=167770202436"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s--HKemKoOjh2.jpg?t=167770200289"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s--QsU3c53rBO.jpg?t=167770204355"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/s-CQAt7bAipO9.jpg?t=167770204057"
    },
    {
      src:"https://media.carsandbids.com/cdn-cgi/image/width=1560,quality=80/13a8c2da829fb2776b2f2aa8e5b58e2197727fac/photos/rjMANgwK-p-kl6d818MM.JPG?t=168134676482"
    },
  ],
  allPhotos: []

}
photos.allPhotos = [
  ...photos.exterior,
  ...photos.interior,
  ...photos.mechanical,
  ...photos.other,
  ...photos.docs,
];
export default photos
