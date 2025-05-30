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
      "/std.jpg",
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
      imageUrl: "/public-figs/langston-hughes.webp",
      prominentFigure: {
        name: "Langston Hughes",
        born: "Feb 1, 1901",
        died: "May 22, 1967",
        bio: "American poet, social activist, novelist, playwright, and a central figure of the Harlem Renaissance. His work celebrated Black life and culture, and though he was not openly gay, his contributions are significant to LGBTQ+ history.",
        works: [
          {
            title: "The Weary Blues (1925)",
            imageUrl:
              "/works/weary_blues.jpg",
          },
          {
            title: "Not Without Laughter (1930)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-fuPDElYLWpMtkbu-5ZIwMgM0_SUjzzNUg&s",
          },
          {
            title: "Montage of a Dream Deferred (1951)",
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516059506i/8249177.jpg",
          },
        ],
        events: [
          {
            title: "Leading figure in the Harlem Renaissance (1920s-1930s)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCjzbHbBruD0xcbab7oEniAjqYZtXxlbPTQ&s",
          },
          {
            title:
              "Work as a war correspondent during the Spanish Civil War (1937)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGo8YGiaUhsr2ScgiBxju594binY3tT-Jx4Q&s",
          },
        ],
        imageUrl: "/public-figs/langston-hughes.webp",
      },
      referenceUrl: [
        "https://www.biography.com/writer/langston-hughes",
        "https://www.poetryfoundation.org/poets/langston-hughes",
      ],
    },
    {
      id: "james_baldwin",
      title: "James Baldwin",
      date: "1924-1987",
      shortDescription:
        "American writer and activist whose works explored race, sexuality, and class.",
      longDescription:
        "James Baldwin was a novelist, essayist, and social critic whose works, including 'Go Tell It on the Mountain' and 'Giovanni's Room,' addressed complex social and psychological pressures facing Black and LGBTQ+ people. Baldwin's eloquence and activism made him a key voice in both the civil rights and gay rights movements.",
      imageUrl: "/public-figs/james-baldwin.jpg",
      prominentFigure: {
        name: "James Baldwin",
        born: "Aug 2, 1924",
        died: "Dec 1, 1987",
        bio: "American novelist, playwright, essayist, poet, and activist. His work explores intricacies of racial, sexual, and class distinctions in Western societies.",
        works: [
          {
            title: "Go Tell It on the Mountain (1953)",
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701361318i/17143.jpg",
          },
          {
            title: "Giovanni's Room (1956)",
            imageUrl:
              "https://storage.googleapis.com/circlesoft/document/photos/003/535/296/original_temp_img.jpg20250208-1-224ccw?1739055304",
          },
          {
            title: "The Fire Next Time (1963)",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/c/ce/The_Fire_Next_Time_%281963%29_front_cover%2C_first_edition.jpg",
          },
          {
            title: "Notes of a Native Son (1955)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLbjN05b-DZ5heDr63bup_h_OnzaivthQ5w&s",
          },
        ],
        events: [
          {
            title: "Civil Rights Movement activism (1960s)",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/4/4c/Civil_Rights_March_on_Washington%2C_D.C._%28Leaders_marching_from_the_Washington_Monument_to_the_Lincoln_Memorial%29_-_NARA_-_542010.jpg",
          },
          {
            title: "Speech at the March on Washington (1963)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MKKbgyF--UtsD7X__1JhIW0vDGXF1z2VUQ&s",
          },
          {
            title: "Debate with William F. Buckley at Cambridge (1965)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0MfPjzXpeGX-Exby-ydZRo9Xpg4eYBk7og&s",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/jamesbaldwin.jpg",
      },
      referenceUrl: [
        "https://www.biography.com/writer/james-baldwin",
        "https://www.poetryfoundation.org/poets/james-baldwin",
        "https://www.pbs.org/wnet/americanmasters/james-baldwin-bibliography/2651/",
        "https://www.pbs.org/wnet/americanmasters/james-baldwin-about-the-author/59/",
      ],
    },
    {
      id: "barbara_jordan",
      title: "Barbara Jordan",
      date: "1936-1996",
      shortDescription:
        "First African American woman from the South elected to Congress; LGBTQ+ trailblazer.",
      longDescription:
        "Barbara Jordan was a groundbreaking politician and civil rights leader. She was the first African American woman elected to the Texas Senate and later to the U.S. Congress from the South. Jordan was also the first LGBTQ+ woman in Congress, remembered for her powerful oratory and dedication to justice.",
      imageUrl: "/public-figs/barbara-jordan.jpg",
      prominentFigure: {
        name: "Barbara Jordan",
        born: "Feb 21, 1936",
        died: "Jan 17, 1996",
        bio: "American lawyer, educator, and politician who was a leader of the Civil Rights Movement. The first African American elected to the Texas Senate after Reconstruction and the first Southern African-American woman elected to the United States House of Representatives. She was also the first known LGBTQ+ woman in Congress.",
        works: [
          {
            title: "Barbara Jordan: A Self-Portrait (Autobiography, 1979)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCTPk7EaVCiD0S5u8Bnbm5ih4vN86Wc2WDQ&s",
          },
        ],
        events: [
          {
            title:
              "Keynote speaker at the Democratic National Convention (1976 & 1992)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDGm5PJvYGttR6PAY1_4CcoR-nXidVl1m0of40WFZugk7ZMO2-tcvM0PXyeVVy5Fmy5k&usqp=CAU",
          },
          {
            title:
              "Member of House Judiciary Committee during Nixon impeachment hearings (1974)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49OC_a0YPJUV9pFUo62Fsg7Ou5oqF-vqdvQ&s",
          },
          {
            title: "Awarded Presidential Medal of Freedom (1994)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4ZzOVGS5ke17Gy3weXB7bVXz5Y76iADwsw&s",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/barbarajordan.png",
      },
      referenceUrl: [
        "https://nmaahc.si.edu/barbara-jordan",
        "https://www.womenshistory.org/education-resources/biographies/barbara-jordan",
      ],
    },
    {
      id: "hulleah_tsinhnahjinnie",
      title: "Hulleah Tsinhnahjinnie",
      date: "1954-present",
      shortDescription:
        "Two-spirit multi-media artist and professor of Native American Studies.",
      longDescription:
        "Hulleah J. Tsinhnahjinnie is a two-spirit artist known for her photographic work rooted in Native American sovereignty. She is a professor and museum director, using her art and scholarship to uplift Indigenous and LGBTQ+ voices.",
      imageUrl: "/public-figs/Hulleah-Tsinhnahjinnie.jpeg",
      prominentFigure: {
        name: "Hulleah Tsinhnahjinnie",
        born: "1954",
        died: "present",
        bio: "Seminole/Muscogee/Diné photographer, curator, and writer. A two-spirit multi-media artist and professor of Native American Studies at UC Davis. Her work challenges stereotypical representations of Native Americans and explores themes of sovereignty and identity.",
        works: [
          {
            title:
              "Photographic series like 'Native Programming' and 'Aboriginal Savant'",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGekIG3BnrRkjv-tcB8o-u4HM2D37LvbALg&s",
          },
          {
            title:
              "Contributions to books like 'Strong Hearts: Native American Visions and Voices'",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6g4ilhcqI6ZJ1usrDr7rk4IetIDdktcv5BQ&s",
          },
        ],
        events: [
          {
            title: "Director of the C.N. Gorman Museum at UC Davis",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5wuy1GNMddSt7JTmCHbgRpSUYerIo--0ew&s",
          },
          {
            title: "Numerous solo and group exhibitions internationally",
            imageUrl:
              "/works/dispatcher.jpeg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/hulleahtisnhanahjinnie.jpg",
      },
      referenceUrl: [
        "https://www.hulleah.com/9to5/HT%20Publications.htm",
        "https://nas.ucdavis.edu/people/hulleah-tsinhnahjinnie-seminolemuscogeedine",
      ],
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
        "/public-figs/audre-lorde.jpg",
      prominentFigure: {
        name: "Audre Lorde",
        born: "Feb 18, 1934",
        died: "Nov 17, 1992",
        bio: "American writer, feminist, womanist, librarian, and civil rights activist. She described herself as a 'Black, lesbian, mother, warrior, poet.' Her work confronts issues of racism, sexism, classism, and homophobia.",
        works: [
          {
            title: "Sister Outsider: Essays and Speeches (1984)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCvJvuNxGWbCFZeK_SfwLnNytHrFulonAzA&s",
          },
          {
            title: "Zami: A New Spelling of My Name (1982)",
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388344915i/395220.jpg",
          },
          {
            title: "The Cancer Journals (1980)",
            imageUrl:
              "/works/the_cancer_journals.jpeg",
          },
        ],
        events: [
          {
            title: "Co-founder of Kitchen Table: Women of Color Press (1980)",
            imageUrl:
              "/works/Women_Of_The_Colors.jpeg",
          },
          {
            title: "Activism in feminist and civil rights movements",
            imageUrl:
              "https://cdn.britannica.com/62/206062-050-14316A0D/Rally-for-Womens-Lives-April-9-1999-Washignton-DC.jpg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/audrelorde.jpg",
      },
      referenceUrl: [
        "https://www.poetryfoundation.org/poets/audre-lorde",
        "https://en.wikipedia.org/wiki/Audre_Lorde",
      ],
    },
    {
      id: "ceyenne_doroshow",
      title: "Ceyenne Doroshow",
      date: "Unknown",
      shortDescription:
        "Black trans activist, author, and founder of G.L.I.T.S.",
      longDescription:
        "Ceyenne Doroshow is a Black trans activist and author who founded G.L.I.T.S., an organization supporting Black trans people with housing and healthcare. She is a prominent advocate for sex workers and trans rights, working to provide safe spaces and support for marginalized communities.",
      imageUrl: "/public-figs/ceyenne.jpg",
      prominentFigure: {
        name: "Ceyenne Doroshow",
        born: "Unknown",
        died: "Unknown",
        bio: "Black transgender activist, author, and community organizer. Founder and Executive Director of G.L.I.T.S. (Gays and Lesbians Living In a Transgender Society), an organization dedicated to supporting transgender sex workers and other marginalized members of the LGBTQ+ community, particularly with housing and healthcare.",
        works: [
          {
            title: "Cooking in Heels (Cookbook and Memoir)",
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347341035i/16002606.jpg",
          },
          {
            title: "Founding G.L.I.T.S. Inc.",
            imageUrl:
              "https://static1.squarespace.com/static/60776efe4e12000dd2ecf219/t/60884c8a04b7e97ee116b332/1619545236487/IMG_0193.PNG?format=1500w",
          },
        ],
        events: [
          {
            title: "Advocacy for transgender rights and sex workers' rights",
            imageUrl:
              "https://images.squarespace-cdn.com/content/v1/60776efe4e12000dd2ecf219/141bcf48-faf1-4722-a5d2-a67e5ff564f1/sidewalkkilla_brooklyn_liberation_march_2020-7041.JPG",
          },
          {
            title: "Establishing housing initiatives for Black trans people",
            imageUrl:
              "https://images.squarespace-cdn.com/content/v1/60776efe4e12000dd2ecf219/261d34fe-5673-42bb-af8e-1dc29f68c0d2/IMG_7734.jpg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/ceyenne-doroshow.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Ceyenne_Doroshow",
        "https://www.instagram.com/doroshow/?hl=en",
        "https://www.glitsinc.org/executivedirector",
        "https://www.them.us/story/ceyenne-doroshow-transgender-society-glits-activist-profile-million-fundraiser",
      ],
    },
    {
      id: "erestine_eckstein",
      title: "Erestine Eckstein",
      date: "1941-1992",
      shortDescription: "Leader in early lesbian and Black feminist movements.",
      longDescription:
        "Erestine Eckstein was a leader of the Daughters of Bilitis, the first lesbian civil and political rights organization in the U.S. She was also an early activist in the Black feminist movement, advocating for the intersection of civil rights and LGBTQ+ rights.",
      imageUrl: "/public-figs/ernestine.webp",
      prominentFigure: {
        name: "Erestine Eckstein",
        born: "Apr 23, 1941",
        died: "Jul 15, 1992",
        bio: "African American lesbian activist and a key figure in the early homophile movement. She served as vice-president of the New York chapter of Daughters of Bilitis and was one of the few women of color visible in the movement at the time. She advocated for more radical tactics and intersectional approaches.",
        works: [
          {
            title: "Leadership in Daughters of Bilitis, New York Chapter",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWCK_mRE5Orf6pI9bdAi8VO7SqYpAEpMMeQ&s",
          },
        ],
        events: [
          {
            title: "Participation in early LGBTQ+ rights pickets (mid-1960s)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYoBZ7F1mQenlTL31mysLkMHYgL4OTpMtUA&s",
          },
          {
            title:
              "Featured on the cover of 'The Ladder' (June 1966), a prominent lesbian publication",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbefFeT0ky4JmLkxDEiaZUxPYUmbV6YHbNqw&s",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/erestein-eckstein.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Erestine_Eckstein",
        "https://makinggayhistory.org/podcast/ernestine-eckstein/",
        "https://epgn.com/2022/02/09/black-history-month-ernestine-eckstein/",
      ],
    },
    {
      id: "barbara_gittings",
      title: "Barbara Gittings",
      date: "1932-2007",
      shortDescription: "Pioneering gay rights activist and organizer.",
      longDescription:
        "Barbara Gittings was a key figure in the early gay rights movement, founding the first lesbian civil rights organization in the U.S. and organizing public demonstrations for equality. She also promoted gay literature and worked with the American Library Association to increase LGBTQ+ representation.",
      imageUrl: "/public-figs/barbara-gittings.jpg",
      prominentFigure: {
        name: "Barbara Gittings",
        born: "Jul 31, 1932",
        died: "Feb 18, 2007",
        bio: "Prominent American activist for LGBTQ+ equality. She organized the New York chapter of the Daughters of Bilitis (DOB) from 1958 to 1963, edited its national magazine The Ladder from 1963 to 1966, and picketed with the DOB for والمساواة for gay rights in the 1960s. She was instrumental in the American Psychiatric Association's 1973 decision to de-list homosexuality as a mental illness.",
        works: [
          {
            title: "Editor of 'The Ladder' (1963-1966)",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_Ladder%2C_October_1957.jpg/250px-The_Ladder%2C_October_1957.jpg",
          },
        ],
        events: [
          {
            title:
              "Organized 'Annual Reminder' pickets at Independence Hall (1965-1969)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqMRrgXtLFkuJgSfEQMB1sOIYEKwD7WLuLQ&s",
          },
          {
            title:
              "Campaigned to remove homosexuality from APA's list of mental illnesses (successfully in 1973)",
            imageUrl:
              "/works/chicago.jpeg",
          },
          {
            title: "Headed the American Library Association's Gay Task Force",
            imageUrl:
              "https://static01.nyt.com/images/2007/03/15/us/15gittings_lg.jpg?quality=75&auto=webp&disable=upscale",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/barbara-gittings.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Barbara_Gittings",
        "https://ppimhs.org/newspost/barbara-gittings-mother-of-the-lgbt-civil-rights-movement/",
        "https://history.delaware.gov/lgbtq/barbara-gittings/",
      ],
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
      prominentFigure: {
        name: "Major Griffin-Gracy (Miss Major)",
        born: "Oct 25, 1940",
        died: "present",
        bio: "Black transgender elder, activist, and community leader. A veteran of the Stonewall Riots, she has been advocating for transgender rights for over 50 years, particularly for transgender women of color, and those who have been incarcerated or involved in sex work. Founder of the House of GG (Griffin-Gracy Educational Retreat & Historical Center).",
        works: [
          {
            title:
              "Founding The House of GG (Griffin-Gracy Educational Retreat & Historical Center)",
            imageUrl:
              "/works/gg.png",
          },
        ],
        events: [
          {
            title: "Participant in the Stonewall Riots (1969)",
            imageUrl:
              "/works/stonewall.jpeg",
          },
          {
            title:
              "Lifelong advocacy for transgender women of color, incarcerated individuals, and sex workers",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KwUiTxl9GegGbRQN2piWuc1sO4sRpb5Cxg&s",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/miss-major-griffin-gracy.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Miss_Major_Griffin-Gracy",
        "https://missmajor.net/",
        "https://wams.nyhistory.org/end-of-the-twentieth-century/the-information-age/miss-major-griffin-gracy/",
      ],
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
      prominentFigure: {
        name: "Marsha P. Johnson",
        born: "Aug 24, 1945",
        died: "Jul 6, 1992",
        bio: "African American gay liberation activist and self-identified drag queen. A prominent figure in the Stonewall uprising of 1969, Johnson was a co-founder of the Street Transvestite Action Revolutionaries (STAR) with Sylvia Rivera, advocating for homeless transgender youth, sex workers, and people with HIV/AIDS.",
        works: [
          {
            title:
              "Co-founder of Street Transvestite Action Revolutionaries (STAR)",
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1497005425i/34659225.jpg",
          },
          {
            title: "Performances with Hot Peaches drag troupe",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76DEP2JAXQc06cq8R-OLFHCr6Xh-qxd7aBQ&s",
          },
        ],
        events: [
          {
            title: "Key figure in the Stonewall Uprising (1969)",
            imageUrl:
              "https://images.squarespace-cdn.com/content/v1/631250318225492f20231654/9df601d7-9033-45b7-91a2-5278ac07b903/marsha-p-johnson-stonewall-riots.jpg",
          },
          {
            title: "Activism with Gay Liberation Front and ACT UP",
            imageUrl:
              "/works/activism.jpg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/marsha-p-johnson.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Marsha_P._Johnson",
        "https://www.biography.com/activist/marsha-p-johnson",
      ],
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
      prominentFigure: {
        name: "Ifti Nasim",
        born: "Sep 1946",
        died: "Jul 22, 2011",
        bio: "Pakistani-American gay poet and activist. He published 'Narman' (Persian for 'hermaphrodite' or 'half-man, half-woman'), considered the first openly gay-themed poetry collection in Urdu. He co-founded Sangat, an organization supporting LGBTQ South Asians, and was inducted into the Chicago Gay and Lesbian Hall of Fame.",
        works: [
          {
            title: "Narman (Poetry Collection, 1994)",
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696562973i/166642219.jpg",
          },
        ],
        events: [
          {
            title: "Co-founder of Sangat/Chicago",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB29DYmx1hz4R7HjU8UhbO0BgDwfvxjzmqMQ&s",
          },
          {
            title: "Inducted into Chicago Gay and Lesbian Hall of Fame (1996)",
            imageUrl: "/works/chicago2.jpg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/ifti-nasim.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Ifti_Nasim",
        "https://chicagolgbthalloffame.org/nasim-ifti/",
        "https://www.makingqueerhistory.com/articles/2021/8/28/ifti-nasim",
      ],
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
      prominentFigure: {
        name: "Simon Nkoli",
        born: "Nov 26, 1957",
        died: "Nov 30, 1998",
        bio: "South African anti-apartheid, gay rights, and HIV/AIDS activist. He founded the Gay and Lesbian Organisation of the Witwatersrand (GLOW) and was one of the first Black anti-apartheid activists to publicly identify as gay. He played a crucial role in the fight for LGBTQ+ equality in post-apartheid South Africa.",
        works: [
          {
            title:
              "Founding Gay and Lesbian Organisation of the Witwatersrand (GLOW)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_2dsQALKnWNjDMVJIqMxN84LgXWAkzbHvg&s",
          },
        ],
        events: [
          {
            title: "Delmas Treason Trial defendant (1985-1989)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CZs0cbuxcNyGJGkrZNfAFDDrZh_Nzkjtow&s",
          },
          {
            title:
              "Campaigning for the inclusion of non-discrimination based on sexual orientation in the South African Constitution",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JUEe4HKXEYWkOH7NZeeyfmIIq-damZTnhw&s",
          },
          {
            title: "One of the first openly HIV-positive African men",
            imageUrl:
              "https://images.theconversation.com/files/496715/original/file-20221122-21-6degfb.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/simon-nkoli.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Simon_Nkoli",
        "https://www.sahistory.org.za/people/simon-nkoli",
        "https://theconversation.com/simon-nkolis-fight-for-queer-rights-in-south-africa-is-finally-being-celebrated-24-years-after-he-died-194741",
      ],
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
      prominentFigure: {
        name: "Sylvia Rivera",
        born: "Jul 2, 1951",
        died: "Feb 19, 2002",
        bio: "American gay liberation and transgender rights activist of Puerto Rican and Venezuelan descent. A veteran of the Stonewall uprising, she co-founded the Street Transvestite Action Revolutionaries (STAR) with Marsha P. Johnson, focusing on supporting homeless young drag queens, gay youth, and trans women.",
        works: [
          {
            title:
              "Co-founder of Street Transvestite Action Revolutionaries (STAR)",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/STAR_Rally.jpg/1200px-STAR_Rally.jpg",
          },
        ],
        events: [
          {
            title: "Key figure in the Stonewall Uprising (1969)",
            imageUrl:
              "https://static01.nyt.com/images/2019/06/07/nyregion/07stonewalljp1-print/06stonewall31-superJumbo.jpg",
          },
          {
            title:
              "Advocacy for transgender rights and inclusion within the broader LGBTQ+ movement",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ151zHr4Dg_Lz7bM7TtNIGexrKr2zN-MVW6w&s",
          },
          {
            title:
              "'Y'all Better Quiet Down' speech (1973 Christopher Street Liberation Day Rally)",
            imageUrl:
              "/works/speech.jpg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/sylvia-rivera.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Sylvia_Rivera",
        "https://www.womenshistory.org/education-resources/biographies/sylvia-rivera",
        "https://www.britannica.com/biography/Sylvia-Rivera",
        "https://www.biography.com/activist/sylvia-rivera",
      ],
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
      prominentFigure: {
        name: "Hannah Mouseback",
        born: "Unknown",
        died: "Unknown",
        bio: "The provided `longDescription` refers to Hannah Moushabeck, a Palestinian American author, editor, and book marketer, known for 'Homeland: My Father Dreams of Palestine' and sharing her queer love story. The `shortDescription` states 'Transgender rights activist and community organizer.' Due to this discrepancy, the bio synthesizes available information while noting the name in the description differs.",
        works: [
          {
            title:
              "Homeland: My Father Dreams of Palestine (as Hannah Moushabeck)",
            imageUrl:
              "/works/homeland.jpg",
          },
        ],
        events: [
          {
            title:
              "Public speaking on literature, Palestinian heritage, and queer identity (as Hannah Moushabeck)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qLNoB0snzqupODAkSrVXLxhhB8xIyQSM7g&s",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/hannahmoucheback.jpg",
      },
      referenceUrl: [
        "https://www.hannahmoushabeck.com/",
        "https://www.publishersweekly.com/9781797202051",
      ],
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
      prominentFigure: {
        name: "Bayard Rustin",
        born: "Mar 17, 1912",
        died: "Aug 24, 1987",
        bio: "American leader in social movements for civil rights, socialism, nonviolence, and gay rights. He was a chief architect of the 1963 March on Washington for Jobs and Freedom and a close advisor to Martin Luther King Jr. Despite facing discrimination for being openly gay, he was a lifelong activist.",
        works: [
          {
            title:
              "Organizer of the March on Washington for Jobs and Freedom (1963)",
            imageUrl:
              "/works/1963.jpg",
          },
        ],
        events: [
          {
            title: "Advisor to Martin Luther King Jr. on nonviolent tactics",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_kSIP6AmaI24FR2yVn0bNP30HD4O03b0gA&s",
          },
          {
            title: "Advocacy for gay rights, particularly in his later years",
            imageUrl:
              "https://images.theconversation.com/files/505703/original/file-20230121-31574-irg6sz.jpg?ixlib=rb-4.1.0&rect=95%2C106%2C3647%2C5044&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
          },
          {
            title:
              "Posthumously awarded the Presidential Medal of Freedom (2013)",
            imageUrl:
              "/works/obama.jpg",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/bayard-rustin.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Bayard_Rustin",
        "https://www.biography.com/activist/bayard-rustin",
        "https://www.nytimes.com/2020/02/05/us/bayard-rustin-pardon.html",
      ],
    },
    {
      id: "jackie_shane",
      title: "Jackie Shane",
      date: "1940-2019",
      shortDescription: "Transgender soul singer and LGBTQ+ icon.",
      longDescription:
        "Jackie Shane was a transgender soul singer from Nashville who built a large following in the U.S. and Canada during the 1960s. Her album 'Any Other Way' received a Grammy for best historical album in 2019, cementing her legacy as a music and LGBTQ+ icon.",
      imageUrl: "/public-figs/jackie-shane.jpg",
      prominentFigure: {
        name: "Jackie Shane",
        born: "May 15, 1940",
        died: "Feb 21, 2019",
        bio: "American-Canadian soul and R&B singer who was a pioneering transgender performer. She was prominent in the Toronto music scene in the 1960s. Her live album 'Any Other Way' (reissued in 2017) gained critical acclaim and a Grammy nomination, bringing renewed attention to her legacy.",
        works: [
          {
            title: "Any Other Way (Live album, reissued 2017)",
            imageUrl:
              "https://m.media-amazon.com/images/M/MV5BMTg0OGUwNWItOWExMy00YzRmLTllYjktNTUxNmFhYzkxNTBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
          {
            title: "Stand Up Straight and Tall (Single)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Lr5BdIUtjoqDdRvztb9pQBlTvCi7MyHw4A&s",
          },
        ],
        events: [
          {
            title: "Prominent R&B performance career in Toronto (1960s)",
            imageUrl:
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-09/240920-nashville-jackie-shane-ch-1031-0c75e3.jpg",
          },
          {
            title:
              "Grammy Award nomination for Best Historical Album for 'Any Other Way' (2019)",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSIklsmhHvzWqkvElOwkCnujRAsWU4MWE-A&s",
          },
        ],
        imageUrl:
          "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/jackie-shane.jpg",
      },
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Jackie_Shane",
        "https://www.nytimes.com/2019/02/22/obituaries/jackie-shane-dead.html",
      ],
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
        "The Stonewall Riots, erupting in the early morning hours of June 28, 1969, at the mafia-owned Stonewall Inn in New York City's Greenwich Village, are widely considered the single most important catalyst for the gay liberation movement and the modern fight for LGBTQ+ rights in the United States. At the time, the Stonewall Inn was one of the few establishments that welcomed openly gay individuals, despite operating without a liquor license and under constant threat of police raids. When police raided the bar that night, patrons—a diverse crowd including drag queens, transgender individuals, gay men, lesbians, and people of color, with figures like Marsha P. Johnson and Sylvia Rivera becoming prominent—along with other community members, spontaneously resisted arrest and police harassment. This ignited six days of protests, street demonstrations, and violent clashes with law enforcement. Stonewall marked a profound shift from the more assimilationist 'homophile' movement to a radical, confrontational, and direct-action approach, leading to the formation of numerous LGBTQ+ rights organizations, such as the Gay Liberation Front and the Gay Activists Alliance, and fundamentally changing the landscape of queer activism.",
      imageUrl: "/events/stonewall_.png",
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Stonewall_riots",
        "https://www.history.com/topics/gay-rights/the-stonewall-riots",
        "https://www.britannica.com/event/Stonewall-riots",
      ],
    },
    {
      id: "act_up_formation",
      title: "ACT UP Formation",
      date: "March 1987",
      shortDescription:
        "Formation of AIDS Coalition to Unleash Power (ACT UP), a direct-action advocacy group.",
      longDescription:
        "The AIDS Coalition to Unleash Power (ACT UP) was formed in March 1987 in New York City, following a galvanizing speech by writer and activist Larry Kramer. It emerged as a pivotal direct-action advocacy group dedicated to combating the devastating AIDS pandemic through aggressive public demonstrations, medical research, treatment advocacy, and profound policy changes. Deeply frustrated by governmental inaction, societal indifference, widespread stigma, and the slow pace of drug development, ACT UP utilized confrontational civil disobedience tactics. Their iconic 'Silence = Death' campaign, 'die-ins' at public spaces, and targeted protests at institutions like the FDA, NIH, and Wall Street, dramatically raised public awareness, demanded urgent research funding, and successfully pressured for accelerated availability of life-saving treatments. ACT UP's activism, characterized by sophisticated media strategies and well-researched policy demands, significantly impacted public health policy, transformed the drug approval process, and forever changed the relationship between patients and the medical establishment in the fight against HIV/AIDS.",
      imageUrl: "/events/act.jpg",
      referenceUrl: [
        "https://en.wikipedia.org/wiki/ACT_UP",
        "https://actupny.org/",
        "https://www.poz.com/basics/hiv-basics/act-up",
      ],
    },
    {
      id: "harvey_milk_election",
      title: "Harvey Milk Elected to San Francisco Board of Supervisors",
      date: "November 8, 1977",
      shortDescription:
        "Harvey Milk becomes one of the first openly gay elected officials in the United States.",
      longDescription:
        "Harvey Milk's election to the San Francisco Board of Supervisors on November 8, 1977, was a groundbreaking moment for LGBTQ+ political power and visibility, making him one of the first openly gay men elected to a significant public office in the United States. Operating from his Castro Camera shop, which became an informal community center, Milk built a diverse 'Rainbow Coalition' of supporters, championing not only gay rights but also the concerns of ethnic minorities, seniors, and labor unions. His platform emphasized neighborhood empowerment, affordable housing, and public services, resonating broadly. Milk's charismatic leadership and his famous 'Hope Speech,' urging LGBTQ+ individuals to come out and live authentically to combat prejudice, inspired a generation. Tragically, his promising tenure was cut short when he, along with Mayor George Moscone, was assassinated by former Supervisor Dan White on November 27, 1978, just eleven months after taking office. Despite his brief time in office, Milk's legacy as a pioneering activist, a symbol of hope, and a martyr for the cause endures, continuing to inspire movements for equality and political engagement worldwide.",
      imageUrl: "/events/harvey.jpg",
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Harvey_Milk",
        "https://www.history.com/topics/gay-rights/harvey-milk",
        "https://www.biography.com/political-figure/harvey-milk",
      ],
    },
    {
      id: "dadt_repeal",
      title: "Repeal of 'Don't Ask, Don't Tell'",
      date: "September 20, 2011",
      shortDescription:
        "U.S. policy allowing gay, lesbian, and bisexual individuals to serve openly in the military was certified as repealed.",
      longDescription:
        "The certification of the repeal of 'Don't Ask, Don't Tell' (DADT) on September 20, 2011, marked a historic victory for LGBTQ+ rights, allowing gay, lesbian, and bisexual individuals to serve openly in the United States military for the first time. Enacted in 1993 under President Bill Clinton, DADT was a compromise policy that prohibited military personnel from discriminating against or harassing closeted homosexual or bisexual service members, but it barred openly gay, lesbian, or bisexual persons from military service. This policy forced an estimated 65,000 service members to conceal their identity, live in constant fear of exposure, and led to the discharge of over 13,000 individuals solely based on their sexual orientation. The repeal, signed into law by President Barack Obama on December 22, 2010, followed years of persistent activism, legal challenges by groups like the Servicemembers Legal Defense Network (SLDN), and courageous testimonies from discharged veterans. Its implementation nearly nine months later finally ended a discriminatory practice, affirming that the dedication and patriotism of service members should not be contingent on their sexual orientation, and strengthening the U.S. armed forces by allowing qualified individuals to serve with honesty and integrity.",
      imageUrl: "/events/repeal.webp",
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Don%27t_ask,_don%27t_tell",
        "https://www.history.com/topics/us-government/dont-ask-dont-tell",
        "https://www.cfr.org/backgrounder/us-military-and-lgbt-policy",
      ],
    },
    {
      id: "obergefell_v_hodges",
      title: "Obergefell v. Hodges",
      date: "June 26, 2015",
      shortDescription:
        "U.S. Supreme Court ruling legalizing same-sex marriage nationwide.",
      longDescription:
        "In the landmark 5-4 decision of Obergefell v. Hodges on June 26, 2015, the U.S. Supreme Court ruled that the fundamental right to marry is guaranteed to same-sex couples by both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment to the United States Constitution. This historic ruling, with the majority opinion penned by Justice Anthony Kennedy, legalized same-sex marriage in all fifty states, effectively overturning previous state bans and resolving conflicting lower court decisions. The case was brought by several groups of same-sex couples, including lead plaintiff Jim Obergefell who sought to be recognized as the surviving spouse on his late husband John Arthur's Ohio death certificate. The decision marked a pivotal victory for the LGBTQ+ rights movement, culminating decades of relentless activism, legal challenges, public education campaigns, and evolving public opinion, starting from early state-level victories like Massachusetts in 2004. Beyond the legal right to marry, the ruling represented a significant affirmation of dignity and equality for LGBTQ+ individuals and families across the nation, though advocates noted that the fight for comprehensive non-discrimination protections and full lived equality continues.",
      imageUrl: "/events/marriage.jpg",
      referenceUrl: [
        "https://en.wikipedia.org/wiki/Obergefell_v._Hodges",
        "https://www.oyez.org/cases/2014/14-556",
        "https://www.history.com/topics/gay-rights/obergefell-v-hodges",
      ],
    },
  ],
  gender_fluidity: [
    {
      id:"agender",
      title: "Agender",
      date: "",
      shortDescription:"A person who identifies as having no gender or being gender-neutral.",
      longDescription:"Agender individuals do not identify with any gender. They may describe themselves as genderless, gender-neutral, or lacking a gender identity altogether. This identity falls under the nonbinary umbrella, challenging traditional gender norms. Agender people may prefer gender-neutral pronouns like they/them, but pronoun preferences can vary. ",
      imageUrl:"https://static.wikia.nocookie.net/gender/images/2/27/Agender_Alt.png/revision/latest?cb=20201015220316",
      famousPeople: [
        {
          name:"Angel Haze",
          born:"July 10, 1991",
          bio:"Angel Haze identifies as agender, having no gender identity. Rather than using pronouns like he or she, people contort themselves as they write about Haze calling the MC `they`. It's something Haze is happy to give voice to, but doesn't take that seriously.",
          imageUrl:"https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2012/8/20/1345479496323/Angel-Haze-photographed-i-010.jpg?width=465&dpr=1&s=none&crop=none",

        },
        {
          name:"Tyler Ford",
          born:"October 25, 1990",
          bio:"R. B. Lemberg is a queer, bigender, and autistic author, poet, and editor of speculative fiction.",
          imageUrl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6ApLj6oKaO2Ce7ajT_2oDW6MiZTMbHE7Q9Q-yNV4yZINtdBaG",

        },
        {
          name:"Anjimile",
          born:"1993",
          bio:"Anjimile is a Black, non-binary Agender singer-songwriter (he/him, they/them) makes peace with a destructive former self once consumed by addiction while also discovering his place within his deep Malawian lineage. Perhaps most importantly, he embraces and introduces the world to his new trans identity — for the very first time, his mind, body, and spirit are aligned. ",
          imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwqHpLuewa-vUlb_sL7mGsKbLDq1mJK2--R2MNCyqxX_e8eAJPkJdoARpYeLSGr2TcCt5WWVBI8VTfJSZdmUuiw",

        },


      ],

    },
    {
      id:"bigender",
      title: "Bigender",
      date: "",
      shortDescription:"A person who identifies with two distinct gender identities, either simultaneously or alternating between them.",
      longDescription:"Bigender individuals experience two gender identities, which can be male and female or a combination of different genders. These identities may be experienced at the same time or at different times. Bigender is a nonbinary identity that challenges the traditional gender binary and allows for a fluid experience of gender.",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bigender_Flag.svg/2560px-Bigender_Flag.svg.png",
      famousPeople: [
        {
          name:"Ari Kane",
          born:"1936",
          bio:"Ari Kane, born in 1936, is a counselor, gerontologist, and sexologist known for founding the Outreach Institute of Gender Studies as well as Fantasia Fair, a yearly festival for the transgender and gender-nonconforming community. Kane is bi-gender and androgynous, identifying with both masculinity and femininity.",
          imageUrl:"https://www.uvic.ca/transgenderarchives/assets/images/photo-galleries/ari-kane/Rikki-Swin_2008-006_05.04.jpg",

        },
        {
          name:"R.B. Lemberg",
          born:"September 27, 1976",
          bio:"R. B. Lemberg is a queer, bigender, and autistic author, poet, and editor of speculative fiction.",
          imageUrl:"https://images.squarespace-cdn.com/content/v1/650dc12b21fada27bc10d0e0/144c1bce-d179-44d2-9d9c-2b5deacb19d2/Lemberg+photo.jpeg",

        },
        {
          name:"Jonathan van Ness",
          born:"March 28, 1987",
          bio:"Jonathan Van Ness identifies as non-binary, meaning their gender identity falls outside of the traditional binary of male and female. They have described themselves as `genderqueer` and have expressed that they feel most comfortable with he/him pronouns. Van Ness also stated that they don't always feel like a boy or a girl, and that they are comfortable with being `gender-bendy` or `non-conform-y`. ",
          imageUrl:"https://media.vanityfair.com/photos/6256da5967f4b24bbe872165/master/w_2560%2Cc_limit/Jonathan-Van-Ness-press-by-Danielle-Levitt-2022-lede.jpg",

        },
      ],
    },
    {
      id: "cisgender",
      title: "Cisgender",
      date: "",
      shortDescription:"Cisgender people identify with the gender they were assigned at birth, and their gender identity aligns with societal expectations based on that assignment.",
      longDescription:"Cisgender (or `cis`) individuals have a gender identity that corresponds with the sex they were designated at birth. For example, someone assigned male at birth who identifies as a man is cisgender. The term is used in contrast with transgender and helps highlight that not all gender identities follow the traditional binary or assigned roles. Being cisgender does not imply conformity to traditional gender roles—it simply refers to identity alignment.",
      imageUrl:"https://static.wikia.nocookie.net/gender/images/8/87/Cisgender_Flag.png/revision/latest?cb=20250307092632",
      famousPeople:[
        {
          name:"Chris Evans",
          born:"June 13, 1981",
          bio:"Chris Evans is an American actor best known for his role as Captain America in the Marvel Cinematic Universe. He began his career in television before transitioning to film, gaining widespread fame for his superhero roles. Evans is widely recognized as a cisgender man and supports various humanitarian and political causes.",
          imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chris_Evans_-_Captain_America_2_press_conference_%28cropped%29.jpg/250px-Chris_Evans_-_Captain_America_2_press_conference_%28cropped%29.jpg",

        },
        {
          name:"Emma Watson",
          born:"April 15, 1990",
          bio:"Emma Watson is a cisgender woman. Her gender identity aligns with the sex assigned to her at birth. She is a well-known advocate for gender equality and women's rights, having served as a UN Women Goodwill Ambassador since 2014 and is a key figure in the HeForShe campaign. She has spoken publicly about her experiences with sexism and the importance of gender equality.",
          imageUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
        },

        {
          name:"Taylor Swift",
          born:"December 13, 1989",
          bio:"Taylor Swift is an American singer-songwriter and actress known for her narrative songwriting and genre-spanning music, ranging from country to pop and indie rock. She began her career as a teenager and quickly rose to global fame with hits like Love Story, Blank Space, and Anti-Hero. Swift has won numerous awards, including Grammys, and is recognized for her activism, especially in women's rights and LGBTQ+ issues. She identifies as a cisgender woman.", 
          imageUrl:"https://s.yimg.com/ny/api/res/1.2/TynxsgV3vfkmx8XE.waLAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MTA-/https://media.zenfs.com/en/men_s_journal_718/e04906279c9f853c654573716796786a",
        }
      ],
    },
    {
      id:"gender_fluid",
      title:"Gender Fluid",
      date:"",
      shortDescription:"A gender identity that may shift over time between different expressions",
      longDescription:"Genderfluid individuals experience a gender identity that is dynamic and flexible, often moving between different gender expressions or identities. Their gender may shift over hours, days, or years and can include male, female, both, neither, or other identities. Genderfluidity is a form of nonbinary identity and reflects the fluid nature of some people's experiences with gender beyond fixed categories.",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Genderfluidity_Pride-Flag.svg/1200px-Genderfluidity_Pride-Flag.svg.png",
      famousPeople:[
        {
          name:"Cara Delevingne",
          born:"August 12, 1992",
          bio:"Delevingne is openly bisexual/pansexual. In May 2018, Delevingne came out as genderfluid.In a 2019 article she stated, `The whole idea of gender is so fixed. I just want to, like, explode it. I'm not nonbinary, but I feel as much man as I am woman.` She echoed this sentiment in a 2020 interview with Variety, saying `Some days, I feel more womanly. Some days, I feel more like a man.`",
          imageUrl:"/public-figs/cara.jpg"
        },
        {
          name:"Jaden Smith",
          born:"March 26, 1948",
          bio:"Jaden Smith is known for his gender-fluid fashion choices and is a prominent figure in challenging traditional gender norms. He has consistently worn clothing that blurs the lines between masculine and feminine, including skirts, dresses, and heels, both on and off the red carpet. In 2016, he even launched his own gender-fluid clothing line, MSFTSrep, which embraces unconventional styles.",
          imageUrl:"https://metro.co.uk/wp-content/uploads/2019/06/PRI_72119593-e1584641348855.jpg?quality=90&strip=all&w=646"
        },
        {
          name:"Miley Cyrus",
          born:"March 26, 1948",
          bio:"Miley Cyrus has expressed that she feels `gender-neutral and gender-fluid`. She has stated that she doesn't identify strongly with traditional gender roles and feels that gender is `irrelevant` in relationships. She has also come out as pansexual, meaning she is attracted to people regardless of their gender. Miley has used her platform to advocate for gender equality and acceptance. ",
          imageUrl:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-05/miley-cyrus-voice-zz-250522-af5d88.jpg"
        },
      ],

    },


    {
      id:"genderqueer",
      title: "Genderqueer",
      date: "",
      shortDescription:"A person whose gender identity exists outside the traditional binary of male and female.",
      longDescription:"Genderqueer individuals reject or do not adhere to the conventional gender binary. Their gender identity may be a combination of genders, fluid, or entirely independent of traditional gender categories. The term emerged in the 1990s within activist communities and serves as an umbrella term for various nonbinary identities, including agender, bigender, and genderfluid. Genderqueer people may use diverse pronouns and often challenge societal norms related to gender.",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Genderqueer_Pride_Flag.svg/1200px-Genderqueer_Pride_Flag.svg.png",
      famousPeople: [
        {
          name: "Alok Vaid-Menon",
          born: "July 1, 1991",
          bio: "Alok Vaid-Menon is an American writer, performance artist, and media personality. Vaid-Menon is gender non-conforming and transfeminine, and uses the singular they third person pronouns.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflC68R87Zbhr399RjjWVp9XZ4pOStoz0W7LYakkCz5X7hjTPzloew0CTUTCSnfpvEnbydT_ERyzBzvhbF67xckQ",
        },
        {
          name: "King Princess (Mikaela Straus)",
          born: "December 19, 1998",
          bio: "King Princess, whose real name is Mikaela Straus, identifies as genderqueer and uses she/her pronouns. She has stated that her stage name reflects the `complexity of [her] gender`. She is also a lesbian. ",
          imageUrl: "https://cultmtl.com/wp-content/uploads/2019/10/King-Princess.jpg",
        },
        {
          name:"Demi Lovato",
          born:"August 20, 1992",
          bio:"Demi Lovato identifies as non-binary and uses both `they/them` and `she/her` pronouns. While Lovato initially transitioned to `they/them` pronouns in 2021, they have since re-adopted `she/her` pronouns, according to multiple news outlets. Lovato has also said that they feel most comfortable in gender-neutral spaces and prefer genderless bathrooms",
          imageUrl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTac6Qb_TBZYwLyRj16PycDAQZu7FdgCpYkKddNxCBQuUZtTc5q3A28Yd-Q-EinbH3wrPuciIswpFAfvuFw65H3qQ"
        }
      ],
    },

    {
      id: "nonbinary",
      title: "Non-Binary",
      date: "",
      shortDescription: "An umbrella term for gender identities that are not exclusively male or female.",
      longDescription: "Nonbinary people may identify as a mix of both male and female, neither, or as a different gender entirely. It challenges the binary notion of gender and encompasses a variety of identities.",
      imageUrl: "/works/nonbinary.jpg",
      famousPeople: [
        {
          name: "Sam Smith",
          born: "May 19, 1992",
          bio: "Sam Smith is a British singer and songwriter who identifies as nonbinary and uses they/them pronouns. They have been open about their gender identity and advocate for LGBTQ+ rights.",
          imageUrl: "/public-figs/samsmith.jpg",
        },
        {
          name: "Emma Corrin",
          born: "December 13, 1995",
          bio: "Emma Corrin identifies as non-binary and uses they/them pronouns. They came out as queer and non-binary in 2021. Corrin also prefers the term actor over actress.",
          imageUrl: "https://external-preview.redd.it/official-emma-corrin-joins-deadpool-3-v0-IZXM0fDibP_X90QI4wk0GDBam29scXR8ebP_m7BnBro.jpg?auto=webp&s=0974f0d02169b19f48b13d0de42ac9641bb04581",
        },
        {
          name:"Halsey",
          born:"September 29, 1994",
          bio:"Halsey uses the pronouns she/they and identifies as gender-bendy or non-binary. She has stated that she is comfortable with both pronouns and finds the inclusion of (they) in addition to she to be most authentic. ",
          imageUrl:"/public-figs/halsey.jpg"
        }
      ],
      
    },
    {
      id: "transgender",
      title:"Transgender",
      date:"",
      shortDescription:"A person whose gender identity differs from the sex assigned at birth.",
      longDescription:"Transgender (or trans) people identify with a gender different from the one assigned to them at birth. This can include trans men, trans women, and nonbinary individuals. Being transgender is about gender identity, not biological sex or sexual orientation. Transitioning may involve social, medical, or legal steps, though not all trans people choose or can access these processes.",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1200px-Transgender_Pride_flag.svg.png",
      famousPeople:[

        {
          name:"Angie Mead King",
          born:"December 2, 1979",
          bio: "Angie Mead King is a transgender woman, a race car driver, and a model. She came out as a transgender woman in 2016. She was formerly known as Ian King. Her journey to embracing her gender identity and coming out has been well-documented, including in various media outlets and on social media. ",
          imageUrl:"https://aphrodite.gmanetwork.com/entertainment/articles/900_675_8_-20220628111534.jpg"
        },
        {
          name: "BB Gandanghari",
          born:"September 4, 1967",
          bio:"In January 2009, Gandanghari came out as a transgender woman and chose to undergo gender confirmation surgery.",
          imageUrl:"https://od2-image-api.abs-cbn.com/prod/20241113021120/f450530026402bcc0914cb02a7a0217e15c14ab62fe1fab82717c3bcfcd968b9.jpg"
        },
        {
          name: "Ice Seguerra",
          born: "September 17, 1983",
          bio: "Formerly known as Aiza Seguerra, Ice Seguerra has embraced his true identity as a transgender man after initially coming out as a lesbian in 2007. He is a Filipino singer, actor, and director, known for his contributions to the entertainment industry and his advocacy for LGBTQ+ rights in the Philippines.",
          imageUrl: "https://media.philstar.com/photos/2019/08/14/ice-seguerra_2019-08-14_23-37-15.jpg",

        },
        
      ],
    },


 
  ],
  womens_history_unsung: [
    {
      id: "human_rights",
      title: "Human Rights & Social Justice",
      date: "",
      shortDescription:
        "These women were fearless advocates for justice, equality, and dignity—challenging deeply rooted systems of oppression and reshaping civil rights across the globe.",
      longDescription:
        "These women were fearless advocates for justice, equality, and dignity—challenging deeply rooted systems of oppression and reshaping civil rights across the globe.",
      imageUrl:
        "https://images.unsplash.com/photo-1616990630901-08b089148dd0?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      famousPeople: [
        {
          name: "Rosa Parks",
          born: "1913–2005",
          achievement:
            "Refused to give up her bus seat to a white man in 1955, igniting the Montgomery Bus Boycott in Alabama.",
          bio:
            "Rosa Parks is widely recognized as the “Mother of the Civil Rights Movement” in the United States. Her quiet act of defiance became a powerful symbol in the fight against racial segregation. By inspiring a 381-day bus boycott led by Dr. Martin Luther King Jr., Parks helped shift public awareness and pushed for national civil rights reform. Her bravery taught generations that small actions can lead to massive social change.",
        
          imageUrl: "/public-figs/rosaparks.jpg",
        },
        {
          name: "Malala Yousafzai",
          born: "1997–present",
          achievement:
            "Survived an assassination attempt by the Taliban in 2012 and became a global advocate for girls' right to education.",
          bio:
            "Malala’s voice represents millions of silenced young girls who are denied the right to learn. After surviving a bullet to the head at age 15, she continued to speak out through books, speeches, and the Malala Fund. She became the youngest recipient of the Nobel Peace Prize in 2014. Her courage shows that even in the face of terror, the pursuit of knowledge and equality can prevail.",
            imageUrl: "/public-figs/malala.jpg",
        },
        {
          name: "Harriet Tubman",
          born: "c. 1822–1913",
          achievement:
            "Escaped slavery and helped over 70 others find freedom via the Underground Railroad.",
          bio:
            "Harriet Tubman risked her life again and again to lead enslaved people to freedom. As a conductor of the Underground Railroad, she symbolized hope and resistance in a time of brutal slavery. Later, she worked as a nurse, scout, and spy during the Civil War. Her legacy as a fearless liberator continues to inspire movements for freedom and justice today.",
            imageUrl: "/public-figs/harriet.jpg",
        }
      ]
    },
    {
      id: "science_medicine",
      title: "Science & Medicine",
      date: "",
      shortDescription:
        "These scientists and researchers expanded human knowledge and made discoveries that have saved countless lives.",
      longDescription:
        "These scientists and researchers expanded human knowledge and made discoveries that have saved countless lives, advancing public health and scientific understanding around the globe.",
        imageUrl: "/public-figs/women.jpeg",
      famousPeople: [
        {
          name: "Marie Curie",
          born: "1867–1934",
          achievement:
            "First woman to win a Nobel Prize—and the only person to win in two sciences (Physics in 1903 and Chemistry in 1911).",
          bio:
            "Marie Curie shattered gender barriers in science and made groundbreaking discoveries in radioactivity, a term she coined. Her work led to the development of X-rays and cancer treatments. She also opened doors for women in academia, becoming the first female professor at the University of Paris. Her scientific brilliance and dedication changed the course of medical and atomic science forever.",
            imageUrl: "/public-figs/curie.jpg",        },
        {
          name: "Katalin Karikó",
          born: "1955–present",
          achievement:
            "Co-pioneer of mRNA vaccine technology that was critical in the development of the Pfizer-BioNTech and Moderna COVID-19 vaccines.",
          bio:
            "For decades, Katalin Karikó’s work on synthetic mRNA was dismissed as impractical. But her persistence paid off when her research became the foundation for COVID-19 vaccines, saving millions of lives worldwide. She proved that scientific perseverance could revolutionize public health, and her contribution is considered one of the most significant biomedical breakthroughs in modern history.",
            imageUrl: "/public-figs/katalin.jpg",
        },
        {
          name: "Tu Youyou",
          born: "1930–present",
          achievement:
            "Discovered artemisinin, a drug that drastically reduced malaria deaths and earned her a Nobel Prize in 2015.",
          bio:
            "Drawing from ancient Chinese medicine and modern research, Tu Youyou developed a drug that has saved millions, especially in Africa and Asia. She became the first Chinese woman to receive a Nobel Prize in any category. Her work not only bridged traditional and modern medicine but also highlighted the importance of underrepresented voices in global health innovation.",
            imageUrl: "/public-figs/yiuyou.webp",
        }
      ]
    },
    {
      id: "tech_innovation",
      title: "Technology & Innovation",
      date: "",
      shortDescription:
        "These women shaped the digital age and fought for inclusion in tech—paving the way for future innovators.",
      longDescription:
        "These women shaped the digital age and fought for inclusion in tech—paving the way for future innovators. Their work laid the groundwork for programming, software development, and tech equity.",
        imageUrl: "/public-figs/eniac.png",
      famousPeople: [
        {
          name: "Ada Lovelace",
          born: "1815–1852",
          achievement:
            "Wrote the first algorithm for Charles Babbage’s mechanical computer, the Analytical Engine.",
          bio:
            "Ada Lovelace is recognized as the world’s first computer programmer—long before computers existed as we know them. She imagined that machines could manipulate symbols and ideas, not just numbers—a vision that predicted the power of modern computing. Her legacy lives on in every algorithm that powers today’s digital world.",
            imageUrl: "/public-figs/ada.webp",
        },
        {
          name: "Grace Hopper",
          born: "1906–1992",
          achievement:
            "Invented one of the first computer compilers and helped develop COBOL, a foundational programming language.",
          bio:
            "A U.S. Navy rear admiral, Grace Hopper revolutionized programming by making code more accessible through natural-language syntax. She also popularized the term 'debugging.' Hopper’s visionary work laid the foundation for software development, and she mentored generations of programmers, making tech more inclusive and innovative.",
            imageUrl: "/public-figs/hopper.jpg",
        },
        {
          name: "Kimberly Bryant",
          born: "1967–present",
          achievement:
            "Founded Black Girls Code, which teaches coding to girls of color, aiming to diversify the tech industry.",
          bio:
            "Kimberly Bryant saw a lack of representation in Silicon Valley and took action. By creating Black Girls Code, she empowered thousands of young girls with skills in programming, robotics, and AI. Her mission challenges the status quo in tech and proves that innovation thrives when everyone has a seat at the table.",
            imageUrl: "/public-figs/bryant.png",
        }
      ]
    },
    {
      id: "arts_literature",
      title: "Arts & Literature",
      date: "",
      shortDescription:
        "These women redefined storytelling and creative expression—amplifying underrepresented voices and transforming art forever.",
      longDescription:
        "From poetry and novels to performance and visual arts, these women used their talents to express identity, challenge norms, and create cultural legacies that continue to inspire new generations.",
      imageUrl: "/public-figs/art.jpg",
      famousPeople: [
        {
          name: "Frida Kahlo",
          born: "1907–1954",
          achievement:
            "Mexican artist known for her vivid self-portraits exploring identity, pain, and the female experience.",
          bio:
            "Frida Kahlo broke conventions with her bold, personal, and surreal style. Despite suffering lifelong physical pain from polio and a bus accident, she painted haunting works that portrayed her emotional and physical struggles. Her unapologetic expression of womanhood, politics, and culture made her a feminist icon and an enduring force in modern art.",
            imageUrl: "/public-figs/kahlo.jpg",
        },
        {
          name: "Maya Angelou",
          born: "1928–2014",
          achievement:
            "Author of 'I Know Why the Caged Bird Sings' and acclaimed poet and civil rights activist.",
          bio:
            "Maya Angelou gave voice to the Black American experience through her poetry, memoirs, and activism. Her powerful works explored themes of racism, identity, and resilience. Angelou's lyrical prose and commanding presence made her a cultural ambassador and moral leader, inspiring millions through both her words and her work for equality.",
            imageUrl: "/public-figs/angelou.jpg",
        },
        {
          name: "Chimamanda Ngozi Adichie",
          born: "1977–present",
          achievement:
            "Nigerian writer whose works such as 'Half of a Yellow Sun' and 'We Should All Be Feminists' sparked global conversations on identity and feminism.",
          bio:
            "Chimamanda Ngozi Adichie is one of the most influential contemporary voices in literature. Through her novels and essays, she challenges colonial narratives and uplifts African voices. Her TED Talk-turned-book 'We Should All Be Feminists' ignited global discourse on gender equality and identity. She represents a bridge between cultures and generations of thinkers.",
            imageUrl: "/public-figs/chima.webp",
        }
      ]
    },
    {
      id: "environment_sustainability",
      title: "Environment & Sustainability",
      date: "",
      shortDescription:
        "These women fought to protect the planet, advocate for climate justice, and reshape how we care for the Earth.",
      longDescription:
        "From conservation to climate action, these women led environmental movements and influenced global policy. They show that preserving the Earth requires courage, knowledge, and collective responsibility.",
        imageUrl: "/public-figs/envi.jpg",
      famousPeople: [
        {
          name: "Rachel Carson",
          born: "1907–1964",
          achievement:
            "Wrote 'Silent Spring,' a book that exposed the dangers of pesticides and launched the modern environmental movement.",
          bio:
            "Rachel Carson’s compelling writing warned the world about the ecological damage caused by synthetic chemicals. Her landmark book 'Silent Spring' catalyzed policy changes, including the eventual ban of DDT in the U.S., and led to the creation of the Environmental Protection Agency. She proved the pen could be as mighty as any protest.",
            imageUrl: "/public-figs/rachel.png",
        },
        {
          name: "Greta Thunberg",
          born: "2003–present",
          achievement:
            "Swedish climate activist who sparked the global school strike for climate and addressed the UN on climate inaction.",
          bio:
            "Greta Thunberg turned a solitary protest into a global youth movement for climate action. Her clear, science-based demands and fearless speeches to world leaders helped elevate climate change to the forefront of global consciousness. Her activism has inspired millions to join the fight for a livable future.",
            imageUrl: "/public-figs/greta.avif",
        },
        {
          name: "Wangari Maathai",
          born: "1940–2011",
          achievement:
            "Kenyan environmentalist and founder of the Green Belt Movement, promoting tree planting, conservation, and women’s rights.",
          bio:
            "Wangari Maathai combined environmental activism with social justice by empowering women to restore forests and reclaim agency over their land. She became the first African woman to win the Nobel Peace Prize. Her work showed that environmental care and human rights are inseparable.",
            imageUrl: "/public-figs/wang.avif",
        },
      ],
    },
  ],
  
  STDs: [
    {
      id: "chlamydia",
      title: "Chlamydia",
      date: "",
      shortDescription: "A common bacterial STI that often shows no symptoms.",
      longDescription:
        "Chlamydia is a prevalent sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It's often asymptomatic, making regular screenings crucial. If untreated, it can lead to serious reproductive complications. Fortunately, it is easily curable with antibiotics.",
      imageUrl:
        "/stds/chlamydia.jpg",
      symptoms: {
        common: [
          "Abnormal vaginal discharge",
          "Burning sensation during urination",
          "Pain during sexual intercourse",
          "Bleeding between periods",
          "Testicular pain or swelling",
        ],
        severe: [
          "Pelvic inflammatory disease",
          "Chronic pelvic pain",
          "Epididymitis in men",
          "Proctitis (rectal inflammation)",
          "Conjunctivitis",
        ],
        longTerm: [
          "Infertility in women",
          "Increased risk of ectopic pregnancy",
          "Chronic pelvic pain",
          "Reactive arthritis",
          "Increased risk of HIV transmission",
        ],
        prevention: [
          "Regular STI testing",
          "Consistent condom use",
          "Limiting sexual partners",
          "Open communication with partners",
          "Annual screening for sexually active individuals",
        ],
      },
    },
    {
      id: "gonorrhea",
      title: "Gonorrhea",
      date: "",
      shortDescription:
        "A bacterial STI that can infect the genitals, rectum, and throat.",
      longDescription:
        "Gonorrhea is a common sexually transmitted infection caused by Neisseria gonorrhoeae. It can affect multiple areas of the body and often presents no symptoms, especially in women. If left untreated, it can cause serious health issues. Prompt antibiotic treatment is effective.",
      imageUrl: "/stds/gonorrhea.jpg",
      symptoms: {
        common: [
          "Thick, cloudy discharge",
          "Painful urination",
          "Increased vaginal discharge",
          "Bleeding between periods",
          "Swollen testicles",
        ],
        severe: [
          "Disseminated gonococcal infection",
          "Meningitis",
          "Endocarditis",
          "Septic arthritis",
          "Pelvic inflammatory disease",
        ],
        longTerm: [
          "Infertility",
          "Chronic pelvic pain",
          "Increased risk of HIV",
          "Ectopic pregnancy risk",
          "Joint damage",
        ],
        prevention: [
          "Regular STI testing",
          "Consistent condom use",
          "Mutual monogamy",
          "Regular medical check-ups",
          "Partner notification and testing",
        ],
      },
    },
    {
      id: "hpv",
      title: "Human Papillomavirus (HPV)",
      date: "",
      shortDescription:
        "The most common STI, with some types leading to warts or cancer.",
      longDescription:
        "HPV is a widespread sexually transmitted infection with over 100 types. While many infections resolve on their own, some can cause genital warts or lead to cancers such as cervical cancer. Vaccination and regular screenings are key preventive measures.",
      imageUrl:
        "/stds/hpv.webp",
      symptoms: {
        common: [
          "Genital warts",
          "Common warts on hands",
          "Plantar warts on feet",
          "Flat warts on face",
          "No visible symptoms (most cases)",
        ],
        severe: [
          "Cervical cancer",
          "Anal cancer",
          "Penile cancer",
          "Throat cancer",
          "Vulvar cancer",
        ],
        longTerm: [
          "Persistent infection",
          "Recurrent warts",
          "Increased cancer risk",
          "Psychological impact",
          "Relationship challenges",
        ],
        prevention: [
          "HPV vaccination",
          "Regular Pap smears",
          "Safe sex practices",
          "Limiting sexual partners",
          "Regular health screenings",
        ],
      },
    },
    {
      id: "herpes",
      title: "Herpes Simplex Virus (HSV)",
      date: "",
      shortDescription: "A viral STI causing painful blisters or ulcers.",
      longDescription:
        "Herpes simplex virus, encompassing HSV-1 and HSV-2, leads to infections that can cause blisters or ulcers, commonly around the mouth or genitals. The virus remains in the body for life, with symptoms managed through antiviral medications.",
      imageUrl:
        "/stds/herpes.jpeg",
      symptoms: {
        common: [
          "Painful blisters or ulcers",
          "Flu-like symptoms",
          "Swollen lymph nodes",
          "Burning sensation",
          "Itching or tingling",
        ],
        severe: [
          "Severe outbreaks",
          "Meningitis",
          "Encephalitis",
          "Eye infections",
          "Neonatal herpes",
        ],
        longTerm: [
          "Recurrent outbreaks",
          "Psychological impact",
          "Relationship challenges",
          "Increased HIV risk",
          "Chronic pain",
        ],
        prevention: [
          "Antiviral medication",
          "Safe sex practices",
          "Avoiding contact during outbreaks",
          "Regular medical care",
          "Stress management",
        ],
      },
    },
    {
      id: "syphilis",
      title: "Syphilis",
      date: "",
      shortDescription:
        "A bacterial STI with multiple stages, potentially leading to severe health issues.",
      longDescription:
        "Syphilis is a sexually transmitted infection that progresses through stages: primary, secondary, latent, and tertiary. Early stages may present sores or rashes, while later stages can cause serious health problems. Early detection and antibiotic treatment are crucial.",
      imageUrl:
        "/stds/syphilis.jpeg",
      symptoms: {
        common: [
          "Painless sores (chancre)",
          "Rash on palms and soles",
          "Fever and fatigue",
          "Swollen lymph nodes",
          "Muscle aches",
        ],
        severe: [
          "Neurosyphilis",
          "Cardiovascular complications",
          "Gummatous lesions",
          "Hearing loss",
          "Vision problems",
        ],
        longTerm: [
          "Brain damage",
          "Heart disease",
          "Organ damage",
          "Mental health issues",
          "Death (if untreated)",
        ],
        prevention: [
          "Regular STI testing",
          "Safe sex practices",
          "Early treatment",
          "Partner notification",
          "Regular medical check-ups",
        ],
      },
    },
    {
      id: "hiv",
      title: "Human Immunodeficiency Virus (HIV)",
      date: "",
      shortDescription:
        "A virus that attacks the immune system, potentially leading to AIDS.",
      longDescription:
        "HIV is a virus that compromises the immune system, making individuals more susceptible to infections and diseases. Without treatment, it can progress to AIDS. While there's no cure, antiretroviral therapy allows individuals to manage the virus effectively.",
      imageUrl:
        "/stds/hiv.png",
      symptoms: {
        common: [
          "Flu-like symptoms",
          "Fever and chills",
          "Night sweats",
          "Muscle aches",
          "Fatigue",
        ],
        severe: [
          "Opportunistic infections",
          "Rapid weight loss",
          "Pneumonia",
          "Tuberculosis",
          "Certain cancers",
        ],
        longTerm: [
          "AIDS development",
          "Immune system damage",
          "Chronic infections",
          "Neurological problems",
          "Organ failure",
        ],
        prevention: [
          "Pre-exposure prophylaxis (PrEP)",
          "Post-exposure prophylaxis (PEP)",
          "Safe sex practices",
          "Regular testing",
          "Clean needle use",
        ],
      },
    },
    {
      id: "trichomoniasis",
      title: "Trichomoniasis",
      date: "",
      shortDescription: "A common parasitic STI, often without symptoms.",
      longDescription:
        "Trichomoniasis is a sexually transmitted infection caused by the parasite Trichomonas vaginalis. Many infected individuals show no symptoms, but it can cause discomfort and increase the risk of other STIs. It is treatable with prescribed medications.",
      imageUrl:
        "/stds/trichomoniasis.jpeg",
      symptoms: {
        common: [
          "Frothy vaginal discharge",
          "Itching or irritation",
          "Pain during urination",
          "Discomfort during sex",
          "Redness or swelling",
        ],
        severe: [
          "Pelvic inflammatory disease",
          "Increased HIV risk",
          "Pregnancy complications",
          "Urethritis",
          "Prostatitis",
        ],
        longTerm: [
          "Chronic infection",
          "Increased STI susceptibility",
          "Pregnancy complications",
          "Relationship issues",
          "Recurrent infections",
        ],
        prevention: [
          "Regular STI testing",
          "Safe sex practices",
          "Partner treatment",
          "Abstinence during treatment",
          "Regular medical care",
        ],
      },
    },
    {
      id: "hepatitis_b",
      title: "Hepatitis B",
      date: "",
      shortDescription:
        "A viral infection affecting the liver, transmissible through sexual contact.",
      longDescription:
        "Hepatitis B is a liver infection caused by the hepatitis B virus. It can be acute or chronic and is transmitted through bodily fluids, including during sexual activity. Vaccination is the most effective prevention method.",
      imageUrl:
        "/stds/hepatitis_b.jpeg",
      symptoms: {
        common: [
          "Fatigue",
          "Abdominal pain",
          "Loss of appetite",
          "Nausea and vomiting",
          "Joint pain",
        ],
        severe: [
          "Liver failure",
          "Cirrhosis",
          "Liver cancer",
          "Kidney problems",
          "Blood disorders",
        ],
        longTerm: [
          "Chronic liver disease",
          "Liver cancer risk",
          "Cirrhosis",
          "Liver failure",
          "Death (if untreated)",
        ],
        prevention: [
          "Hepatitis B vaccination",
          "Safe sex practices",
          "Avoiding shared needles",
          "Regular testing",
          "Medical precautions",
        ],
      },
    },
  ],
  recent_developments: [
    {
      id: "liechtenstein_same_sex_marriage",
      title: "Liechtenstein Legalizes Same-Sex Marriage",
      date: "2025-01-01",
      shortDescription:
        "Liechtenstein's same-sex marriage law comes into effect.",
      longDescription:
        "On January 1, 2025, Liechtenstein's law allowing same-sex marriages officially came into effect, marking a significant step forward for LGBTQ+ rights in the country.",
      imageUrl:
        "/recent_developments/liechtenstein_same_sex_marriage.jpg",
    },
    {
      id: "thailand_same_sex_marriage",
      title: "Thailand Legalizes Same-Sex Marriage",
      date: "2025-01-23",
      shortDescription: "Thailand's same-sex marriage law comes into effect.",
      longDescription:
        "On January 23, 2025, Thailand's law allowing same-sex marriages officially came into effect, making it the first Southeast Asian country to legalize same-sex marriage.",
      imageUrl:
        "/recent_developments/thailand_same_sex_marriage.jpeg",
    },
    {
      id: "trump_executive_order_gender_identity",
      title: "Trump Signs Executive Order on Gender Identity",
      date: "2025-01-20",
      shortDescription:
        "Executive order mandates federal recognition of gender as binary.",
      longDescription:
        "On January 20, 2025, President Donald Trump signed an executive order titled 'Defending Women from Gender Ideology Extremism and Restoring Biological Truth to the Federal Government,' requiring federal departments to recognize gender as a male-female binary only, determined by biological sex assigned at conception.",
      imageUrl:
        "/recent_developments/trump_executive_order_gender_identity.jpg",
    },
    {
      id: "hungary_bans_lgbtq_events",
      title: "Hungary Bans LGBTQ+ Public Events",
      date: "2025-03-18",
      shortDescription: "Hungarian parliament votes to ban LGBTQ+ events.",
      longDescription:
        "On March 18, 2025, the Hungarian parliament voted 136–27 to ban LGBTQ+ events in the country, including the annual Budapest Pride event, as part of a series of anti-LGBTQ+ legislative measures.",
      imageUrl:
        "/recent_developments/hungary_bans_lgbtq_events.jpg",
    },
    {
      id: "utah_bans_pride_flags",
      title: "Utah Bans LGBTQ+ Pride Flags in Government Buildings",
      date: "2025-03-28",
      shortDescription:
        "Utah becomes first U.S. state to ban pride flags in government spaces.",
      longDescription:
        "On March 28, 2025, Utah enacted a law banning LGBTQ+ pride flags in government buildings and schools, becoming the first U.S. state to implement such a measure.",
      imageUrl:
        "/recent_developments/utah_bans_pride_flags.jpg",
    },
    {
      id: "idaho_resolution_same_sex_marriage",
      title:
        "Idaho House Calls for Reconsideration of Same-Sex Marriage Ruling",
      date: "2025-01-27",
      shortDescription:
        "Idaho House votes for resolution to reconsider Obergefell v. Hodges.",
      longDescription:
        "On January 27, 2025, the Idaho House of Representatives voted for a resolution calling for the U.S. Supreme Court to reconsider its 2015 decision in Obergefell v. Hodges, which legalized same-sex marriage nationwide.",
      imageUrl:
        "/recent_developments/idaho_resolution_same_sex_marriage.jpg",
    },
    {
      id: "uk_supreme_court_gender_definition",
      title: "UK Supreme Court Rules on Legal Gender Definition",
      date: "2025-04-16",
      shortDescription:
        "UK Supreme Court defines legal gender based on birth sex.",
      longDescription:
        "On April 16, 2025, the Supreme Court of the United Kingdom ruled that legal gender is based upon sex assigned at birth, excluding transgender women from the legal definition of 'woman' for the purposes of the Equality Act 2010.",
      imageUrl:
        "/recent_developments/uk_supreme_court_gender_definition.jpeg",
    },
    {
      id: "lithuania_same_sex_partnerships",
      title: "Lithuania Grants Same-Sex Couples Right to Register Partnerships",
      date: "2025-04-17",
      shortDescription:
        "Lithuania's Constitutional Court allows same-sex partnership registration.",
      longDescription:
        "On April 17, 2025, the Constitutional Court of Lithuania granted same-sex couples the right to register their partnerships with the courts until the Seimas adopts a comprehensive law on registered partnerships.",
      imageUrl:
        "/recent_developments/lithuania_same_sex_partnerships.jpg",
    },
    {
      id: "poland_abolishes_lgbt_free_zones",
      title: "Poland Abolishes Last 'LGBT-Free Zone'",
      date: "2025-04-30",
      shortDescription: "Poland's last 'LGBT-free zone' is abolished.",
      longDescription:
        "On April 30, 2025, the last 'LGBT-free zone' in Poland was abolished, marking a significant step toward LGBTQ+ inclusivity in the country.",
      imageUrl:
        "/recent_developments/poland_abolishes_lgbt_free_zones.jpg",
    },
    {
      id: "italy_recognizes_lesbian_parenthood",
      title: "Italy Recognizes Automatic Parenthood for Lesbian Couples",
      date: "2025-05-22",
      shortDescription:
        "Italy's Constitutional Court recognizes automatic parenthood for children of lesbian partnerships.",
      longDescription:
        "On May 22, 2025, Italy's Constitutional Court recognized automatic parenthood on birth certificates for children of lesbian partnerships, eliminating the need for adoption procedures.",
      imageUrl:
        "/recent_developments/italy_recognizes_lesbian_parenthood.jpeg",
    },
  ],
};
