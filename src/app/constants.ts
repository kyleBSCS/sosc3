import { MuseumItem, MuseumTopic } from "./types";

export const TOPICS: MuseumTopic[] = [
  {
    id: "lgbtq_pioneers",
    title: "Pioneers of Pride",
    description:
      "Discover influential LGBTQ+ activists and their impact on history.",
  },
  {
    id: "queer_history_moments",
    title: "Moments of Change",
    description: "Explore key events that shaped LGBTQ+ rights and visibility.",
  },
  {
    id: "gender_fluidity",
    title: "Beyond the Binary",
    description:
      "Delve into the diverse and evolving understanding of gender identity.",
  },
  {
    id: "womens_history_unsung",
    title: "Herstory: Unsung Women",
    description:
      "Celebrate women whose contributions have often been overlooked.",
  },
];

type MuseumItemSeed = Omit<MuseumItem, "category">;

export const MUSEUM_DATA: Record<string, MuseumItemSeed[]> = {
  lgbtq_pioneers: [
    {
      id: "langston_hughes",
      title: "Langston Hughes",
      date: "1901-1967",
      shortDescription:
        "American poet, social activist, novelist, and playwright; leader of the Harlem Renaissance.",
      longDescription:
        "Langston Hughes was a prominent figure in the Harlem Renaissance, known for his poetry, novels, and plays that celebrated Black life and culture. Though never openly gay, his work and life have been influential in LGBTQ+ history. His poetry, such as 'Dreams' and 'Harlem,' continues to inspire generations.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/langstonhuges.jpg",
    },
    {
      id: "james_baldwin",
      title: "James Baldwin",
      date: "1924-1987",
      shortDescription:
        "American writer and activist whose works explored race, sexuality, and class.",
      longDescription:
        "James Baldwin was a novelist, essayist, and social critic whose works, including 'Go Tell It on the Mountain' and 'Giovanni's Room,' addressed complex social and psychological pressures facing Black and LGBTQ+ people. Baldwin's eloquence and activism made him a key voice in both the civil rights and gay rights movements.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/jamesbaldwin.jpg",
    },
    {
      id: "barbara_jordan",
      title: "Barbara Jordan",
      date: "1936-1996",
      shortDescription:
        "First African American woman from the South elected to Congress; LGBTQ+ trailblazer.",
      longDescription:
        "Barbara Jordan was a groundbreaking politician and civil rights leader. She was the first African American woman elected to the Texas Senate and later to the U.S. Congress from the South. Jordan was also the first LGBTQ+ woman in Congress, remembered for her powerful oratory and dedication to justice.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/barbarajordan.png",
    },
    {
      id: "hulleah_tsinhnahjinnie",
      title: "Hulleah Tsinhnahjinnie",
      date: "1954-present",
      shortDescription:
        "Two-spirit multi-media artist and professor of Native American Studies.",
      longDescription:
        "Hulleah J. Tsinhnahjinnie is a two-spirit artist known for her photographic work rooted in Native American sovereignty. She is a professor and museum director, using her art and scholarship to uplift Indigenous and LGBTQ+ voices.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/hulleahtisnhanahjinnie.jpg",
    },
    {
      id: "audre_lorde",
      title: "Audre Lorde",
      date: "1934-1992",
      shortDescription:
        "Black lesbian feminist writer, poet, and civil rights activist.",
      longDescription:
        "Audre Lorde described herself as a 'Black, lesbian, mother, warrior, poet.' Her powerful writings explored themes of racism, sexism, homophobia, and classism. Lorde emphasized the importance of intersectionality and using differences as a catalyst for change. Her essays and poems, such as 'Sister Outsider' and 'Zami: A New Spelling of My Name,' continue to inspire activists and thinkers worldwide.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/audrelorde.jpg",
    },
    {
      id: "ceyenne_doroshow",
      title: "Ceyenne Doroshow",
      date: "Unknown",
      shortDescription:
        "Black trans activist, author, and founder of G.L.I.T.S.",
      longDescription:
        "Ceyenne Doroshow is a Black trans activist and author who founded G.L.I.T.S., an organization supporting Black trans people with housing and healthcare. She is a prominent advocate for sex workers and trans rights, working to provide safe spaces and support for marginalized communities.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/ceyenne-doroshow.jpg",
    },
    {
      id: "erestine_eckstein",
      title: "Erestine Eckstein",
      date: "1941-1992",
      shortDescription: "Leader in early lesbian and Black feminist movements.",
      longDescription:
        "Erestine Eckstein was a leader of the Daughters of Bilitis, the first lesbian civil and political rights organization in the U.S. She was also an early activist in the Black feminist movement, advocating for the intersection of civil rights and LGBTQ+ rights.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/erestein-eckstein.jpg",
    },
    {
      id: "barbara_gittings",
      title: "Barbara Gittings",
      date: "1932-2007",
      shortDescription: "Pioneering gay rights activist and organizer.",
      longDescription:
        "Barbara Gittings was a key figure in the early gay rights movement, founding the first lesbian civil rights organization in the U.S. and organizing public demonstrations for equality. She also promoted gay literature and worked with the American Library Association to increase LGBTQ+ representation.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/barbara-gittings.jpg",
    },
    {
      id: "major_griffin_gracy",
      title: "Major Griffin-Gracy (Miss Major)",
      date: "1940-present",
      shortDescription:
        "Black transgender activist and community leader; Stonewall veteran.",
      longDescription:
        "Miss Major Griffin-Gracy is a Black transgender activist and community leader who participated in the Stonewall riots. She has spent decades advocating for transgender women of color, especially those affected by incarceration and HIV/AIDS, and founded the House of GG, a safe house for the transgender community.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/miss-major-griffin-gracy.jpg",
    },
    {
      id: "marsha_p_johnson",
      title: "Marsha P. Johnson",
      date: "1945-1992",
      shortDescription:
        "Black transgender activist and key figure in the Stonewall uprising.",
      longDescription:
        "Marsha P. Johnson, a Black transgender woman, was a prominent figure in the gay liberation movement. She is often cited as one of the key individuals involved in the 1969 Stonewall uprising. A co-founder of Street Transvestite Action Revolutionaries (STAR), she dedicated her life to advocating for homeless LGBTQ+ youth, sex workers, and people with HIV/AIDS. Her vibrant personality and tireless activism made her an icon of resilience and compassion.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/marsha-p-johnson.jpg",
    },
    {
      id: "ifti_nasim",
      title: "Ifti Nasim",
      date: "1946-2011",
      shortDescription: "Pakistani-American gay poet and activist.",
      longDescription:
        "Ifti Nasim was a gay poet from Pakistan who wrote 'Narman,' the first Urdu book to openly express homosexuality. Fleeing persecution, he co-founded Sangat, a group for queer South Asian youth in the U.S., and became a celebrated voice for LGBTQ+ rights.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/ifti-nasim.jpg",
    },
    {
      id: "simon_nkoli",
      title: "Simon Nkoli",
      date: "1957-1998",
      shortDescription: "South African gay rights and anti-apartheid activist.",
      longDescription:
        "Simon Nkoli was a gay and AIDS activist who fought against apartheid in South Africa. He helped found the Gay Association of South Africa and paved the way for queer rights in the country, making a lasting impact on both LGBTQ+ and civil rights.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/simon-nkoli.jpg",
    },
    {
      id: "sylvia_rivera",
      title: "Sylvia Rivera",
      date: "1951-2002",
      shortDescription: "Transgender activist and co-founder of STAR.",
      longDescription:
        "Sylvia Rivera was a transgender American woman, LGBT liberation activist, and self-identified drag queen. She co-founded STAR with Marsha P. Johnson to support homeless transgender youth and was a fierce advocate for the most marginalized in the LGBTQ+ community.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/sylvia-rivera.jpg",
    },
    {
      id: "hannah_mouseback",
      title: "Hannah Mouseback",
      date: "Unknown",
      shortDescription: "Transgender rights activist and community organizer.",
      longDescription:
        "Hannah Moushabeck is a second-generation Palestinian American author, editor, and book marketer who was raised in a family of publishers and booksellers in Western Massachusetts and England. Born in Brooklyn, into a family-run independent publishing house, she learned the power of literature at a young age. She is the author of Homeland: My Father Dreams of Palestine. Hannah talks about her queer pandemic love story and what it was like coming out as an adult. ",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/hannahmoucheback.jpg",
    },
    {
      id: "bayard_rustin",
      title: "Bayard Rustin",
      date: "1912-1987",
      shortDescription:
        "Civil rights leader, strategist, and gay rights advocate.",
      longDescription:
        "Bayard Rustin was a key organizer of the 1963 March on Washington and advisor to Martin Luther King Jr. As an openly gay man, he faced discrimination but remained a tireless advocate for nonviolence, civil rights, and LGBTQ+ equality.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/bayard-rustin.jpg",
    },
    {
      id: "jackie_shane",
      title: "Jackie Shane",
      date: "1940-2019",
      shortDescription: "Transgender soul singer and LGBTQ+ icon.",
      longDescription:
        "Jackie Shane was a transgender soul singer from Nashville who built a large following in the U.S. and Canada during the 1960s. Her album 'Any Other Way' received a Grammy for best historical album in 2019, cementing her legacy as a music and LGBTQ+ icon.",
      imageUrl:
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/jackie-shane.jpg",
    },
  ],
  queer_history_moments: [
    {
      id: "stonewall_riots",
      title: "The Stonewall Riots",
      date: "June 28, 1969",
      shortDescription:
        "A series of spontaneous demonstrations by members of the LGBTQ+ community in response to a police raid.",
      longDescription:
        "The Stonewall Riots, which began in the early hours of June 28, 1969, at the Stonewall Inn in New York City, are widely considered the single most important event leading to the gay liberation movement and the modern fight for LGBTQ+ rights in the United States. Patrons of the bar, along with other community members, resisted a police raid, sparking six days of protests and clashes with law enforcement. Stonewall marked a shift from a more passive rights movement to radical, direct action.",
    },
    {
      id: "act_up_formation",
      title: "ACT UP Formation",
      date: "1987",
      shortDescription:
        "Formation of AIDS Coalition to Unleash Power (ACT UP), a direct-action advocacy group.",
      longDescription:
        "ACT UP was formed in March 1987 in New York City to combat the AIDS pandemic through direct action, medical research, treatment advocacy, and policy changes. Frustrated by government inaction and societal indifference, ACT UP used confrontational protests and civil disobedience to raise awareness, demand research funding, and accelerate the availability of life-saving treatments. Their activism significantly impacted public health policy and the fight against HIV/AIDS.",
    },
    {
      id: "obergefell_v_hodges",
      title: "Obergefell v. Hodges",
      date: "June 26, 2015",
      shortDescription:
        "U.S. Supreme Court ruling legalizing same-sex marriage nationwide.",
      longDescription:
        "In a landmark decision, the U.S. Supreme Court ruled in Obergefell v. Hodges that the fundamental right to marry is guaranteed to same-sex couples by both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment. This ruling legalized same-sex marriage in all fifty states, marking a pivotal victory for LGBTQ+ rights and equality in the United States after decades of activism and legal challenges.",
    },
  ],
  gender_fluidity: [
    {
      id: "two_spirit",
      title: "Two-Spirit Traditions",
      date: "Pre-colonial to Present",
      shortDescription:
        "Term used by some Indigenous North Americans to describe Native people who fulfill a third-gender ceremonial and social role.",
      longDescription:
        "Two-Spirit is an umbrella term created in 1990 by Indigenous LGBTQ+ activists to describe individuals in many Native American and First Nations cultures who embody both masculine and feminine spirits. These individuals often held respected spiritual and social roles within their communities, long before European colonization. The term aims to reclaim and honor pre-colonial understandings of gender diversity that were suppressed by colonization and Western binary gender norms.",
    },
    {
      id: "hijra_community",
      title: "Hijra Community",
      date: "Ancient to Present",
      shortDescription:
        "Third gender community in South Asia, particularly India, Pakistan, and Bangladesh.",
      longDescription:
        "Hijras are a recognized third gender community in South Asia with a recorded history spanning thousands of years. Traditionally, they have held significant social and religious roles, often associated with blessings and performances at ceremonies. While facing discrimination and marginalization in modern times, the Hijra community continues to be a visible and culturally significant part of South Asian society, and some countries have legally recognized them as a third gender.",
    },
    {
      id: "nonbinary_identities",
      title: "Non-Binary Identities",
      date: "Contemporary",
      shortDescription:
        "Umbrella term for gender identities that are not solely male or female.",
      longDescription:
        'Non-binary is an umbrella term for people whose gender identity does not fit neatly into the categories of "man" or "woman." Non-binary identities are diverse and can include people who identify as having no gender, multiple genders, or a gender that fluctuates. The increasing visibility and understanding of non-binary identities challenge traditional binary notions of gender and highlight the spectrum of human experience.',
    },
  ],
  womens_history_unsung: [
    {
      id: "ada_lovelace",
      title: "Ada Lovelace",
      date: "1815-1852",
      shortDescription:
        "English mathematician and writer, widely considered the first computer programmer.",
      longDescription:
        "Augusta Ada King, Countess of Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first computer programmer.",
    },
    {
      id: "hildegard_von_bingen",
      title: "Hildegard von Bingen",
      date: "1098-1179",
      shortDescription:
        "German Benedictine abbess, writer, composer, philosopher, mystic, visionary, and medical writer.",
      longDescription:
        "Hildegard von Bingen was a remarkable polymath of the High Middle Ages. She founded monasteries, composed an entire corpus of liturgical music, wrote theological, botanical, and medicinal texts, as well as letters, and liturgical songs. Her visionary theology and scientific insights were extraordinary for her time. Despite the constraints placed on women, she became an influential figure, advising popes, emperors, and other notables.",
    },
    {
      id: "artemisia_gentileschi",
      title: "Artemisia Gentileschi",
      date: "1593-c.1656",
      shortDescription:
        "Italian Baroque painter, one of the most accomplished painters in the generation following Caravaggio.",
      longDescription:
        "Artemisia Gentileschi was a pioneering Italian Baroque painter, renowned for her dramatic and naturalistic depictions of strong women from myths, allegories, and the Bible. In an era when female painters were not easily accepted, she achieved international success. Her works often feature female heroines and victims, imbued with a powerful emotional intensity, reflecting her own life experiences and challenging patriarchal norms.",
    },
  ],
};
