/* ═══════════════════════════════════════════════════════════
   TEDxChicago 2026 — WE THE PEOPLE
   Interactions: sticky header, mobile nav, carousels,
   quote rotation, scroll-reveal.
   Vanilla JS — drop-in friendly for Squarespace code blocks.
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Speaker data ──────────────────────────────────────────
     Source: "TEDxChicago 2026 Speaker Website Bios + Titles".
     `role` = TEDx title, `idea` = the talk concept (used as the
     card's talk title and quoted in the modal), `tags` become the
     red pill chips. `photo` is left null until headshots arrive —
     the illustrated placeholder silhouette renders until then. ── */
  const SPEAKERS = [
    {
      id: "cecile-chazot",
      name: "Prof. Cécile Chazot",
      nameLines: ["Prof. Cécile", "Chazot"],
      role: "Materials Scientist and Engineer",
      formal: "Director, the SPIn Lab | Julia Weertman Assistant Professor of Materials Science and Engineering, Northwestern University",
      idea: "Our next generation of textiles will be inspired by nature’s structures — like butterfly wings that create color without dye and strength without bulk — to design fabrics that serve function without generating waste.",
      tags: ["Bio-inspired", "Sustainable Design", "Textile Innovation"],
      photo: "assets/speakers/cecile-chazot.png",
      bio: [
        "Prof. Cécile Chazot is the Julia Weertman Assistant Professor of Materials Science and Engineering at Northwestern University, where she leads the Sustainable Polymer Innovation Laboratory (SPIn Lab). Her team rethinks how our fibers, fabrics, and plastics are made, drawing on nature’s four billion years of materials engineering to build textiles that perform without costing the earth.",
        "Cecile earned her Ph.D. in Materials Science and Engineering from MIT and her M.Sc. from Mines ParisTech in France. She is also a co-founder of MICRO, a remote education program that opens doors for undergraduates across the country to conduct research in materials science, a reflection of her conviction that who gets to do the science shapes what the science becomes. Her work at the intersection of innovation and education has been recognized through prestigious early-career awards from the Department of Energy and the Department of Defense, as well as by the Materials Research Society, which honored her with a Graduate Student Award and the Arthur Nowick Award for her dedication to teaching and mentoring."
      ]
    },
    {
      id: "clarissa-flores",
      name: "Clarissa Flores",
      nameLines: ["Clarissa", "Flores"],
      role: "Cultural Strategist in Sports, Hospitality & Community",
      formal: "Founder & CEO, Level Sporting Club | Director of Operations, Tao Group Hospitality",
      idea: "Women’s sports have always had the fans. What they’ve needed was equitable infrastructure, investment, and cultural primacy, and building that infrastructure, starting in Chicago, changes business, culture, and the future for girls everywhere.",
      tags: ["Infrastructure Equity", "Women’s Sports", "Cultural Investment"],
      photo: "assets/speakers/clarissa-flores.png",
      bio: [
        "Clarissa Flores is Chicago native, Whitney Young alum, and former Northwestern University basketball player who went on to compete overseas and for the Puerto Rican national team, Clarissa has spent more than two decades in hospitality, including her current role as Director of Operations for Tao Group Hospitality in Chicago.",
        "In 2026, she brought her two worlds together as Founder and CEO of Level Sporting Club, Wrigleyville’s first women’s sports bar, a two-level space steps from Wrigley Field where women’s sports are the default, not the request. What began as pop-up watch parties around the city became a permanent home for a fandom that has been showing up for decades, backed by an ownership group built largely of former athletes and women with deep ties to sports. Her mission is simple and structural: prove that women’s sports can anchor a business, and level the playing field by building the infrastructure the fans already earned."
      ]
    },
    {
      id: "derek-lee-mcphatter",
      name: "Derek Lee McPhatter",
      nameLines: ["Derek Lee", "McPhatter"],
      role: "Narrative Change Agent",
      formal: "Writer & Producer, Performing Arts, Film & Digital | Principal, Latz & Company",
      idea: "Communities can envision and rehearse desirable futures through intentional, iterative public practice.",
      tags: ["Collective Imagination", "Climate Action", "Community Practice"],
      photo: "assets/speakers/derek-lee-mcphatter.png",
      bio: [
        "Derek Lee McPhatter builds narratives at the intersections of race, class, gender, sexuality, and technology, and invites communities to imagine forward together. A Creative Capital Awardee, Derek is a resident playwright alumnus of both Chicago Dramatists and National Black Theatre in NYC, and he has written five music-theater works for the Lyric Opera of Chicago.",
        "His acclaimed projects include water riot: a cyber punk rock opera, originally commissioned by the Museum of Contemporary Art Chicago and recently presented to sold-out audiences at Harlem’s Apollo Theater. His queer, Black, sci-fi music theater experience — Bring the Beat Back — has been produced in Chicago, NYC and Philadelphia.",
        "Across stage, screen, digital media, Derek’s practice treats hope as a discipline: rehearsing the futures we seek, together and out loud, until they become buildable."
      ]
    },
    {
      id: "gita-pullapilly",
      name: "Gita Pullapilly",
      nameLines: ["Gita", "Pullapilly"],
      role: "Screenwriter, Film Director, Producer",
      formal: "Screenwriter, Film Director, and Producer",
      idea: "How do you find and nurture your superpower to become the hero you are meant to be?",
      tags: ["Purpose", "Personal Gift", "Heroes"],
      photo: "assets/speakers/gita-pullapilly.png",
      bio: [
        "Gita Pullapilly is an Emmy-nominated screenwriter, director, producer, and journalist who has built a career uncovering the truth and transforming it into stories that move people. Her films have premiered at the Toronto International Film Festival, earned Emmy recognition, landed on the Black List, and reached global audiences through projects including Queenpins, starring Kristen Bell, Vince Vaughn, Kirby Howell-Baptiste, and Paul Walter Hauser, which debuted in Netflix’s Global Top 10. She currently writes and directs on Paramount+’s hit series Tulsa King, starring Sylvester Stallone. A Guggenheim Fellow and Presidential Leadership Scholar, Gita earned her master’s degree from Northwestern University’s Medill School of Journalism and her undergraduate degree from the University of Notre Dame.",
        "She has spent her career exploring what drives human resilience, purpose, and transformation. She was named one of Variety’s “10 Directors to Watch,” became the first filmmaker selected as a Fulbright Senior Scholar to Jordan, and founded a nonprofit that trains humanitarian organizations in developing countries to use storytelling as a tool for social change. Today, Gita brings those lessons from journalism, filmmaking, and global service to audiences around the world. Her message is simple: each of us has a unique superpower, and when we embrace it, we become the hero of our own story."
      ]
    },
    {
      id: "jeffery-beckham-jr",
      name: "Jeffery Beckham Jr.",
      nameLines: ["Jeffery", "Beckham Jr."],
      role: "Education CEO, Tech Founder, Painter, Civic Leader, Storyteller",
      formal: "CEO, Chicago Scholars | CEO, REACH Pathways",
      idea: "Talent in children is universal, but systems still require students to prove their worth before adults believe in their potential — and reversing that order changes everything.",
      tags: ["Structural Belief", "Education Equity", "Designing Opportunity"],
      photo: "assets/speakers/jeffery-beckham-jr.png",
      bio: [
        "Jeffery Beckham Jr. builds the infrastructure of opportunity that brilliant young people were never handed. As CEO of Chicago Scholars, one of the city’s largest college and career access organization, he leads work that has supported more than 7,500 first-generation and under-resourced students, generating over $740 million in merit aid since 2007. As CEO of REACH Pathways, an award-winning ed-tech platform serving 50,000 students reimagining career exploration, his team earned the Future of Work award at the 2023 SXSW Pitch competition and a 2024 Chicago Innovation Award.",
        "A 2024 to 2025 Obama Foundation USA Leader raised in Chicago’s Auburn Gresham community, Jeffery stands at the intersection of education, technology, and community empowerment, designing systems with young people rather than for them. He is also an accomplished acrylic painter whose work explores identity, resilience, and hope, an artistic practice that, like his leadership, starts with who people actually are."
      ]
    },
    {
      id: "jessie-fuentes",
      name: "Jessica “Jessie” Fuentes",
      nameLines: ["Jessica “Jessie”", "Fuentes"],
      role: "Housing Justice Advocate",
      formal: "Alderperson, Chicago’s 26th Ward",
      idea: "Displacement destroys identity by denying people the stable ground they need to heal and grow, but housing policy can be redesigned to make rootedness a legislated human right rather than a market privilege.",
      tags: ["Housing Justice", "Policy Design", "Public Health"],
      photo: "assets/speakers/jessie-fuentes.png",
      bio: [
        "Jessie Fuentes made history in 2023 as the first woman, the youngest person, and the first queer Latina elected to lead Chicago’s 26th Ward, home to Humboldt Park and the heart of the city’s Puerto Rican community. Born and raised in Humboldt Park, Jessie has been open about growing up as the daughter of an incarcerated parent in a family affected by substance use, and about the mentors and community programs that invested in her when systems would have written her off.",
        "Before taking office, she served as Director of Policy and Youth Advocacy at the Puerto Rican Cultural Center and co-chair of the Puerto Rican Agenda, where she helped lead the effort that designated Humboldt Park an official Cultural District, protecting the neighborhood’s culture and economic stability. In City Council, she champions affordable housing, public school investment, and a vision of public safety built on what communities need to be whole."
      ]
    },
    {
      id: "jessica-schleider",
      name: "Dr. Jessica Schleider",
      nameLines: ["Dr. Jessica", "Schleider"],
      role: "Intervention Scientist, Mental Health Change-maker",
      formal: "Founding Director, Lab for Scalable Mental Health | Associate Professor of Medical Social Sciences, Pediatrics, and Psychology, Northwestern University",
      idea: "The mental health system was built around a patient who keeps coming back, but a single intentionally designed session can begin to close the care gap for young people who currently receive nothing at all.",
      tags: ["Mental Health Access", "System Redesign", "Youth Wellbeing"],
      photo: "assets/speakers/jessica-schleider.png",
      bio: [
        "Dr. Jessica Schleider asks a question the mental health system was never designed to answer: what if one session was enough to start? A clinical psychologist and intervention scientist at Northwestern University’s Feinberg School of Medicine, she is the Founding Director of the Lab for Scalable Mental Health, where her team builds and tests single-session interventions, structured, evidence-based programs designed to deliver meaningful support to young people in just one encounter, especially those the traditional system never reaches.",
        "Jessica earned her Ph.D. in clinical psychology at Harvard and completed her clinical training at Yale School of Medicine. Her research has secured more than $13.6 million in federal and foundation funding and earned national honors including the NIH Director’s Early Independence Award and a spot on Forbes’ 30 Under 30 in Healthcare. She is also the author of Little Treatments, Big Effects, which brings her science to anyone who has ever needed help sooner than the system could offer it."
      ]
    },
    {
      id: "joshua-doss",
      name: "Joshua Doss",
      nameLines: ["Joshua", "Doss"],
      role: "Data Scientist and Researcher",
      formal: "Senior Pollster & Political Strategist, HIT Strategies",
      idea: "When people question or challenge something — a faith, a marriage, a political system — that is an act of deconstruction, not destruction, and deconstruction is an act of love. Learning to see others in this way changes how we find common ground and what we can build together.",
      tags: ["Civil Discourse", "Deconstruction", "Love Languages"],
      photo: "assets/speakers/joshua-doss.png",
      bio: [
        "Joshua Doss believes the most underestimated force in American politics is the feeling of belonging. A Chicago native who began his career as a grassroots organizer in his hometown, Joshua is a senior pollster and political strategist at HIT Strategies, where he leads research on Black voter behavior and economic narratives, translating public opinion into language that moves real people rather than just measuring them.",
        "His research has informed work for organizations including the Bill and Melinda Gates Foundation, the NAACP, the Black Economic Alliance, and Bryan Stevenson’s Equal Justice Initiative, and his analysis has been featured by The New York Times, The Washington Post, Bloomberg, and Politico. Through his platform doss.discourse, Joshua brings polling data and electoral trends to over half a million followers, turning charts into conversations and making politics legible to people who were told it wasn’t for them."
      ]
    },
    {
      id: "binkey-tolefree",
      name: "Lawrence “Binkey” Tolefree",
      nameLines: ["Lawrence “Binkey”", "Tolefree"],
      role: "Vibe Dealer & Community Leader",
      formal: "Vibe Dealer & Community Leader | Creator of Art Therapy",
      idea: "When you learn to truly receive another person’s story, you stop performing your life and start living it.",
      tags: ["Human Connection", "Presence", "Storytelling"],
      photo: "assets/speakers/binkey-tolefree.png",
      bio: [
        "Lawrence “Binkey” Tolefree has spent his life proving that presence is a practice. A teaching artist, MC, host, beatboxer, and comedian from Chicago’s South Side, Binkey is the creator of Art Therapy, a healing-centered creative gathering where Chicagoans of every generation come together to color, dance, mold clay, sing, and reset, a space to breathe and create without judgment that has grown from the city’s open mic scene into a movement.",
        "Binkey’s path has carried Chicago’s creative spirit around the world, including years in Thailand teaching art and music to stateless children denied official identity, work rooted in the lesson of his own upbringing in a family that fostered, adopted, and made room for anyone who needed it. Back home, his impact is literally painted on the city: his portrait by muralist Rahmaan Statik stands in West Town, a tribute to a community stalwart whose medium has always been people."
      ]
    },
    {
      id: "manuela-zoninsein",
      name: "Manuela Zoninsein",
      nameLines: ["Manuela", "Zoninsein"],
      role: "Circular Supply Chain Architect",
      formal: "CEO & Co-Founder, Kadeya",
      idea: "A new beverage reuse system, tested in Chicago, shows that when the convenient option is also the reusable one, people choose it ninety-nine percent of the time, which means the plastic crisis is a design problem with a true and emergent solution.",
      tags: ["Circular Design", "Plastic & Waste", "Systems Change"],
      photo: "assets/speakers/manuela-zoninsein.png",
      bio: [
        "Manuela Zoninsein doesn’t believe people need to change; she believes systems do. As CEO and Co-Founder of Chicago-based Kadeya, she built the world’s first closed-loop beverage vending system, a bottling plant, dishwasher, and soda fountain in a single machine that vends a drink in a reusable bottle, takes the empty back, and sanitizes it for the next person. The mission: make reuse so frictionless that single-use becomes the inconvenient option.",
        "A serial climate entrepreneur, Manuela previously launched two agritech ventures, including Brazil’s largest online marketplace for smallholder farmers, and led international business development at Palantir Technologies. Her conviction was forged watching China shift from reuse to single-use at massive scale, and sharpened at MIT Sloan, where she earned her MBA. Kadeya’s work has been honored with a Fast Company World Changing Ideas Award and featured by Forbes and CBS, one washed, refilled, returned bottle at a time."
      ]
    },
    {
      id: "mary-meg-mccarthy",
      name: "Mary Meg McCarthy",
      nameLines: ["Mary Meg", "McCarthy"],
      role: "Executive Director Emeritus, National Immigrant Justice Center",
      formal: "",
      idea: "",
      tags: [],
      photo: null,
      bio: [
        "For four decades, Mary Meg McCarthy has worked on the front lines of human rights, defending the principle that justice is something a community builds and protects together. As longtime leader of Chicago’s National Immigrant Justice Center (NIJC), she grew the organization into one of the nation’s foremost immigrant and human rights advocates, anchored by an extraordinary network of more than 1,500 pro bono attorneys serving roughly 10,000 immigrants, refugees, and asylum seekers each year.",
        "A Notre Dame and Loyola University Chicago School of Law graduate, Mary Meg began her career safeguarding the rights of individuals living under dictatorship in Chile, an experience that shaped her lifelong conviction about what holds the rule of law in place. An expert who has testified before Congress and chaired the American Bar Association’s Commission on Immigration, she has spent her life proving that the most powerful protection against injustice is the organized solidarity of ordinary people who refuse to look away."
      ]
    },
    {
      id: "omar-lateef",
      name: "Dr. Omar Lateef",
      nameLines: ["Dr. Omar", "Lateef"],
      role: "Physician, CEO, and Partner",
      formal: "President & CEO, Rush University System for Health and Rush University Medical Center",
      idea: "The American healthcare system is on life support — yet we pretend the diagnosis is still a mystery. It is not. For all that we spend on healthcare, we are among the worst when it comes to treating and controlling chronic diseases — and people are dying prematurely because of it. It is time to focus on solutions that are scalable, and many are right in front of us. The diagnosis is clear, and it’s time to invest in the treatment — which starts with changing the system, so everyone gets the chance to be healthy.",
      tags: ["Health Equity", "System Redesign", "Moral Leadership"],
      photo: "assets/speakers/omar-lateef.png",
      bio: [
        "Dr. Omar Lateef leads one of the country’s most recognized academic health systems with a conviction that a hospital’s job is not only to treat illness, but to confront the conditions that cause it. As President and CEO of Rush University System for Health and Rush University Medical Center, he has guided Rush to the nation’s top tier for quality and safety, including repeated spots on the U.S. News & World Report Best Hospitals Honor Roll and national recognition for its commitment to health equity.",
        "A critical-care physician by training, Dr. Lateef rose from chief medical officer to system CEO, earning national attention for Rush’s widely praised response during the COVID-19 pandemic. Modern Healthcare has named him one of the 50 Most Influential Clinical Executives six times — the only leader of a Chicago-based academic medical center to appear so frequently. His work centers on a structural question the system was not built to ask: what would it take to close the gap in who gets the chance to be healthy — and who shows up to fix it?"
      ]
    },
    {
      id: "pat-tomasulo",
      name: "Pat Tomasulo",
      nameLines: ["Pat", "Tomasulo"],
      role: "TV Host, Comedian, Caregiver",
      formal: "Sports Anchor, WGN Morning News; Comedian; Founder, Laugh Your Face Off; Executive Trustee, The Facial Pain Research Foundation",
      idea: "A caregiver who built a multi-million dollar comedy fundraiser to fight his partner’s rare and devastating disease makes the case that the love caregivers feel and the exhaustion, guilt, and grief underneath it are the same devotion — and that honoring all of it is how we actually help each other.",
      tags: ["Caregiving", "Love & Illness", "Comedy & Healing"],
      photo: "assets/speakers/pat-tomasulo.png",
      bio: [
        "Pat Tomasulo has spent two decades making Chicago laugh, and he has turned that gift into a movement. The longtime sports anchor on WGN Morning News, a headlining stand-up comedian, and the creator and host of the late-night-style show Man of the People, Pat is one of the city’s most recognizable media personalities and comedic voices, with an hour-long special, What a Time to Be Alive, to his name.",
        "His most personal work began with love. When his wife, Amy, was diagnosed with trigeminal neuralgia, a rare and excruciating facial pain condition often called the “suicide disease,” Pat founded Laugh Your Face Off, an annual comedy benefit that has raised more than $5.5 million toward new treatments. As an Executive Trustee of The Facial Pain Research Foundation, he tells a story that holds love and exhaustion, laughter and hope in the same hands, the complicated, devoted truth of being a caregiver."
      ]
    },
    {
      id: "tamar-gefen",
      name: "Dr. Tamar Gefen",
      nameLines: ["Dr. Tamar", "Gefen"],
      role: "Clinical Neuropsychologist & Brain Resilience Scientist",
      formal: "Associate Professor of Psychiatry and Behavioral Sciences and Director of the Laboratory for Translational Neuropsychology, Northwestern University Feinberg School of Medicine; Neuropsychologist, Mesulam Institute for Cognitive Neurology and Alzheimer’s Disease",
      idea: "A cohort of cognitively resilient older adults reveals how much the brain at death can teach us about life, including the possibility of growth and vitality in old age.",
      tags: ["Brain Aging", "Medical Paradigm Shift", "Gift of Life & Death"],
      photo: "assets/speakers/tamar-gefen.png",
      bio: [
        "Dr. Tamar Gefen studies people across the spectrum of aging who are rewriting our traditional assumptions about the aging human brain. As an Associate Professor of Psychiatry and Behavioral Sciences at the renowned Mesulam Institute at Northwestern University’s Feinberg School of Medicine, she directs the Laboratory for Translational Neuropsychology and helps lead the Northwestern SuperAging Program, a quarter-century study of adults over 80 whose memory rivals that of people decades younger.",
        "Her work focuses on bridging pre and post-mortem findings in atypical trajectories of aging, ranging from neurodegenerative diseases to SuperAging. A 2023 Toffler Scholar whose research regularly reaches national audiences, Tamar approaches the brain with a rare blend of scientific rigor and human wonder, turning a population most of us overlook into an opportunity to question the inevitability of decline in old age."
      ]
    },
    {
      id: "thackston-lundy",
      name: "Thackston Lundy",
      nameLines: ["Thackston", "Lundy"],
      role: "Higher Education Pathfinder",
      formal: "Vice President of Workforce Pathways, National Louis University; Founder, Accelerate U",
      idea: "American higher education was designed around a four-year degree model that two-thirds of students cannot complete, and there are now working models of alternative pathways that provide real economic mobility now while keeping future learning options open.",
      tags: ["Higher Ed Access", "Economic Mobility", "Systems Change"],
      photo: "assets/speakers/thackston-lundy.png",
      bio: [
        "Thackston Lundy is rebuilding the doorway into a stable career and a college degree for the majority of Americans who don’t or can’t access traditional higher education. As Vice President of Workforce Pathways at National Louis University, he founded and leads Accelerate U, a roughly six-month, Pell Grant-eligible, fully accredited training program that moves learners into living-wage careers first and toward a college degree second, with as little as zero dollars out of pocket for those who qualify.",
        "With nearly two decades in education spanning K-12 systems and nonprofit workforce development, Thackston earned his B.A. from the University of North Carolina at Chapel Hill and a Master’s in Public Policy from the Harvard Kennedy School. Since launching Accelerate U in 2021, he and his team have helped hundreds of learners step into in-demand jobs in healthcare, IT, and beyond, with completers reporting average earnings gains around $13,000 — proof of his core belief: this is a design problem we can solve, not a people problem. The problem was never the people, it was the door."
      ]
    },
    {
      id: "susan-stokes",
      name: "Susan Stokes",
      nameLines: ["Susan", "Stokes"],
      role: "Political Scientist",
      formal: "Distinguished Service Professor, University of Chicago; Director, Chicago Center on Democracy",
      idea: "Income inequality is the single strongest predictor of democratic backsliding across countries and ideologies, which means that building an economy people believe in is one of the most direct ways to protect democracy.",
      tags: ["Democracy", "Economic Inequality", "Power"],
      photo: "assets/speakers/susan-stokes.png",
      bio: [
        "Susan Stokes has spent her career studying a question that has never felt more urgent: how democracies erode, and how citizens can repair them. As the Tiffany and Margaret Blake Distinguished Service Professor of Political Science at the University of Chicago and Director of the Chicago Center on Democracy, which she founded in 2018, she is one of the world’s leading scholars of democratic theory, political behavior, and what happens when leaders turn against the institutions they were entrusted to protect.",
        "The author of six books, Susan published her most recent, The Backsliders: Why Leaders Undermine Their Own Democracies, published by Princeton University Press in 2025, offering the first general explanation for the wave of democratic backsliding now reaching the United States, and a roadmap for resisting and rebuilding. A member of the National Academy of Sciences and the American Academy of Arts and Sciences, the current President of the American Political Science Association, and a founding member of the watchdog group Bright Line Watch, she brings rigorous social science to a conviction at the heart of this moment: democracy is not self-sustaining, it is something the people have to choose, and keep choosing, together."
      ]
    }
  ];

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    })[c]);

  /* ── Render speaker cards from SPEAKERS into #speakerTrack ── */
  const renderSpeakerCards = () => {
    const track = document.getElementById("speakerTrack");
    if (!track) return;
    track.innerHTML = SPEAKERS.map((sp, i) => `
      <article class="speaker-card${i % 2 ? " alt" : ""}" data-speaker-id="${sp.id}"
                tabindex="0" role="button" aria-haspopup="dialog"
                aria-label="Read full bio for ${escapeHtml(sp.name)}">
        <div class="speaker-poster">
          <span class="poster-pattern" aria-hidden="true"></span>
          <div class="portrait${sp.photo ? " has-photo" : ""}" aria-hidden="true">
            ${sp.photo
              ? `<img src="${escapeHtml(sp.photo)}" alt="" loading="lazy">`
              : `<svg viewBox="0 0 200 240"><circle cx="100" cy="86" r="46"/><path d="M100 142 c-52 0 -76 38 -76 98 h152 c0 -60 -24 -98 -76 -98z"/></svg>`}
          </div>
          <span class="poster-brand">TED<sup>x</sup><em>Chicago</em></span>
          <div class="poster-name-block">
            <h3 class="speaker-name">${sp.nameLines.map(escapeHtml).join("<br>")}</h3>
            <span class="poster-read-bio" data-speaker-trigger>Read Bio</span>
          </div>
        </div>
        <div class="speaker-info">
          <p class="speaker-role">${escapeHtml(sp.role)}</p>
          <p class="speaker-topic">${escapeHtml(sp.idea || "Talk details coming soon.")}</p>
        </div>
      </article>
    `).join("");
  };
  renderSpeakerCards();

  /* ── Speaker bio modal ─────────────────────────────────── */
  const speakerModal = document.getElementById("speakerModal");
  if (speakerModal) {
    const modalDialog = speakerModal.querySelector(".speaker-modal-dialog");
    const modalPortrait = document.getElementById("speakerModalPortrait");
    const modalName = document.getElementById("speakerModalName");
    const modalRole = document.getElementById("speakerModalRole");
    const modalFormal = document.getElementById("speakerModalFormal");
    const modalIdea = document.getElementById("speakerModalIdea");
    const modalBio = document.getElementById("speakerModalBio");
    const modalTags = document.getElementById("speakerModalTags");
    let lastFocused = null;
    let closeTimer = null;

    const onModalKeydown = (e) => {
      if (e.key === "Escape") {
        closeSpeakerModal();
        return;
      }
      if (e.key === "Tab") {
        const focusables = modalDialog.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    function openSpeakerModal(speaker, trigger) {
      clearTimeout(closeTimer);
      lastFocused = trigger || document.activeElement;

      modalPortrait.classList.toggle("has-photo", !!speaker.photo);
      modalPortrait.innerHTML = speaker.photo
        ? `<img src="${escapeHtml(speaker.photo)}" alt="">`
        : `<svg viewBox="0 0 200 240"><circle cx="100" cy="86" r="46"/><path d="M100 142 c-52 0 -76 38 -76 98 h152 c0 -60 -24 -98 -76 -98z"/></svg>`;

      modalName.textContent = speaker.name;
      modalRole.textContent = speaker.role;
      modalFormal.textContent = speaker.formal || "";
      modalFormal.hidden = !speaker.formal;
      modalIdea.innerHTML = speaker.idea
        ? `<p>“${escapeHtml(speaker.idea)}”</p>`
        : "";
      modalBio.innerHTML = (speaker.bio || [])
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
      modalTags.innerHTML = (speaker.tags || [])
        .map((t) => `<span class="tag-pill">${escapeHtml(t)}</span>`)
        .join("");

      speakerModal.hidden = false;
      speakerModal.scrollTop = 0;
      modalDialog.scrollTop = 0;
      requestAnimationFrame(() => speakerModal.classList.add("is-open"));
      document.body.classList.add("modal-open");
      speakerModal.querySelector(".speaker-modal-close").focus();
      document.addEventListener("keydown", onModalKeydown);
    }

    function closeSpeakerModal() {
      speakerModal.classList.remove("is-open");
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onModalKeydown);
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        speakerModal.hidden = true;
      }, 280);
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    speakerModal.querySelectorAll("[data-modal-close]").forEach((el) =>
      el.addEventListener("click", closeSpeakerModal)
    );

    const speakerTrack = document.getElementById("speakerTrack");
    if (speakerTrack) {
      speakerTrack.addEventListener("click", (e) => {
        const card = e.target.closest(".speaker-card");
        if (!card) return;
        const speaker = SPEAKERS.find((s) => s.id === card.dataset.speakerId);
        if (speaker) openSpeakerModal(speaker, card);
      });
      speakerTrack.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const card = e.target.closest(".speaker-card");
        if (!card) return;
        e.preventDefault();
        const speaker = SPEAKERS.find((s) => s.id === card.dataset.speakerId);
        if (speaker) openSpeakerModal(speaker, card);
      });
    }
  }

  /* ── Sticky header ─────────────────────────────────────── */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav ────────────────────────────────────────── */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.closest("a") && !e.target.closest(".nav-drop-toggle")) {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ── Nav dropdowns (click/tap toggle; hover handled by CSS) ── */
  const closeDropdowns = (except) => {
    document.querySelectorAll(".nav-item.open").forEach((item) => {
      if (item !== except) {
        item.classList.remove("open");
        item.querySelector(".nav-drop-toggle").setAttribute("aria-expanded", "false");
      }
    });
  };

  document.querySelectorAll(".nav-drop-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const item = toggle.parentElement;
      const open = item.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      closeDropdowns(item);
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) closeDropdowns();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdowns();
  });

  /* ── Carousels (prev/next scroll one card; swipe via native
         scroll-snap; optional auto-advance) ─────────────────── */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cardStep = (track) => {
    const card = track.querySelector(":scope > *");
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    return card ? card.offsetWidth + gap : 0;
  };
  const atEnd = (track) => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;

  const scrollCarousel = (track, dir) => {
    if (dir > 0 && atEnd(track)) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: dir * cardStep(track), behavior: "smooth" });
  };

  document.querySelectorAll("[data-carousel-prev]").forEach((btn) => {
    const track = document.getElementById(btn.dataset.carouselPrev);
    btn.addEventListener("click", () => scrollCarousel(track, -1));
  });
  document.querySelectorAll("[data-carousel-next]").forEach((btn) => {
    const track = document.getElementById(btn.dataset.carouselNext);
    btn.addEventListener("click", () => scrollCarousel(track, 1));
  });

  /* Auto-advance: scrolls one card every `interval`, wraps at the
     end, and pauses while the user is hovering, touching, dragging,
     or has focused a control inside the track (controls still work
     at any time — using them just resets the countdown). */
  const autoAdvanceCarousel = (track, interval) => {
    if (!track || reducedMotion) return;
    let timer = null;

    const start = () => {
      stop();
      timer = setInterval(() => scrollCarousel(track, 1), interval);
    };
    const stop = () => timer && clearInterval(timer);

    ["mouseenter", "touchstart", "focusin", "pointerdown"].forEach((evt) =>
      track.addEventListener(evt, stop, { passive: true })
    );
    ["mouseleave", "touchend", "focusout", "pointerup"].forEach((evt) =>
      track.addEventListener(evt, start, { passive: true })
    );

    const section = track.closest("section");
    document.querySelectorAll(`[data-carousel-prev="${track.id}"], [data-carousel-next="${track.id}"]`).forEach(
      (btn) => btn.addEventListener("click", start)
    );

    if ("IntersectionObserver" in window && section) {
      new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
        { threshold: 0.3 }
      ).observe(section);
    } else {
      start();
    }
  };

  autoAdvanceCarousel(document.getElementById("speakerTrack"), 3000);

  /* ── Quote carousel (auto-rotate + dots) ───────────────── */
  const quotes = document.querySelectorAll("#quoteSlides .quote");
  const dots = document.querySelectorAll("#quoteDots .qdot");
  let quoteIndex = 0;
  let quoteTimer = null;

  const showQuote = (i) => {
    quoteIndex = (i + quotes.length) % quotes.length;
    quotes.forEach((q, n) => q.classList.toggle("is-active", n === quoteIndex));
    dots.forEach((d, n) => d.classList.toggle("is-active", n === quoteIndex));
  };

  const startQuotes = () => {
    stopQuotes();
    quoteTimer = setInterval(() => showQuote(quoteIndex + 1), 5500);
  };
  const stopQuotes = () => quoteTimer && clearInterval(quoteTimer);

  dots.forEach((dot, n) => {
    dot.addEventListener("click", () => {
      showQuote(n);
      startQuotes(); // reset the clock after manual pick
    });
  });

  if (quotes.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    startQuotes();
  }

  /* ── Parallax background media (e.g. Membership skyline) ── */
  const parallaxEls = [...document.querySelectorAll("[data-parallax] .parallax-img, .parallax-img")]
    .filter((el, i, arr) => arr.indexOf(el) === i);

  if (parallaxEls.length && !reducedMotion) {
    const speed = 0.18;
    let ticking = false;

    const updateParallax = () => {
      ticking = false;
      const vh = window.innerHeight;
      parallaxEls.forEach((img) => {
        const section = img.closest(".tv-static") || img.parentElement;
        const rect = section.getBoundingClientRect();
        // Progress of the section through the viewport, ~ -1 (above) to 1 (below)
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const offset = progress * rect.height * speed;
        img.style.transform = `translate(-50%, calc(-50% + ${offset.toFixed(1)}px))`;
      });
    };

    const onParallaxScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", onParallaxScroll, { passive: true });
    window.addEventListener("resize", onParallaxScroll);
    updateParallax();
  }

  /* ── Scroll reveal ─────────────────────────────────────── */
  const revealables = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }
})();
