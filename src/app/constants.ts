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
              "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708067460i/15762561.jpg",
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
              "https://sam.nmartmuseum.org/internal/media/dispatcher/11732/thumbnail",
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
        "https://www.unco.edu/gender-sexuality-resource-center/images/historical-figures/audrelorde.jpg",
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
              "https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fcdn.penguin.co.uk%2Fdam-assets%2Fbooks%2F9780241453506%2F9780241453506-jacket-large.jpg&w=819&q=100",
          },
        ],
        events: [
          {
            title: "Co-founder of Kitchen Table: Women of Color Press (1980)",
            imageUrl:
              "https://fractals.blackfeministfuture.org/wp-content/uploads/2021/10/BarbaraAudreCherrieHattiec1980.jpeg",
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
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2024-04/240405-chicago-gay-crusader-ch-1420-a3b9ff.jpg",
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
              "https://humanrightsconnected.org/wp-content/uploads/2020/06/org_logo_HouseofGG-1.png",
          },
        ],
        events: [
          {
            title: "Participant in the Stonewall Riots (1969)",
            imageUrl:
              "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/stonewall-gettyimages-661695126?_a=BAVAZGDX0",
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
              "https://daily.jstor.org/wp-content/uploads/2020/06/from_gay_liberation_to_marriage_equality_1050x700.jpg",
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
            imageUrl: "https://i.ytimg.com/vi/ntsu3MQVJ4g/hqdefault.jpg",
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
              "https://www.nypl.org/sites-drupal/default/files/styles/max_scale_640x640/public/field_ers_item_record_image/2022-06/sylvia.jpg?itok=5iUbCTiD",
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
              "https://blogs.publishersweekly.com/blogs/shelftalker/wp-content/uploads/2023/02/9781797202051_b9a05.jpg",
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
              "https://www.blackpast.org/wp-content/uploads/2024/08/Bayard_Rustin_and_Cleveland_Robinson_Photo_by_Orlando_Fernandez.jpg",
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
              "https://obamawhitehouse.archives.gov/sites/default/files/image/image_file/p112013ps-0298.jpg",
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
      id: "chlamydia",
      title: "Chlamydia",
      date: "",
      shortDescription: "A common bacterial STI that often shows no symptoms.",
      longDescription:
        "Chlamydia is a prevalent sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It's often asymptomatic, making regular screenings crucial. If untreated, it can lead to serious reproductive complications. Fortunately, it is easily curable with antibiotics.",
      imageUrl: "https://cdn.std.uw.edu/doc/568-1/adult-chlamydial-inclusion-conjunctivitis-.jpg",
      symptoms: {
        common: [
          "Abnormal vaginal discharge",
          "Burning sensation during urination",
          "Pain during sexual intercourse",
          "Bleeding between periods",
          "Testicular pain or swelling"
        ],
        severe: [
          "Pelvic inflammatory disease",
          "Chronic pelvic pain",
          "Epididymitis in men",
          "Proctitis (rectal inflammation)",
          "Conjunctivitis"
        ],
        longTerm: [
          "Infertility in women",
          "Increased risk of ectopic pregnancy",
          "Chronic pelvic pain",
          "Reactive arthritis",
          "Increased risk of HIV transmission"
        ],
        prevention: [
          "Regular STI testing",
          "Consistent condom use",
          "Limiting sexual partners",
          "Open communication with partners",
          "Annual screening for sexually active individuals"
        ]
      }
    },
    {
      id: "gonorrhea",
      title: "Gonorrhea",
      date: "",
      shortDescription:
        "A bacterial STI that can infect the genitals, rectum, and throat.",
      longDescription:
        "Gonorrhea is a common sexually transmitted infection caused by Neisseria gonorrhoeae. It can affect multiple areas of the body and often presents no symptoms, especially in women. If left untreated, it can cause serious health issues. Prompt antibiotic treatment is effective.",
      imageUrl: "https://img.medscapestatic.com/pi/meds/ckb/34/37134tn.jpg",
      symptoms: {
        common: [
          "Thick, cloudy discharge",
          "Painful urination",
          "Increased vaginal discharge",
          "Bleeding between periods",
          "Swollen testicles"
        ],
        severe: [
          "Disseminated gonococcal infection",
          "Meningitis",
          "Endocarditis",
          "Septic arthritis",
          "Pelvic inflammatory disease"
        ],
        longTerm: [
          "Infertility",
          "Chronic pelvic pain",
          "Increased risk of HIV",
          "Ectopic pregnancy risk",
          "Joint damage"
        ],
        prevention: [
          "Regular STI testing",
          "Consistent condom use",
          "Mutual monogamy",
          "Regular medical check-ups",
          "Partner notification and testing"
        ]
      }
    },
    {
      id: "hpv",
      title: "Human Papillomavirus (HPV)",
      date: "",
      shortDescription:
        "The most common STI, with some types leading to warts or cancer.",
      longDescription:
        "HPV is a widespread sexually transmitted infection with over 100 types. While many infections resolve on their own, some can cause genital warts or lead to cancers such as cervical cancer. Vaccination and regular screenings are key preventive measures.",
      imageUrl: "https://images.everydayhealth.com/images/stds/hpv/hpv-warts-722x406.jpg",
      symptoms: {
        common: [
          "Genital warts",
          "Common warts on hands",
          "Plantar warts on feet",
          "Flat warts on face",
          "No visible symptoms (most cases)"
        ],
        severe: [
          "Cervical cancer",
          "Anal cancer",
          "Penile cancer",
          "Throat cancer",
          "Vulvar cancer"
        ],
        longTerm: [
          "Persistent infection",
          "Recurrent warts",
          "Increased cancer risk",
          "Psychological impact",
          "Relationship challenges"
        ],
        prevention: [
          "HPV vaccination",
          "Regular Pap smears",
          "Safe sex practices",
          "Limiting sexual partners",
          "Regular health screenings"
        ]
      }
    },
    {
      id: "herpes",
      title: "Herpes Simplex Virus (HSV)",
      date: "",
      shortDescription: "A viral STI causing painful blisters or ulcers.",
      longDescription:
        "Herpes simplex virus, encompassing HSV-1 and HSV-2, leads to infections that can cause blisters or ulcers, commonly around the mouth or genitals. The virus remains in the body for life, with symptoms managed through antiviral medications.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfyguxyA7qrPvjA37jVuQhaYURvAouSWttw&s",
      symptoms: {
        common: [
          "Painful blisters or ulcers",
          "Flu-like symptoms",
          "Swollen lymph nodes",
          "Burning sensation",
          "Itching or tingling"
        ],
        severe: [
          "Severe outbreaks",
          "Meningitis",
          "Encephalitis",
          "Eye infections",
          "Neonatal herpes"
        ],
        longTerm: [
          "Recurrent outbreaks",
          "Psychological impact",
          "Relationship challenges",
          "Increased HIV risk",
          "Chronic pain"
        ],
        prevention: [
          "Antiviral medication",
          "Safe sex practices",
          "Avoiding contact during outbreaks",
          "Regular medical care",
          "Stress management"
        ]
      }
    },
    {
      id: "syphilis",
      title: "Syphilis",
      date: "",
      shortDescription:
        "A bacterial STI with multiple stages, potentially leading to severe health issues.",
      longDescription:
        "Syphilis is a sexually transmitted infection that progresses through stages: primary, secondary, latent, and tertiary. Early stages may present sores or rashes, while later stages can cause serious health problems. Early detection and antibiotic treatment are crucial.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX7NlhbELZGFW0k1zAp-abK5V2PrCfEmLyg&s",
      symptoms: {
        common: [
          "Painless sores (chancre)",
          "Rash on palms and soles",
          "Fever and fatigue",
          "Swollen lymph nodes",
          "Muscle aches"
        ],
        severe: [
          "Neurosyphilis",
          "Cardiovascular complications",
          "Gummatous lesions",
          "Hearing loss",
          "Vision problems"
        ],
        longTerm: [
          "Brain damage",
          "Heart disease",
          "Organ damage",
          "Mental health issues",
          "Death (if untreated)"
        ],
        prevention: [
          "Regular STI testing",
          "Safe sex practices",
          "Early treatment",
          "Partner notification",
          "Regular medical check-ups"
        ]
      }
    },
    {
      id: "hiv",
      title: "Human Immunodeficiency Virus (HIV)",
      date: "",
      shortDescription:
        "A virus that attacks the immune system, potentially leading to AIDS.",
      longDescription:
        "HIV is a virus that compromises the immune system, making individuals more susceptible to infections and diseases. Without treatment, it can progress to AIDS. While there's no cure, antiretroviral therapy allows individuals to manage the virus effectively.",
      imageUrl: "https://www.verywellhealth.com/thmb/KvDUuWf8x7VdR9bLys2spw68_5k=/965x610/filters:no_upscale():max_bytes(150000):strip_icc()/maculopapular-569fdede3df78cafda9eb2dd.png",
      symptoms: {
        common: [
          "Flu-like symptoms",
          "Fever and chills",
          "Night sweats",
          "Muscle aches",
          "Fatigue"
        ],
        severe: [
          "Opportunistic infections",
          "Rapid weight loss",
          "Pneumonia",
          "Tuberculosis",
          "Certain cancers"
        ],
        longTerm: [
          "AIDS development",
          "Immune system damage",
          "Chronic infections",
          "Neurological problems",
          "Organ failure"
        ],
        prevention: [
          "Pre-exposure prophylaxis (PrEP)",
          "Post-exposure prophylaxis (PEP)",
          "Safe sex practices",
          "Regular testing",
          "Clean needle use"
        ]
      }
    },
    {
      id: "trichomoniasis",
      title: "Trichomoniasis",
      date: "",
      shortDescription: "A common parasitic STI, often without symptoms.",
      longDescription:
        "Trichomoniasis is a sexually transmitted infection caused by the parasite Trichomonas vaginalis. Many infected individuals show no symptoms, but it can cause discomfort and increase the risk of other STIs. It is treatable with prescribed medications.",
      imageUrl: "https://almostadoctor.co.uk/wp-content/uploads/2017/06/23975AB1-24A8-4A3A-8B70-E56CA4C4DE2D-scaled.jpeg",
      symptoms: {
        common: [
          "Frothy vaginal discharge",
          "Itching or irritation",
          "Pain during urination",
          "Discomfort during sex",
          "Redness or swelling"
        ],
        severe: [
          "Pelvic inflammatory disease",
          "Increased HIV risk",
          "Pregnancy complications",
          "Urethritis",
          "Prostatitis"
        ],
        longTerm: [
          "Chronic infection",
          "Increased STI susceptibility",
          "Pregnancy complications",
          "Relationship issues",
          "Recurrent infections"
        ],
        prevention: [
          "Regular STI testing",
          "Safe sex practices",
          "Partner treatment",
          "Abstinence during treatment",
          "Regular medical care"
        ]
      }
    },
    {
      id: "hepatitis_b",
      title: "Hepatitis B",
      date: "",
      shortDescription:
        "A viral infection affecting the liver, transmissible through sexual contact.",
      longDescription:
        "Hepatitis B is a liver infection caused by the hepatitis B virus. It can be acute or chronic and is transmitted through bodily fluids, including during sexual activity. Vaccination is the most effective prevention method.",
      imageUrl: "https://www.hepb.org/blog/wp-content/uploads/2012/08/Unknown.jpeg ",
      symptoms: {
        common: [
          "Fatigue",
          "Abdominal pain",
          "Loss of appetite",
          "Nausea and vomiting",
          "Joint pain"
        ],
        severe: [
          "Liver failure",
          "Cirrhosis",
          "Liver cancer",
          "Kidney problems",
          "Blood disorders"
        ],
        longTerm: [
          "Chronic liver disease",
          "Liver cancer risk",
          "Cirrhosis",
          "Liver failure",
          "Death (if untreated)"
        ],
        prevention: [
          "Hepatitis B vaccination",
          "Safe sex practices",
          "Avoiding shared needles",
          "Regular testing",
          "Medical precautions"
        ]
      }
    }
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
      imageUrl: "https://www.politico.eu/cdn-cgi/image/width=1160,height=773,quality=80,onerror=redirect,format=auto/wp-content/uploads/2024/05/17/GettyImages-1244635842-scaled.jpg",
    },
    {
      id: "thailand_same_sex_marriage",
      title: "Thailand Legalizes Same-Sex Marriage",
      date: "2025-01-23",
      shortDescription: "Thailand's same-sex marriage law comes into effect.",
      longDescription:
        "On January 23, 2025, Thailand's law allowing same-sex marriages officially came into effect, making it the first Southeast Asian country to legalize same-sex marriage.",
      imageUrl: "https://c.ndtvimg.com/2025-01/8psnnv3_thailand-same-sex-marriage-actors-apiwat-porsch-apiwatsayree-and-sappanyoo-arm-panatkool_625x300_23_January_25.jpeg",
    },
    {
      id: "trump_executive_order_gender_identity",
      title: "Trump Signs Executive Order on Gender Identity",
      date: "2025-01-20",
      shortDescription:
        "Executive order mandates federal recognition of gender as binary.",
      longDescription:
        "On January 20, 2025, President Donald Trump signed an executive order titled 'Defending Women from Gender Ideology Extremism and Restoring Biological Truth to the Federal Government,' requiring federal departments to recognize gender as a male-female binary only, determined by biological sex assigned at conception.",
      imageUrl: "https://images.axios.com/CjRHu2VYUKdLTJNwuRo9896-GHU=/0x70:4481x2591/1920x1080/2025/02/05/1738782742981.jpg",
    },
    {
      id: "hungary_bans_lgbtq_events",
      title: "Hungary Bans LGBTQ+ Public Events",
      date: "2025-03-18",
      shortDescription: "Hungarian parliament votes to ban LGBTQ+ events.",
      longDescription:
        "On March 18, 2025, the Hungarian parliament voted 136–27 to ban LGBTQ+ events in the country, including the annual Budapest Pride event, as part of a series of anti-LGBTQ+ legislative measures.",
      imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2025-04/250414-hungary-lgbtq-se-313p-d53142.jpg",
    },
    {
      id: "utah_bans_pride_flags",
      title: "Utah Bans LGBTQ+ Pride Flags in Government Buildings",
      date: "2025-03-28",
      shortDescription:
        "Utah becomes first U.S. state to ban pride flags in government spaces.",
      longDescription:
        "On March 28, 2025, Utah enacted a law banning LGBTQ+ pride flags in government buildings and schools, becoming the first U.S. state to implement such a measure.",
      imageUrl: "https://lailluminator.com/wp-content/uploads/2025/03/SLC-pride-flag-2-2048x1365-1-1536x1024.jpg",
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
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/150626101106-04-scotus-same-sex-0626.jpg?q=w_3425,h_2284,x_0,y_0,c_fill",
    },
    {
      id: "uk_supreme_court_gender_definition",
      title: "UK Supreme Court Rules on Legal Gender Definition",
      date: "2025-04-16",
      shortDescription:
        "UK Supreme Court defines legal gender based on birth sex.",
      longDescription:
        "On April 16, 2025, the Supreme Court of the United Kingdom ruled that legal gender is based upon sex assigned at birth, excluding transgender women from the legal definition of 'woman' for the purposes of the Equality Act 2010.",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQGNu4rd9qokEQ/article-cover_image-shrink_720_1280/B4DZZCVimFHAAI-/0/1744869666363?e=2147483647&v=beta&t=mxTbXkCvx88B3W-Ritvn4OsQ4hLqZJ_DuNEaVaxY5DI",
    },
    {
      id: "lithuania_same_sex_partnerships",
      title: "Lithuania Grants Same-Sex Couples Right to Register Partnerships",
      date: "2025-04-17",
      shortDescription:
        "Lithuania's Constitutional Court allows same-sex partnership registration.",
      longDescription:
        "On April 17, 2025, the Constitutional Court of Lithuania granted same-sex couples the right to register their partnerships with the courts until the Seimas adopts a comprehensive law on registered partnerships.",
      imageUrl: "https://www.aljazeera.com/wp-content/uploads/2022/05/AP21247573855481.jpg?resize=1920%2C1440",
    },
    {
      id: "poland_abolishes_lgbt_free_zones",
      title: "Poland Abolishes Last 'LGBT-Free Zone'",
      date: "2025-04-30",
      shortDescription: "Poland's last 'LGBT-free zone' is abolished.",
      longDescription:
        "On April 30, 2025, the last 'LGBT-free zone' in Poland was abolished, marking a significant step toward LGBTQ+ inclusivity in the country.",
      imageUrl: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VNGCO2TVYRIXHBT3GZZLGTNXVM.jpg",
    },
    {
      id: "italy_recognizes_lesbian_parenthood",
      title: "Italy Recognizes Automatic Parenthood for Lesbian Couples",
      date: "2025-05-22",
      shortDescription:
        "Italy's Constitutional Court recognizes automatic parenthood for children of lesbian partnerships.",
      longDescription:
        "On May 22, 2025, Italy's Constitutional Court recognized automatic parenthood on birth certificates for children of lesbian partnerships, eliminating the need for adoption procedures.",
      imageUrl: "https://media.zenfs.com/en/gcn_uk_889/912cc88bc2ddddd3beac98679c703ab0",
    },
  ],
};
