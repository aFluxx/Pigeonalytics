export const isAdmin = [
    {
        title: "Losplaats",
        action: "mdi-upload-multiple",
        items: [
            {
                title: "Alle losplaatsen",
                href: route("dropzone.list"),
            },
            {
                title: "Losplaats aanmaken",
                href: route("dropzone.create"),
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
            },
            {
                title: "Race aanmaken",
                href: route("race.create"),
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
            },
            {
                title: "Resultaat aanmaken (manueel)",
                href: route("result.create.manual"),
            },
            {
                title: "Resultaat aanmaken (upload)",
                href: route("result.create.upload"),
            },
            {
                title: "Resultaat aanmaken (KBDB)",
                href: route("result.create.kbdb"),
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
            },
            {
                title: "Gemiddelde jaarlijkse snelheid",
                href: route("rapport.average-year-mpm"),
            },
            {
                title: "Beste kwekers",
                href: route("best-breeders.index"),
            },
            {
                title: "Asduiven",
                href: route("ace-pigeons.index"),
            },
            {
                title: "Ouders toevoegen",
                href: route("add-parents.index"),
            },
        ],
    },
];

export const isNotAdmin = [
    {
        title: "Losplaats",
        action: "mdi-upload-multiple",
        items: [
            {
                title: "Alle lostplaatsen",
                href: route("dropzone.list"),
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
            },
            {
                title: "Gemiddelde jaarlijkse snelheid",
                href: route("rapport.average-year-mpm"),
            },
            {
                title: "Beste kwekers",
                href: route("best-breeders.index"),
            },
            {
                title: "Asduiven",
                href: route("ace-pigeons.index"),
            },
        ],
    },
];
