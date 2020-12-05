export const isAdmin = [
    {
        title: "Losplaats",
        action: "mdi-upload-multiple",
        items: [
            {
                title: "Alle losplaatsen",
                href: route("dropzone.list"),
                authed: false,
            },
            {
                title: "Losplaats aanmaken",
                href: route("dropzone.create"),
                authed: true,
            },
        ],
    },
    {
        title: "Race",
        action: "mdi-clock",
        items: [
            {
                title: "Alle races",
                href: route("race.list"),
                authed: false,
            },
            {
                title: "Race aanmaken",
                href: route("race.create"),
                authed: true,
            },
        ],
    },
    {
        title: "Resultaten",
        action: "mdi-format-list-numbered",
        items: [
            {
                title: "Alle resultaten",
                href: route("result.list"),
                authed: false,
            },
            {
                title: "Resultaat aanmaken (manueel)",
                href: route("result.create.manual"),
                authed: true,
            },
            {
                title: "Resultaat aanmaken (upload)",
                href: route("result.create.upload"),
                authed: true,
            },
            {
                title: "Resultaat aanmaken (KBDB)",
                href: route("result.create.kbdb"),
                authed: true,
            },
        ],
    },
    {
        title: "Duif",
        action: "mdi-bird",
        items: [
            {
                title: "Alle duiven",
                href: route("pigeon.list"),
                authed: false,
            },
            {
                title: "Gemiddelde jaarlijkse snelheid",
                href: route("rapport.average-year-mpm"),
                authed: false,
            },
        ],
    },
];

export const isNotAdmin = [
    {
        title: "Losplaats",
        action: "mid-upload-multiple",
        items: [
            {
                title: "Alle lostplaatsen",
                href: route("dropzone.list"),
                authed: false,
            },
        ],
    },
    {
        title: "Race",
        action: "mdi-clock",
        items: [
            {
                title: "Alle races",
                href: route("race.list"),
                authed: false,
            },
        ],
    },
    {
        title: "Resultaten",
        action: "mdi-format-list-numbered",
        items: [
            {
                title: "Alle resultaten",
                href: route("result.list"),
                authed: false,
            },
        ],
    },
    {
        title: "Duif",
        action: "mdi-bird",
        items: [
            {
                title: "Alle duiven",
                href: route("pigeon.list"),
                authed: false,
            },
            {
                title: "Gemiddelde jaarlijkse snelheid",
                href: route("rapport.average-year-mpm"),
                authed: false,
            },
        ],
    },
];
