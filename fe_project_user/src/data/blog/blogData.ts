import {
  BlogPost,
  Category,
  MultimediaItem,
  PopularPost,
} from "@/data/blog/blogType";

// Categories data
export const categories: Category[] = [
  {
    id: "all",
    name: "All Posts",
    iconName: "BookOpen",
    color: "text-slate-600",
  },
  {
    id: "thought-leadership",
    name: "Thought Leadership",
    iconName: "Lightbulb",
    color: "text-[#28c4dd]",
  },
  {
    id: "lifestyle-growth",
    name: "Lifestyle & Growth",
    iconName: "Heart",
    color: "text-rose-500",
  },
  {
    id: "practical-guides",
    name: "Practical Guides",
    iconName: "Briefcase",
    color: "text-orange-600",
  },
  {
    id: "news-updates",
    name: "News & Updates",
    iconName: "Newspaper",
    color: "text-blue-600",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Co-Living: Blending Community and Consciousness",
    slug: "future-of-co-living-community-consciousness",
    excerpt:
      "Exploring how conscious co-living spaces are reshaping urban living and fostering deeper human connections in the digital age.",
    category: "thought-leadership",
    author: "Jennifer Nguyen",
    authorRole: "Founder & CEO",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2025-01-05",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    content: `
# The Future of Co-Living: Blending Community and Consciousness

The way we live is changing. As our world becomes increasingly digital and disconnected, a counter-movement is emerging—one that prioritizes intentional community, shared experiences, and conscious living.

## The Rise of Conscious Co-Living

Co-living is not a new concept, but conscious co-living represents an evolution. It's about creating spaces where residents don't just share physical amenities, but also values, aspirations, and a commitment to personal and collective growth.

### What Makes It Different?

Traditional co-living focuses primarily on economics and convenience. Conscious co-living goes deeper:

- **Intentional Community Building**: Regular events, workshops, and shared meals that foster genuine connections
- **Aligned Values**: Residents who share similar life philosophies and goals
- **Personal Growth**: Spaces designed to support meditation, creativity, and self-development
- **Sustainability**: Environmental consciousness in design and daily operations

## The Digital Age Paradox

We're more "connected" than ever through technology, yet many people report feeling increasingly isolated. Conscious co-living addresses this paradox by creating physical spaces where meaningful face-to-face interactions are not just possible, but encouraged and celebrated.

## Impact on Urban Living

Cities worldwide are seeing a shift. Young professionals, digital nomads, and conscious entrepreneurs are choosing community-focused living arrangements over isolated apartments. This trend is reshaping:

- **Urban Development**: Developers are incorporating community spaces into new projects
- **Work Culture**: Remote work enables people to prioritize lifestyle and community
- **Social Dynamics**: New models of friendship and support networks are emerging

## Looking Ahead

The future of co-living is bright. As more people experience the benefits of intentional community, we expect to see:

1. **More Diverse Models**: From urban hubs to rural retreats, options for every lifestyle
2. **Integration with Technology**: Smart tools that enhance, not replace, human connection
3. **Global Networks**: Communities that span cities and countries, creating worldwide support systems
4. **Policy Changes**: Government recognition and support for alternative living models

## Conclusion

Conscious co-living represents more than a housing trend—it's a movement toward more meaningful, connected, and purposeful living. As we navigate an increasingly complex world, these communities offer a blueprint for how we might live better together.

The question isn't whether this model will grow, but how quickly it will reshape the way we think about home, community, and belonging.
    `,
    tags: ["Co-Living", "Community", "Lifestyle", "Future Trends"],
    relatedPosts: [2, 5, 6],
  },
  {
    id: 2,
    title: "5 Morning Rituals That Changed My Life as a Digital Nomad",
    slug: "morning-rituals-digital-nomad-life",
    excerpt:
      "Discover the daily practices that help remote workers stay grounded, productive, and fulfilled while traveling the world.",
    category: "lifestyle-growth",
    author: "David Chen",
    authorRole: "Community Member",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2025-01-03",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# 5 Morning Rituals That Changed My Life as a Digital Nomad

After three years of traveling while working remotely, I've learned that success as a digital nomad isn't about finding the perfect cafe or the fastest WiFi—it's about establishing consistent habits that ground you no matter where you are.

## 1. The 5-Minute Mindfulness Practice

Before checking my phone or opening my laptop, I spend five minutes in quiet reflection. This simple practice has transformed my relationship with work, stress, and daily challenges.

**How to implement:**
- Set a gentle alarm 5 minutes before your usual wake time
- Sit comfortably and focus on your breath
- Observe thoughts without judgment
- Set an intention for the day

## 2. Movement Before Screens

Whether it's yoga, a run, or simple stretching, moving my body before diving into work has been game-changing.

**Benefits I've experienced:**
- Increased energy throughout the day
- Better focus during work hours
- Improved sleep quality
- Reduced anxiety and stress

## 3. The Gratitude Journal

Every morning, I write down three things I'm grateful for. In the chaos of constant travel and changing environments, this practice keeps me centered.

## 4. The Planning Power Hour

I dedicate the first hour after my morning routine to planning. Not doing, but planning. This includes:
- Reviewing goals for the week
- Prioritizing tasks for the day
- Time-blocking my calendar
- Identifying potential obstacles

## 5. Connection Before Consumption

Instead of consuming content first thing, I reach out to one person—a family member, friend, or community member. A simple message or quick call reminds me that I'm part of something larger.

## The Results

These five rituals have helped me:
- Maintain productivity across 15+ countries
- Build deeper relationships despite constant travel
- Manage stress and prevent burnout
- Feel more present and intentional in my daily life

## Your Turn

You don't need to adopt all five rituals at once. Start with one that resonates most. The key is consistency, not perfection.

Remember: the goal isn't to create a rigid routine, but to establish anchors that keep you grounded as your external environment constantly changes.
    `,
    tags: ["Digital Nomad", "Productivity", "Wellness", "Morning Routine"],
    relatedPosts: [6, 1, 5],
  },
  {
    id: 3,
    title: "Complete Guide: Finding Your Perfect Co-Living Space in Vietnam",
    slug: "complete-guide-finding-co-living-space-vietnam",
    excerpt:
      "Everything you need to know about choosing the right co-living community, from location to amenities to community culture.",
    category: "practical-guides",
    author: "Sarah Martinez",
    authorRole: "Community Manager",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2025-01-01",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# Complete Guide: Finding Your Perfect Co-Living Space in Vietnam

Vietnam has become one of the hottest destinations for digital nomads and remote workers. With its affordable cost of living, delicious food, rich culture, and growing expat community, it's no wonder co-living spaces are popping up across the country.

## Understanding Your Priorities

Before you start your search, get clear on what matters most to you:

### Location Considerations
- **Hanoi**: Rich culture, four seasons, traditional Vietnamese experience
- **Ho Chi Minh City**: Fast-paced, modern, strong startup ecosystem
- **Da Nang**: Beach lifestyle, outdoor activities, growing expat community

### Community Culture
Different co-living spaces attract different types of residents. Consider:
- Age demographics
- Professional backgrounds
- Activity levels
- Social vs. quiet preferences

## Essential Amenities Checklist

### Must-Haves
- ✓ Reliable high-speed WiFi (test it during your visit!)
- ✓ Comfortable workspace
- ✓ Air conditioning
- ✓ Clean, well-maintained facilities
- ✓ Security measures

### Nice-to-Haves
- Swimming pool
- Gym facilities
- Communal kitchen
- Outdoor spaces
- Proximity to cafes and restaurants

## Evaluating Community Vibe

The people make the place. Look for:

1. **Regular Events**: Weekly dinners, workshops, or social activities
2. **Communication**: Active community channels and responsive management
3. **Diversity**: Mix of nationalities, professions, and backgrounds
4. **Longevity**: Check average stay duration of residents

## Financial Considerations

### Typical Costs in Vietnam
- Budget: $300-500/month
- Mid-range: $500-800/month
- Premium: $800-1,200/month

### What's Usually Included
- Utilities (electricity, water, WiFi)
- Cleaning services
- Access to common areas
- Community events

### Hidden Costs to Consider
- Laundry services
- Parking fees
- Guest policies
- Minimum stay requirements

## Red Flags to Watch For

- Consistently poor WiFi reviews
- Unclear pricing or hidden fees
- Lack of community engagement
- Poor maintenance
- Limited availability to tour before booking

## Making Your Decision

### The Trial Period Approach
Many co-living spaces offer short-term trials. Consider:
1. Book a one-week stay first
2. Evaluate daily life logistics
3. Meet current residents
4. Test the workspace during your actual work hours

### Questions to Ask Current Residents
- How's the noise level for work calls?
- How responsive is management to issues?
- What's the community really like day-to-day?
- Any frustrations with the space?

## Conclusion

Finding the right co-living space is about more than just a room—it's about finding your community. Take your time, ask questions, and trust your gut. The perfect space for you is out there.
    `,
    tags: ["Vietnam", "Co-Living", "Travel Guide", "Digital Nomad"],
    relatedPosts: [7, 1, 2],
  },
  {
    id: 4,
    title: "NextU Living Expands to Da Nang: New Beachfront Location Opening",
    slug: "nextu-living-expands-danang-beachfront-location",
    excerpt:
      "We're excited to announce our newest location in Da Nang, featuring oceanview rooms and a dedicated creativity studio.",
    category: "news-updates",
    author: "NextU Team",
    authorRole: "Official Announcement",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2024-12-28",
    readTime: "4 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# NextU Living Expands to Da Nang: New Beachfront Location Opening

We're thrilled to announce our newest location in Da Nang, Vietnam! Opening February 2026, our beachfront property will offer an unparalleled co-living experience combining work, wellness, and ocean views.

## The Location

Situated in the heart of My Khe Beach, consistently ranked among Asia's most beautiful beaches, our Da Nang location offers:

- Direct beach access
- 5-minute walk to local cafes and restaurants
- 15-minute drive from Da Nang International Airport
- Easy access to Marble Mountains and Hoi An

## What to Expect

### Accommodation
- 20 private rooms with ocean or mountain views
- 8 shared rooms for budget-conscious travelers
- 2 premium suites with private balconies

### Facilities
- Rooftop co-working space with panoramic views
- Ground floor creativity studio for art and music
- Outdoor yoga deck facing the ocean
- Swimming pool and wellness area
- Communal kitchen and dining area

### Community Programming
- Morning beach yoga sessions
- Sunset social hours
- Monthly surf lessons
- Weekly skill-sharing workshops
- Entrepreneurship meetups

## Special Opening Rates

Book before January 31st to secure our founding member rates:
- Private rooms: $650/month (regular $850)
- Shared rooms: $400/month (regular $550)
- Minimum 3-month commitment for founding member rates

## Why Da Nang?

Da Nang perfectly balances urban amenities with outdoor adventure. It's ideal for:
- Beach lovers and surfers
- Outdoor enthusiasts
- Digital nomads seeking work-life balance
- Anyone looking for a more relaxed pace

## Join Us

Spots are limited. Visit our website to schedule a virtual tour or reserve your place in our newest community.

Welcome to NextU Da Nang—where productivity meets paradise.
    `,
    tags: ["News", "Da Nang", "Expansion", "Community"],
    relatedPosts: [3, 1],
  },
  {
    id: 5,
    title: "Building a Sustainable Business While Living Intentionally",
    slug: "building-sustainable-business-living-intentionally",
    excerpt:
      "How conscious entrepreneurs are creating profitable ventures without sacrificing their values or wellbeing.",
    category: "thought-leadership",
    author: "Michael Tran",
    authorRole: "Startup Advisor",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2024-12-25",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# Building a Sustainable Business While Living Intentionally

The traditional startup narrative glorifies hustle culture, sacrificing wellbeing for success. But a growing number of entrepreneurs are proving there's another way.

## The Conscious Business Movement

Conscious entrepreneurship isn't about choosing between profit and purpose—it's about integrating both. Key principles include:

- **Values-First Decision Making**: Every business choice reflects your core values
- **Sustainable Growth**: Building steadily rather than scaling at any cost
- **Community Impact**: Success measured by positive impact, not just revenue
- **Work-Life Integration**: Business that supports, not consumes, your lifestyle

## Real-World Examples

I've worked with dozens of entrepreneurs who've built successful businesses while:
- Traveling full-time
- Maintaining deep relationships
- Prioritizing health and wellness
- Contributing to their communities

## Key Strategies

### 1. Define Success on Your Terms
What does success actually mean to you? Revenue targets? Freedom? Impact? Get clear before you build.

### 2. Build Systems, Not Jobs
Create businesses that don't require your constant presence. Automation, delegation, and smart processes are key.

### 3. Choose the Right Business Model
Some models naturally support intentional living better than others:
- Online courses and digital products
- Coaching and consulting
- Software as a service
- Content creation and community building

### 4. Protect Your Energy
- Set clear boundaries
- Schedule non-negotiable personal time
- Regularly assess if your business still aligns with your values

## The Long Game

Building a sustainable business takes patience. You're not just creating a company—you're crafting a life. The entrepreneurs who thrive long-term are those who never lose sight of why they started.

## Conclusion

You don't have to choose between business success and intentional living. With clear values, smart systems, and patience, you can build a venture that funds the life you actually want to live.
    `,
    tags: ["Entrepreneurship", "Sustainability", "Business", "Lifestyle"],
    relatedPosts: [1, 2],
  },
  {
    id: 6,
    title: "Mindfulness Practices for Remote Workers: A Practical Toolkit",
    slug: "mindfulness-practices-remote-workers-toolkit",
    excerpt:
      "Simple yet powerful techniques to maintain mental clarity and emotional balance while working from anywhere.",
    category: "lifestyle-growth",
    author: "Lisa Wong",
    authorRole: "Wellness Coach",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2024-12-22",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# Mindfulness Practices for Remote Workers: A Practical Toolkit

Remote work offers incredible freedom, but it also comes with unique challenges: blurred boundaries, isolation, and constant digital stimulation. Mindfulness can help.

## Why Mindfulness Matters for Remote Workers

- **Reduces burnout** by creating mental space between work and rest
- **Improves focus** in an environment full of distractions
- **Enhances well-being** when physical and social boundaries are fluid
- **Increases productivity** through better attention management

## 5 Practical Mindfulness Techniques

### 1. The Two-Minute Transition Ritual
Before starting work, take two minutes to:
- Close your eyes
- Take three deep breaths
- Set an intention for your work session

### 2. Mindful Email Checking
Instead of constantly monitoring your inbox:
- Set specific times to check email
- Take three breaths before opening your email app
- Respond thoughtfully, not reactively

### 3. The Pomodoro with Presence
Combine the Pomodoro Technique with mindfulness:
- 25 minutes of focused work
- 5 minutes of mindful break (no screens!)
- Every 4 cycles, take a 15-minute meditation break

### 4. Body Scan During Work
Once every hour:
- Notice your posture
- Release tension in your shoulders
- Take three conscious breaths
- Adjust your position

### 5. End-of-Day Shutdown Ritual
Create a clear boundary between work and personal time:
- Review what you accomplished
- Write down tomorrow's priorities
- Close all work apps
- Take five minutes to reflect on your day

## Creating a Mindful Workspace

Your environment affects your mental state:
- Dedicate a specific area for work
- Keep your workspace clean and minimal
- Add elements that promote calm (plants, natural light)
- Remove distractions

## Building the Habit

Start small:
- Choose one technique
- Practice it daily for two weeks
- Add another technique once the first becomes natural

## Conclusion

Mindfulness isn't about adding more to your to-do list. It's about bringing awareness to what you're already doing. Start with one practice today.
    `,
    tags: ["Mindfulness", "Remote Work", "Wellness", "Productivity"],
    relatedPosts: [2, 5],
  },
  {
    id: 7,
    title: "How to Navigate Vietnam's Visa System for Long-Term Stays",
    slug: "navigate-vietnam-visa-system-long-term-stays",
    excerpt:
      "A comprehensive breakdown of visa options, requirements, and renewal processes for digital nomads and expats.",
    category: "practical-guides",
    author: "Tom Nguyen",
    authorRole: "Legal Advisor",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2024-12-20",
    readTime: "15 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# How to Navigate Vietnam's Visa System for Long-Term Stays

Planning to stay in Vietnam for an extended period? Understanding the visa system is crucial. This comprehensive guide covers everything you need to know.

## Visa Options Overview

### Tourist Visa (DL)
- **Duration**: Up to 90 days
- **Extensions**: Possible, but limited
- **Best for**: Testing the waters, short stays

### Business Visa (DN)
- **Duration**: Up to 12 months
- **Requirements**: Sponsoring company or organization
- **Best for**: Freelancers, entrepreneurs with local connections

### Electronic Visa (e-Visa)
- **Duration**: 30 or 90 days
- **Process**: Online application
- **Best for**: First-time visitors, short-term stays

## Requirements and Documents

Typical requirements include:
- Valid passport (6+ months validity)
- Passport photos
- Completed application form
- Visa approval letter (for some visa types)
- Proof of accommodation
- Return flight ticket (sometimes required)

## The Application Process

### Step 1: Determine Your Visa Type
Consider your:
- Intended length of stay
- Purpose of visit
- Budget
- Flexibility needs

### Step 2: Gather Documents
Start this process early—some documents can take time to obtain.

### Step 3: Apply
Options include:
- Vietnam embassy/consulate in your country
- Visa on arrival (with approval letter)
- E-visa (for eligible nationalities)

### Step 4: Receive and Verify
Double-check all details on your visa immediately upon receipt.

## Extensions and Renewals

### Tourist Visa Extension
- Usually possible for one additional month
- Apply through immigration office or agent
- Costs vary ($50-100 USD)

### Business Visa Extension
- Can be extended up to 12 months total
- Requires sponsorship
- More straightforward than tourist visa

## Visa Runs: Pros and Cons

Some expats do "visa runs"—leaving and re-entering Vietnam to reset their visa.

**Pros:**
- Opportunity to explore neighboring countries
- Relatively simple process
- Can be cost-effective

**Cons:**
- Time-consuming
- Uncertainty (immigration policies change)
- Not suitable for everyone

## Working Legally in Vietnam

To work legally, you need:
- Work permit
- Temporary residence card
- Sponsoring employer

Freelancers and digital nomads operate in a gray area—consult with a legal advisor for your specific situation.

## Tips from Expats

1. **Use a reputable visa agent** for complex situations
2. **Keep digital copies** of all important documents
3. **Start the process early**—don't wait until the last minute
4. **Stay informed** about policy changes
5. **Build relationships** with immigration officers through respect and patience

## Costs

Typical costs (2024):
- Tourist visa: $25-50 USD
- Business visa: $50-150 USD
- Extensions: $50-100 USD
- Visa agent fees: $20-50 USD

## Conclusion

Vietnam's visa system can seem complex, but with proper planning, it's manageable. When in doubt, consult with a professional visa service or legal advisor.

Remember: immigration policies can change. Always verify current requirements with official sources before making plans.
    `,
    tags: ["Vietnam", "Visa", "Travel", "Legal"],
    relatedPosts: [3, 4],
  },
  {
    id: 8,
    title: "December Community Highlights: Events, Workshops & Milestones",
    slug: "december-community-highlights-events-workshops",
    excerpt:
      "A recap of our incredible month filled with creative workshops, networking events, and community celebrations.",
    category: "news-updates",
    author: "Community Team",
    authorRole: "NextU Living",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "2024-12-18",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# December Community Highlights: Events, Workshops & Milestones

What a month it's been! December brought our community together in amazing ways. Here's a recap of the highlights.

## Weekly Events

### Community Dinners
Our traditional Monday night dinners continued to be a hit, with an average of 25 residents joining each week. Special mentions to:
- Week 1: Vietnamese cooking night
- Week 2: International potluck
- Week 3: Holiday celebration dinner
- Week 4: Year-end reflection dinner

### Morning Yoga Sessions
Attendance grew to record numbers, with some sessions seeing 30+ participants. Thank you to our volunteer instructors!

## Special Workshops

### Entrepreneurship Series
**"From Idea to Launch"** workshop series concluded with:
- 3 new businesses launched
- 15+ active participants
- Guest speakers from successful startups

### Creative Skills Workshops
- Photography basics (Dec 5)
- Content creation for social media (Dec 12)
- Introduction to graphic design (Dec 19)
- Music production fundamentals (Dec 26)

## Community Milestones

### New Residents
Welcomed 8 new community members from:
- United States
- Germany
- Japan
- Australia
- South Korea

### Success Stories
- Sarah landed her dream remote job
- Mike completed his first marathon
- The book club finished 3 books
- Community garden produced first harvest

### Social Impact
- Volunteered 40+ hours at local schools
- Donated to 2 local charities
- Organized beach cleanup (60 participants)

## Looking Ahead to January

### Upcoming Events
- New Year's intention-setting workshop (Jan 1)
- Photography walking tour of Old Quarter (Jan 8)
- Vision board creation session (Jan 15)
- Community outdoor adventure (Jan 22)

### New Programs Launching
- Skill-swap Thursdays
- Monthly book club
- Weekly language exchange
- Resident-led workshops

## Thank You

None of this would be possible without our amazing community. Thank you to:
- All volunteer workshop leaders
- Event organizers
- Active participants
- Every single community member who shows up

## Join Us

Interested in being part of our community? We have rooms opening up in January. Visit our website or stop by for a tour.

Here's to an even better 2026! 🎉
    `,
    tags: ["Community", "Events", "News", "Highlights"],
    relatedPosts: [4, 1],
  },
];

// Popular posts data
export const popularPosts: PopularPost[] = [
  {
    id: 1,
    title: "10 Productivity Hacks for Remote Workers",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why Community Matters More Than Ever",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building Habits That Stick",
    readTime: "8 min read",
  },
];

// Multimedia content data
export const multimediaContent: MultimediaItem[] = [
  {
    id: 1,
    type: "video",
    title: "Life at NextU: A Day in the Community",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "3:45",
    iconName: "Play",
  },
  {
    id: 2,
    type: "podcast",
    title: "The NextU Podcast: Building Conscious Communities",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "42:15",
    iconName: "Headphones",
  },
  {
    id: 3,
    type: "video",
    title: "Co-Living Success Stories: Resident Interviews",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "8:20",
    iconName: "Play",
  },
];

export function getCategoryData(categoryId: string): Category {
  return categories.find((cat) => cat.id === categoryId) || categories[0];
}

export function filterPosts(
  posts: BlogPost[],
  categoryFilter: string,
  searchQuery: string
): BlogPost[] {
  return posts.filter((post) => {
    const matchesCategory =
      categoryFilter === "all" || post.category === categoryFilter;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}
