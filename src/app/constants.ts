import { MuseumItem, MuseumTopic } from './types';

export const TOPICS: MuseumTopic[] = [
  {
    id: 'lgbtq_pioneers',
    title: 'Pioneers of Pride',
    description: 'Discover influential LGBTQ+ activists and their impact on history.',
  },
  {
    id: 'queer_history_moments',
    title: 'Moments of Change',
    description: 'Explore key events that shaped LGBTQ+ rights and visibility.',
  },
  {
    id: 'gender_fluidity',
    title: 'Beyond the Binary',
    description: 'Delve into the diverse and evolving understanding of gender identity.',
  },
   {
    id: 'womens_history_unsung',
    title: 'Herstory: Unsung Women',
    description: 'Celebrate women whose contributions have often been overlooked.',
  }
];

// Hardcoded museum data
type MuseumItemSeed = Omit<MuseumItem, 'category' | 'imageUrl'>;

export const MUSEUM_DATA: Record<string, MuseumItemSeed[]> = {
  lgbtq_pioneers: [
    { id: 'harvey_milk', title: 'Harvey Milk', date: '1930-1978', shortDescription: 'American politician and the first openly gay elected official in the history of California.', longDescription: 'Harvey Milk was a visionary civil and human rights leader. His work in San Francisco during the 1970s as one of the first openly gay elected officials in the United States paved the way for future LGBTQ+ politicians. Milk advocated for the rights of gay people, ethnic minorities, and the elderly, famously urging people to "come out" to fight prejudice. His life was tragically cut short by assassination in 1978, but his legacy of hope and activism endures.' },
    { id: 'marsha_p_johnson', title: 'Marsha P. Johnson', date: '1945-1992', shortDescription: 'African American transgender activist and key figure in the Stonewall uprising.', longDescription: 'Marsha P. Johnson, a Black transgender woman, was a prominent figure in the gay liberation movement. She is often cited as one of the key individuals involved in the 1969 Stonewall uprising. A co-founder of Street Transvestite Action Revolutionaries (STAR), she dedicated her life to advocating for homeless LGBTQ+ youth, sex workers, and people with HIV/AIDS. Her vibrant personality and tireless activism made her an icon of resilience and compassion.' },
    { id: 'audre_lorde', title: 'Audre Lorde', date: '1934-1992', shortDescription: 'Black lesbian feminist writer, poet, and civil rights activist.', longDescription: 'Audre Lorde described herself as a "Black, lesbian, mother, warrior, poet." Her powerful writings explored themes of racism, sexism, homophobia, and classism. Lorde emphasized the importance of intersectionality and using differences as a catalyst for change. Her essays and poems, such as "Sister Outsider" and "Zami: A New Spelling of My Name," continue to inspire activists and thinkers worldwide.' },
    { id: 'bayard_rustin', title: 'Bayard Rustin', date: '1912-1987', shortDescription: 'Openly gay African American civil rights leader and key organizer of the 1963 March on Washington.', longDescription: 'Bayard Rustin was a brilliant strategist and pacifist who played a pivotal, though often behind-the-scenes, role in the American Civil Rights Movement. As an openly gay man, he faced discrimination from both outside and within the movement. He was a key advisor to Martin Luther King Jr. and the chief organizer of the 1963 March on Washington for Jobs and Freedom. Later in life, he became a vocal advocate for LGBTQ+ rights.' },
  ],
  queer_history_moments: [
    { id: 'stonewall_riots', title: 'The Stonewall Riots', date: 'June 28, 1969', shortDescription: 'A series of spontaneous demonstrations by members of the LGBTQ+ community in response to a police raid.', longDescription: 'The Stonewall Riots, which began in the early hours of June 28, 1969, at the Stonewall Inn in New York City, are widely considered the single most important event leading to the gay liberation movement and the modern fight for LGBTQ+ rights in the United States. Patrons of the bar, along with other community members, resisted a police raid, sparking six days of protests and clashes with law enforcement. Stonewall marked a shift from a more passive rights movement to radical, direct action.' },
    { id: 'act_up_formation', title: 'ACT UP Formation', date: '1987', shortDescription: 'Formation of AIDS Coalition to Unleash Power (ACT UP), a direct-action advocacy group.', longDescription: 'ACT UP was formed in March 1987 in New York City to combat the AIDS pandemic through direct action, medical research, treatment advocacy, and policy changes. Frustrated by government inaction and societal indifference, ACT UP used confrontational protests and civil disobedience to raise awareness, demand research funding, and accelerate the availability of life-saving treatments. Their activism significantly impacted public health policy and the fight against HIV/AIDS.' },
    { id: 'obergefell_v_hodges', title: 'Obergefell v. Hodges', date: 'June 26, 2015', shortDescription: 'U.S. Supreme Court ruling legalizing same-sex marriage nationwide.', longDescription: 'In a landmark decision, the U.S. Supreme Court ruled in Obergefell v. Hodges that the fundamental right to marry is guaranteed to same-sex couples by both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment. This ruling legalized same-sex marriage in all fifty states, marking a pivotal victory for LGBTQ+ rights and equality in the United States after decades of activism and legal challenges.' },
  ],
  gender_fluidity: [
    { id: 'two_spirit', title: 'Two-Spirit Traditions', date: 'Pre-colonial to Present', shortDescription: 'Term used by some Indigenous North Americans to describe Native people who fulfill a third-gender ceremonial and social role.', longDescription: 'Two-Spirit is an umbrella term created in 1990 by Indigenous LGBTQ+ activists to describe individuals in many Native American and First Nations cultures who embody both masculine and feminine spirits. These individuals often held respected spiritual and social roles within their communities, long before European colonization. The term aims to reclaim and honor pre-colonial understandings of gender diversity that were suppressed by colonization and Western binary gender norms.' },
    { id: 'hijra_community', title: 'Hijra Community', date: 'Ancient to Present', shortDescription: 'Third gender community in South Asia, particularly India, Pakistan, and Bangladesh.', longDescription: 'Hijras are a recognized third gender community in South Asia with a recorded history spanning thousands of years. Traditionally, they have held significant social and religious roles, often associated with blessings and performances at ceremonies. While facing discrimination and marginalization in modern times, the Hijra community continues to be a visible and culturally significant part of South Asian society, and some countries have legally recognized them as a third gender.' },
    { id: 'nonbinary_identities', title: 'Non-Binary Identities', date: 'Contemporary', shortDescription: 'Umbrella term for gender identities that are not solely male or female.', longDescription: 'Non-binary is an umbrella term for people whose gender identity does not fit neatly into the categories of "man" or "woman." Non-binary identities are diverse and can include people who identify as having no gender, multiple genders, or a gender that fluctuates. The increasing visibility and understanding of non-binary identities challenge traditional binary notions of gender and highlight the spectrum of human experience.' },
  ],
  womens_history_unsung: [
    { id: 'ada_lovelace', title: 'Ada Lovelace', date: '1815-1852', shortDescription: 'English mathematician and writer, widely considered the first computer programmer.', longDescription: 'Augusta Ada King, Countess of Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage\'s proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first computer programmer.' },
    { id: 'hildegard_von_bingen', title: 'Hildegard von Bingen', date: '1098-1179', shortDescription: 'German Benedictine abbess, writer, composer, philosopher, mystic, visionary, and medical writer.', longDescription: 'Hildegard von Bingen was a remarkable polymath of the High Middle Ages. She founded monasteries, composed an entire corpus of liturgical music, wrote theological, botanical, and medicinal texts, as well as letters, and liturgical songs. Her visionary theology and scientific insights were extraordinary for her time. Despite the constraints placed on women, she became an influential figure, advising popes, emperors, and other notables.' },
    { id: 'artemisia_gentileschi', title: 'Artemisia Gentileschi', date: '1593-c.1656', shortDescription: 'Italian Baroque painter, one of the most accomplished painters in the generation following Caravaggio.', longDescription: 'Artemisia Gentileschi was a pioneering Italian Baroque painter, renowned for her dramatic and naturalistic depictions of strong women from myths, allegories, and the Bible. In an era when female painters were not easily accepted, she achieved international success. Her works often feature female heroines and victims, imbued with a powerful emotional intensity, reflecting her own life experiences and challenging patriarchal norms.' },
  ]
};

// export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17'; // Removed
