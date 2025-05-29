import { MuseumItem, MuseumTopic } from "./types";

export const TOPICS: MuseumTopic[] = [
  {
    id: "lgbtq_pioneers",
    title: "Pioneers of Pride",
    description:
      "Discover influential LGBTQ+ activists and their impact on history.",
    imageUrl:
      "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/marsha-p-johnson.jpg",
  },
  {
    id: "queer_history_moments",
    title: "Moments of Change",
    description: "Explore key events that shaped LGBTQ+ rights and visibility.",
    imageUrl: "/stonewall.webp",
  },
  {
    id: "gender_fluidity",
    title: "Beyond the Binary",
    description:
      "Delve into the diverse and evolving understanding of gender identity.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E12AQFB-Ffi_UdZvw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1687778625506?e=2147483647&v=beta&t=5xUuTtLhDxfJKjy6mTwvfIAp5FXNPU-OKrYqV9qa2vw",
  },
  {
    id: "womens_history_unsung",
    title: "Herstory: Unsung Women",
    description:
      "Celebrate women whose contributions have often been overlooked.",
    imageUrl:
      "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_1.7777777777777777,w_3840,h_2163,g_center/dpr_auto/f_auto/q_auto:eco:sensitive/v1/History_TopicIllustration_WomensHistory_gtqhpb?_a=BAVAZGDX0",
  },
  {
    id: "STDs",
    title: "Kinds of STDs/STIs",
    description:
      "Learn about the different kinds of STDs/STIs and how to prevent them.",
    imageUrl:
      "https://img.freepik.com/free-photo/daughter-holding-her-mothers-hand-hospital_53876-139572.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: "recent_developments",
    title: "Recent Developments",
    description: "Learn about the recent developments in the LGBTQ+ community.",
    imageUrl:
      "https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2021/01/lgbtq.webp",
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
      imageUrl:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
    },
    {
      id: "act_up_formation",
      title: "ACT UP Formation",
      date: "1987",
      shortDescription:
        "Formation of AIDS Coalition to Unleash Power (ACT UP), a direct-action advocacy group.",
      longDescription:
        "ACT UP was formed in March 1987 in New York City to combat the AIDS pandemic through direct action, medical research, treatment advocacy, and policy changes. Frustrated by government inaction and societal indifference, ACT UP used confrontational protests and civil disobedience to raise awareness, demand research funding, and accelerate the availability of life-saving treatments. Their activism significantly impacted public health policy and the fight against HIV/AIDS.",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    },
    {
      id: "obergefell_v_hodges",
      title: "Obergefell v. Hodges",
      date: "June 26, 2015",
      shortDescription:
        "U.S. Supreme Court ruling legalizing same-sex marriage nationwide.",
      longDescription:
        "In a landmark decision, the U.S. Supreme Court ruled in Obergefell v. Hodges that the fundamental right to marry is guaranteed to same-sex couples by both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment. This ruling legalized same-sex marriage in all fifty states, marking a pivotal victory for LGBTQ+ rights and equality in the United States after decades of activism and legal challenges.",
      imageUrl:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    },
    {
      id: "hijra_community",
      title: "Hijra Community",
      date: "Ancient to Present",
      shortDescription:
        "Third gender community in South Asia, particularly India, Pakistan, and Bangladesh.",
      longDescription:
        "Hijras are a recognized third gender community in South Asia with a recorded history spanning thousands of years. Traditionally, they have held significant social and religious roles, often associated with blessings and performances at ceremonies. While facing discrimination and marginalization in modern times, the Hijra community continues to be a visible and culturally significant part of South Asian society, and some countries have legally recognized them as a third gender.",
      imageUrl:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    },
    {
      id: "nonbinary_identities",
      title: "Non-Binary Identities",
      date: "Contemporary",
      shortDescription:
        "Umbrella term for gender identities that are not solely male or female.",
      longDescription:
        'Non-binary is an umbrella term for people whose gender identity does not fit neatly into the categories of "man" or "woman." Non-binary identities are diverse and can include people who identify as having no gender, multiple genders, or a gender that fluctuates. The increasing visibility and understanding of non-binary identities challenge traditional binary notions of gender and highlight the spectrum of human experience.',
      imageUrl:
        "https://images.unsplash.com/photo-1506629905770-b42efb4cc492?w=800&h=600&fit=crop",
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
      imageUrl:
        "https://images.unsplash.com/photo-1594736797933-d0cc2fe0a6d6?w=800&h=600&fit=crop",
    },
    {
      id: "hildegard_von_bingen",
      title: "Hildegard von Bingen",
      date: "1098-1179",
      shortDescription:
        "German Benedictine abbess, writer, composer, philosopher, mystic, visionary, and medical writer.",
      longDescription:
        "Hildegard von Bingen was a remarkable polymath of the High Middle Ages. She founded monasteries, composed an entire corpus of liturgical music, wrote theological, botanical, and medicinal texts, as well as letters, and liturgical songs. Her visionary theology and scientific insights were extraordinary for her time. Despite the constraints placed on women, she became an influential figure, advising popes, emperors, and other notables.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    },
    {
      id: "artemisia_gentileschi",
      title: "Artemisia Gentileschi",
      date: "1593-c.1656",
      shortDescription:
        "Italian Baroque painter, one of the most accomplished painters in the generation following Caravaggio.",
      longDescription:
        "Artemisia Gentileschi was a pioneering Italian Baroque painter, renowned for her dramatic and naturalistic depictions of strong women from myths, allegories, and the Bible. In an era when female painters were not easily accepted, she achieved international success. Her works often feature female heroines and victims, imbued with a powerful emotional intensity, reflecting her own life experiences and challenging patriarchal norms.",
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    },
  ],
  STDs: [
    {
      "id": "chlamydia",
      "title": "Chlamydia",
      "date": "",
      "shortDescription": "A common bacterial STI that often shows no symptoms.",
      "longDescription": "Chlamydia is a prevalent sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It's often asymptomatic, making regular screenings crucial. If untreated, it can lead to serious reproductive complications. Fortunately, it is easily curable with antibiotics.",
      "imageUrl": ""
    },
    {
      "id": "gonorrhea",
      "title": "Gonorrhea",
      "date": "",
      "shortDescription": "A bacterial STI that can infect the genitals, rectum, and throat.",
      "longDescription": "Gonorrhea is a common sexually transmitted infection caused by Neisseria gonorrhoeae. It can affect multiple areas of the body and often presents no symptoms, especially in women. If left untreated, it can cause serious health issues. Prompt antibiotic treatment is effective.",
      "imageUrl": ""
    },
    {
      "id": "hpv",
      "title": "Human Papillomavirus (HPV)",
      "date": "",
      "shortDescription": "The most common STI, with some types leading to warts or cancer.",
      "longDescription": "HPV is a widespread sexually transmitted infection with over 100 types. While many infections resolve on their own, some can cause genital warts or lead to cancers such as cervical cancer. Vaccination and regular screenings are key preventive measures.",
      "imageUrl": ""
    },
    {
      "id": "herpes",
      "title": "Herpes Simplex Virus (HSV)",
      "date": "",
      "shortDescription": "A viral STI causing painful blisters or ulcers.",
      "longDescription": "Herpes simplex virus, encompassing HSV-1 and HSV-2, leads to infections that can cause blisters or ulcers, commonly around the mouth or genitals. The virus remains in the body for life, with symptoms managed through antiviral medications.",
      "imageUrl": ""
    },
    {
      "id": "syphilis",
      "title": "Syphilis",
      "date": "",
      "shortDescription": "A bacterial STI with multiple stages, potentially leading to severe health issues.",
      "longDescription": "Syphilis is a sexually transmitted infection that progresses through stages: primary, secondary, latent, and tertiary. Early stages may present sores or rashes, while later stages can cause serious health problems. Early detection and antibiotic treatment are crucial.",
      "imageUrl": ""
    },
    {
      "id": "hiv",
      "title": "Human Immunodeficiency Virus (HIV)",
      "date": "",
      "shortDescription": "A virus that attacks the immune system, potentially leading to AIDS.",
      "longDescription": "HIV is a virus that compromises the immune system, making individuals more susceptible to infections and diseases. Without treatment, it can progress to AIDS. While there's no cure, antiretroviral therapy allows individuals to manage the virus effectively.",
      "imageUrl": ""
    },
    {
      "id": "trichomoniasis",
      "title": "Trichomoniasis",
      "date": "",
      "shortDescription": "A common parasitic STI, often without symptoms.",
      "longDescription": "Trichomoniasis is a sexually transmitted infection caused by the parasite Trichomonas vaginalis. Many infected individuals show no symptoms, but it can cause discomfort and increase the risk of other STIs. It is treatable with prescribed medications.",
      "imageUrl": ""
    },
    {
      "id": "hepatitis_b",
      "title": "Hepatitis B",
      "date": "",
      "shortDescription": "A viral infection affecting the liver, transmissible through sexual contact.",
      "longDescription": "Hepatitis B is a liver infection caused by the hepatitis B virus. It can be acute or chronic and is transmitted through bodily fluids, including during sexual activity. Vaccination is the most effective prevention method.",
      "imageUrl": ""
    }
  ],
  recent_developments: [
    {
      "id": "liechtenstein_same_sex_marriage",
      "title": "Liechtenstein Legalizes Same-Sex Marriage",
      "date": "2025-01-01",
      "shortDescription": "Liechtenstein's same-sex marriage law comes into effect.",
      "longDescription": "On January 1, 2025, Liechtenstein's law allowing same-sex marriages officially came into effect, marking a significant step forward for LGBTQ+ rights in the country.",
      "imageUrl": ""
    },
    {
      "id": "thailand_same_sex_marriage",
      "title": "Thailand Legalizes Same-Sex Marriage",
      "date": "2025-01-23",
      "shortDescription": "Thailand's same-sex marriage law comes into effect.",
      "longDescription": "On January 23, 2025, Thailand's law allowing same-sex marriages officially came into effect, making it the first Southeast Asian country to legalize same-sex marriage.",
      "imageUrl": ""
    },
    {
      "id": "trump_executive_order_gender_identity",
      "title": "Trump Signs Executive Order on Gender Identity",
      "date": "2025-01-20",
      "shortDescription": "Executive order mandates federal recognition of gender as binary.",
      "longDescription": "On January 20, 2025, President Donald Trump signed an executive order titled 'Defending Women from Gender Ideology Extremism and Restoring Biological Truth to the Federal Government,' requiring federal departments to recognize gender as a male-female binary only, determined by biological sex assigned at conception.",
      "imageUrl": ""
    },
    {
      "id": "hungary_bans_lgbtq_events",
      "title": "Hungary Bans LGBTQ+ Public Events",
      "date": "2025-03-18",
      "shortDescription": "Hungarian parliament votes to ban LGBTQ+ events.",
      "longDescription": "On March 18, 2025, the Hungarian parliament voted 136–27 to ban LGBTQ+ events in the country, including the annual Budapest Pride event, as part of a series of anti-LGBTQ+ legislative measures.",
      "imageUrl": ""
    },
    {
      "id": "utah_bans_pride_flags",
      "title": "Utah Bans LGBTQ+ Pride Flags in Government Buildings",
      "date": "2025-03-28",
      "shortDescription": "Utah becomes first U.S. state to ban pride flags in government spaces.",
      "longDescription": "On March 28, 2025, Utah enacted a law banning LGBTQ+ pride flags in government buildings and schools, becoming the first U.S. state to implement such a measure.",
      "imageUrl": ""
    },
    {
      "id": "idaho_resolution_same_sex_marriage",
      "title": "Idaho House Calls for Reconsideration of Same-Sex Marriage Ruling",
      "date": "2025-01-27",
      "shortDescription": "Idaho House votes for resolution to reconsider Obergefell v. Hodges.",
      "longDescription": "On January 27, 2025, the Idaho House of Representatives voted for a resolution calling for the U.S. Supreme Court to reconsider its 2015 decision in Obergefell v. Hodges, which legalized same-sex marriage nationwide.",
      "imageUrl": ""
    },
    {
      "id": "uk_supreme_court_gender_definition",
      "title": "UK Supreme Court Rules on Legal Gender Definition",
      "date": "2025-04-16",
      "shortDescription": "UK Supreme Court defines legal gender based on birth sex.",
      "longDescription": "On April 16, 2025, the Supreme Court of the United Kingdom ruled that legal gender is based upon sex assigned at birth, excluding transgender women from the legal definition of 'woman' for the purposes of the Equality Act 2010.",
      "imageUrl": ""
    },
    {
      "id": "lithuania_same_sex_partnerships",
      "title": "Lithuania Grants Same-Sex Couples Right to Register Partnerships",
      "date": "2025-04-17",
      "shortDescription": "Lithuania's Constitutional Court allows same-sex partnership registration.",
      "longDescription": "On April 17, 2025, the Constitutional Court of Lithuania granted same-sex couples the right to register their partnerships with the courts until the Seimas adopts a comprehensive law on registered partnerships.",
      "imageUrl": ""
    },
    {
      "id": "poland_abolishes_lgbt_free_zones",
      "title": "Poland Abolishes Last 'LGBT-Free Zone'",
      "date": "2025-04-30",
      "shortDescription": "Poland's last 'LGBT-free zone' is abolished.",
      "longDescription": "On April 30, 2025, the last 'LGBT-free zone' in Poland was abolished, marking a significant step toward LGBTQ+ inclusivity in the country.",
      "imageUrl": ""
    },
    {
      "id": "italy_recognizes_lesbian_parenthood",
      "title": "Italy Recognizes Automatic Parenthood for Lesbian Couples",
      "date": "2025-05-22",
      "shortDescription": "Italy's Constitutional Court recognizes automatic parenthood for children of lesbian partnerships.",
      "longDescription": "On May 22, 2025, Italy's Constitutional Court recognized automatic parenthood on birth certificates for children of lesbian partnerships, eliminating the need for adoption procedures.",
      "imageUrl": ""
    }
  ]
};
