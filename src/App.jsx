import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [expandedHeaders, setExpandedHeaders] = useState({});
  const [feedbackStatus, setFeedbackStatus] = useState('');

  const toggleHeader = (headerKey) => {
    setExpandedHeaders(prev => ({
      ...prev,
      [headerKey]: !prev[headerKey]
    }));
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      setSubscribeStatus('Thanks for subscribing!');
      form.reset();
      setTimeout(() => setSubscribeStatus(''), 3000);
    } catch (error) {
      setSubscribeStatus('Something went wrong. Please try again.');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  const handleFeedback = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      setFeedbackStatus('Thanks for your feedback!');
      form.reset();
      setTimeout(() => setFeedbackStatus(''), 3000);
    } catch (error) {
      setFeedbackStatus('Something went wrong. Please try again.');
      setTimeout(() => setFeedbackStatus(''), 3000);
    }
  };


  // Blog post data
  const blogPosts = [
    {
      id: 1,
      date: 'January 28, 2025',
      title: 'Blog Post #1: How I Learned Claude In One Day To Make This Blog',
      excerpt: "Yesterday I arrived in my new Brooklyn apartment at 11:00pm at night. This morning at 10:30am I met for coffee to discuss the game plan for how I'm going to gain skills in AI, writing and branding over the next 90 days under a graduate program level of intensity and structure. By 11:00am I was at the office, installing Claude Desktop.",
      tags: ['AI'],
      content: `Yesterday I arrived in my new Brooklyn apartment at 11:00pm at night. This morning at 10:30am I met for coffee to discuss the game plan for how I'm going to gain skills in AI, writing and branding over the next 90 days under a graduate program level of intensity and structure. By 11:00am I was at the office, installing Claude Desktop.

My goal: To create a personal website I'm proud of, deploy it, and write a blog post about the experience within the workday by only interacting with Claude interfaces and no other applications.

The tasks and advice I was given were to:
LISTITEM:Set-up Claude - both the desktop and Claude Code
SUBITEM:To run Claude Code in the "Ghostie" terminal which I later learned was actually the Ghostty terminal
LISTITEM:Learn about Claude skills using Claude
SUBITEM:What are its valuable skills?
SUBITEM:How does Claude learn these skills?
SUBITEM:What are Claude's most valuable skills?
SUBITEM:What skills will I need to make my blog?
LISTITEM:Spend some time doing Metacognitive Thinking
LISTITEM:Evaluate if Claude is BS'ing me
LISTITEM:Evaluate if Claude is gassing me up
LISTITEM:Design the personal website with Claude
LISTITEM:Deploy the Blog
SUBITEM:Come up with a deployment plan
SUBITEM:Be able to explain the steps of deployment
LISTITEM:Publish this Blog

I am an architectural designer.

So I began:

TIMESTAMP:10:30
LISTITEM:Looked up Claude on Google and downloaded
LISTITEM:Used Claude in browser to look up how to install Claude Code and use the Ghostie terminal
LISTITEM:Learned I need Homebrew
LISTITEM:Asked Claude how to check if Homebrew is installed
LISTITEM:It was not installed
LISTITEM:Began to install Homebrew with the code Claude provided

TIMESTAMP:11:40
LISTITEM:Became confused about password request… a bit embarrassing
LISTITEM:Claude confirmed I won't see the password but to just type my macOS user password
LISTITEM:While waiting for the Homebrew install I attempted to Connect Claude Desktop to my google account and did some wifi troubleshooting

TIMESTAMP:11:50
LISTITEM:I spent some time asking Claude about Claude Code versus Desktop and if I could work on setting anything else up for my blog while I waited for Homebrew to install
LISTITEM:I asked Claude about what its skills are and learned that some of them are: docx, pptx, xlsx, pdf, front-end-design, product-self-knowledge, and skill-creator
LISTITEM:I asked Claude how it learns and understands these and learned it retrieves files, reads them to remind itself/ensure it is referencing the most updated practices
LISTITEM:I asked Claude its most valuable skills. In response it just excitedly retold me its skills again…? But it seemed to think its ability to analyze and create documents was the most important along with front-end-design because it is capable of creating polished react based websites
LISTITEM:I determined that I should ask Claude to focus on the front-end-design skill
LISTITEM:It was perfect timing because I thought I could finally use Claude Code! It turns out I couldn't yet because my macOS software was out of date… RIP

TIMESTAMP:12:22
LISTITEM:I wanted to keep moving so it was here that decided to make this website using Claude Desktop
DIALOGUE:"I'd like to build a polished personal website for publishing blogs and artifacts using your front-end design skill"
LISTITEM:I confirmed with Claude that I could do this and we began
LISTITEM:Claude asked me the following:
NUMBERED:1. Your field/focus area
NUMBERED:2. The aesthetic vibe you're going for
NUMBERED:3. Whether you want single-page HTML or React
NUMBERED:4. What content you want featured (blog list, projects, about section, etc.)
LISTITEM:Response:
NUMBERED:1. I am a recent architecture graduate from Illinois Tech. I completed a 5 year B.Arch program and I'm now going through a custom graduate program in which I will be rapidly growing my AI, writing, and marketing/branding skills.
NUMBERED:2. I like feminine and japanese aesthetics, a mix of both modern + retro aesthetic would be good. I like desert colors, muted colors, feminine colors, earth tones etc. I want it to seem professional but not so polished and complete that it is missing the quality of active working and research.
NUMBERED:3. I would like to use React elements.
NUMBERED:4. I would like some sort of about me, a blog list, and a project section for artifacts
LISTITEM:I didn't think too hard about these responses at all

TIMESTAMP:12:35
LISTITEM:I had a website that was beautiful and I could deploy
LISTITEM:I asked for a home page
LISTITEM:Asked for edits on the header of the home page
LISTITEM:And got called into a meeting

TIMESTAMP:1:32
LISTITEM:I came back excited to know my software would be updated and I could use Claude Code.
LISTITEM:I asked Claude what the best method for editing the infill text is. One of its suggestions was using Claude Code and I really thought I had it installed at this point.
LISTITEM:It was here I started asking Claude about the Ghostie terminal
DIALOGUE:"Ah! I don't actually know what "Ghostie terminal" refers to - I assumed you were using a nickname for your terminal app, but now I'm realizing you might be referring to something specific that I'm not familiar with."
LISTITEM:I felt a bit dumb…
LISTITEM:So I moved on and simplified: "How do I run Claude Code?"
LISTITEM:I spent a long long time asking Claude how to run Claude Code and it kept telling me to type claude or claude-code in many different ways. This seemed odd to me. Shouldn't the command be simple? Claude was so convinced that I might have actually installed Claude Code already or that I should figure out how to run it with my out of date macOS software that it had me check to see if the terminal recognized Claude Code as an app? I apologize if this is getting confusing, this is where it got confusing for me, and I definitely could have hyper-analyzed it but instead I kept showing Claude the terminal responses and let it take me on this cyclical journey of continuing to prompt my terminal to open Claude Code and getting 'command not found' in response to every single one.

TIMESTAMP:1:47
DIALOGUE:"None of these are working"
LISTITEM:I don't understand how…but my software update stopped sometime during the meeting and I had to restart it. RIP!
LISTITEM:Dealing with this was a ridiculous time sink
LISTITEM:I started the update again and continued to edit the website with Claude Desktop

TIMESTAMP:1:50
LISTITEM:I asked Claude to be analytical about the site and think about anything we were missing that typically goes into a personal website
LISTITEM:From this conversation I asked Claude to use its pdf skill, uploaded my resume and had it implement the resume as both a separate section on the site and on the about page to see which worked better on the site
LISTITEM:From here I was in a good flow state asking for small detailed edits on the text and then editing all of the infill text to pertain to my actual information
LISTITEM:It was awesome that Claude could show me the updates visually in real time
LISTITEM:I was having a lot of fun

TIMESTAMP:2:30
LISTITEM:I mentioned to Claude that I was ready to write my blog post and asked it to clear all of the made up blog post containers
LISTITEM:After this update it assumed we were done editing and gave me a .jsx file to download
LISTITEM:Oddly enough it stopped displaying the visuals I had been seeing, I didn't know what those containers looked like anymore
LISTITEM:Claude tried to tell me that it couldn't pull up the visuals anymore… why would it do this? It just didn't want to run the artifact again, but it kept telling me "I can't"…which was interesting
LISTITEM:I was ready to write so I decided to take a lunch break

TIMESTAMP:3:30
LISTITEM:I uploaded a profile picture to implement and ran into an issue where Claude couldn't convert the HEIC to JPEG
LISTITEM:It also didn't have authorized access to my local files so it couldn't run the profile picture in the artifact visual
LISTITEM:More edits, writing the about page etc.

TIMESTAMP:4:17
LISTITEM:I decided to deploy the site
LISTITEM:Turns out Claude Code was still not installed and was still not installing with the commands Claude was providing me
LISTITEM:I thought back to the advice given to me and remembered the Ghostie terminal! I decided to cheat and look this up on google because Claude seemed to have no clue what I was talking about…
LISTITEM:This is where I finally learned after hours that I had been making a huge dumb mistake!! Ghostty, it is called the Ghostty terminal

DIALOGUE:Me: "I think part of the issue is that i dont have the ghostty terminal"
DIALOGUE:Claude: "Ah! You're right - Claude Code requires the Ghostty terminal. Let's install Ghostty first:"

TERMINAL:Installation Successful!

I typed claudecode into the Ghostty terminal as suggested by Claude…

TERMINAL:command not found

RIP… truly rip.

I had just told Liam I was having so much fun… sigh

I'm going to be honest after this I went back into the same cycle with Claude, this time I copied all the responses from terminal and fed them to Claude Desktop who I had been working with all day. After a whirlwind journey….we had finally located the path to Claude Code. I knew this because a cute little pixel creature showed up on my screen. I smiled.

DIALOGUE:Me: "okay that was a bit confusing for me but claude code now opens with the claude command"

DIALOGUE:Claude: "Perfect! That's all that matters - you got it working! 🎉 Now you can just type claude in your terminal and Claude Code will open."

Relief.

TIMESTAMP:4:40

Goal: Deploy the Site
LISTITEM:Claude asked me if I had used any deployment platforms before
SUBITEM:I had: Github and Netlify
LISTITEM:Claude told me a plan and asked if it should begin preparing for deployment
LISTITEM:I said yes and told it to explain the deployment steps:

CODEBLOCK:personal-website-deploy/
├── package.json (dependencies & scripts)
├── .gitignore (files to ignore in git)
├── README.md (documentation)
├── public/
│   ├── index.html (main HTML file)
│   └── profile-pic.jpg (your photo)
└── src/
    ├── index.js (entry point)
    └── App.jsx (your website component)

Claude told me the next steps were to:
NUMBERED:1. download the file and extract
NUMBERED:2. Open the terminal and navigate to the folder (cd personal-website-deploy)
NUMBERED:3. Install dependencies (npm install)
NUMBERED:4. Test it locally (npm start)

DIALOGUE:Me: "I still need to finish reading but what is npm?"

TIMESTAMP:4:56
LISTITEM:I followed all of the above deployment steps but when I ran it locally in my browser a scary red ERROR paragraph appeared :(
LISTITEM:Claude had forgotten to close the <main> tags
LISTITEM:A couple of different errors showed up and I continued to replace the App.jsx file

TIMESTAMP:5:05
LISTITEM:I remember I needed to change the really odd quote Claude had put onto my about page
LISTITEM:I chose one from Christopher Alexander's book "The Timeless Way of Building"

TIMESTAMP:5:17
LISTITEM:My personal website was successfully running locally
LISTITEM:The last steps were to push to GitHub
LISTITEM:Claude Code told me that to use GitHub I needed to install Xcode command line tools… the install was going to take forever… not this again
LISTITEM:Turns out the easiest thing for me to do here would have been to use the manual skills I had and push it myself using GitHub Desktop and Netlify
LISTITEM:I started documenting my experience today while I was waiting but eventually decided to use GitHub Desktop myself
LISTITEM:I successfully published to GitHub and asked Claude if it had any ability to publish to Netlify for me - it said it didn't have that ability

TIMESTAMP:6:10
LISTITEM:I published to Netlify
TERMINAL:ERROR
LISTITEM:Claude had put an invalid href
LISTITEM:Updated the App.jsx
TERMINAL:ERROR

TIMESTAMP:6:15
LISTITEM:I was reminded around this time to check the model of Claude I was using. My Claude Code was set to Opus 4.5 - good. Claude Desktop however was set to Sonnet 4.5 instead of Opus 4.5 :'(
LISTITEM:I showed the errors to Claude in Opus 4.5
LISTITEM:It wanted to find my files by connecting to google? This was annoying and didn't work…
LISTITEM:I instead gave it the file path to my project
LISTITEM:I attempted to see if Claude Code could commit changes to the main branch and push to origin
LISTITEM:It did commit the changes - very cool!
LISTITEM:But it said I needed to install GitHub CLI in order for the push to origin to work
LISTITEM:I clicked push to origin myself
LISTITEM:Opened my browser and there was my website, successfully published on the World Wide Web with Netlify!

CLOSING:Now I just need to have Claude check this for errors, and add in an actual page for this blog post…`
    },
    {
      id: 2,
      date: 'January 30, 2025',
      title: 'Blog #2: I\'ve Been Convinced of Crusonia Plants - Stubborn Attachments by Tyler Cowen',
      excerpt: 'A few things: I have never published my thoughts on a book. I haven\'t read a book front to back in one day since junior high. I have never read a book on economics apart from my high school economics textbook. I had a great time reading. I am now obsessed with thinking about Crusonia plants.',
      tags: ['Book Review', 'Research'],
      content: `A few things: I have never published my thoughts on a book. I haven't read a book front to back in one day since junior high. I have never read a book on economics apart from my high school economics textbook. I had a great time reading. I am now obsessed with thinking about Crusonia plants.

SEPARATOR:

NOTE:It is interesting to note that Claude organized these notes for me with no direction. I'm not sure I would organize them the same way, but I also thought it was curious to keep it around like this.

Here are the ideas left floating at the top of my mind after reading yesterday:

HEADER:Key Concepts
LISTITEM:The Crusonia plant
LISTITEM:Sustainable economic growth
LISTITEM:Wealth Plus
LISTITEM:Human rights
LISTITEM:Pluralism
LISTITEM:Time distance horizon
LISTITEM:Faith

HEADER:Philosophical Framework
LISTITEM:Radical uncertainty breaks down arguments for consequentialism over human rights
LISTITEM:Common sense morality ruled the book
LISTITEM:Intuitions of right or wrong feel good — but is it the right way to think of things? Can we trust ourselves and our brain?
LISTITEM:Our minds can be uncertain and irrational
LISTITEM:Right and wrong are objective and powerful
LISTITEM:Cowen believes in absolute human rights — so we just assume human rights are intrinsic
LISTITEM:We need to lessen the moral distance we have with future generations and have faith in the future
LISTITEM:We have a moral imperative to have a deep concern for the distant future
LISTITEM:Epistemic critique → why we should respect individual rights
LISTITEM:Radical uncertainty gives us the freedom to act morally
LISTITEM:Issue of rights is not strictly absolute in the case of the end of the world — lifeboat ethics
LISTITEM:Even if rights are not always absolute (like in a case of the world ending), we have a rights theory where rights are mostly absolute at least in a world in which the Crusonia plants and the froth of consequentialist uncertainty exist
LISTITEM:Common sense morality and intuition are deeply connected to what is right

HEADER:Questions / Tensions
LISTITEM:Is there such a thing as free lunches? Crusonia plant is a free lunch
LISTITEM:Time may reveal free lunches — we should think more distantly
LISTITEM:When in doubt, choose the Crusonia plant
LISTITEM:What is the difference between rules and rights?
LISTITEM:Are negative rights rules?
LISTITEM:How do we define civilization?
LISTITEM:Why does he bring up the Solow model versus increasing returns model?
LISTITEM:Do all fruitful societies require faith?

HEADER:Economic Arguments
LISTITEM:GDP should be measured to include Wealth Plus (human welfare, etc.)
LISTITEM:Crusonia plant can solve issues of aggregation
LISTITEM:If we are thinking in a long time horizon, utilitarian thinking may lead us to conclude that it is more beneficial to redistribute to the wealthy and improve trickle down effects
LISTITEM:We should instead focus on Crusonia plants and overall choose the path of greatest good/value/sustainable economic growth
LISTITEM:Ideas are the wellspring of economic growth

HEADER:Personal Experience as a Reader
LISTITEM:As a newbie to this field, many terms were new and left my head spinning in certain moments
LISTITEM:Difficult to summarize conclusions or takeaways in certain moments
LISTITEM:Surprised by lack of tech talk

HEADER:Broader Takeaways
LISTITEM:We are in an investment drought
LISTITEM:Institutions are important
LISTITEM:"Crusonia plants reign supreme"
LISTITEM:We should stick to our rules and rights rigidly
LISTITEM:Greater sustainable economic growth
LISTITEM:We are most likely wrong — we should be skeptical of really particular instruments built to promote good
LISTITEM:Freedom and prosperity are valuable
LISTITEM:We should be more charitable
LISTITEM:Choose the Crusonia plant unless it is obvious like the world is ending or human rights intervene
LISTITEM:Ideas are the foundation of value in society

SEPARATOR:

SECTION:The Crusonia Plant

For the sake of not overthinking this blog post, I will just say I am still unsure of my conclusions of this book. That's not satisfying to say, but I feel that my lack of knowledge in this field is enough to not trust my conclusions, at least not enough to state them concretely, yet. What I do know is that my instincts tell me chasing Crusonia plants sounds fun, it seems valuable to chase them, and I am definitely convinced by their power.

Cowen didn't create the Crusonia plant. He revived the idea, originally created by economist Frank Knight, to provide an example of a free lunch. The Crusonia plant is:

QUOTE:...a mythical, automatically growing crop which generates more output each period. If you lay the seeds, the plant just grows; you don't have to water it or tend to it.

Cowen argues that the analogy of the Crusonia plant can solve issues of aggregation. "When in doubt, choose the Crusonia plant" — easy. In other words, Cowen sets up a principle in which we should aim to identify choices or policies that are equivalent to the "unceasing yield, namely ongoing and self-sustaining surges in value" of the Crusonia plant.

I think it is important to note that the strength of the Crusonia plant relies, in some ways, on the assumption that we have a deep concern for the future. Throughout the book, I often found the Crusonia plant to be a guiding force. No matter the terms or argument, the Crusonia plant reigned supreme as the aim. The only cases in which this wasn't true were: one, the scenario in which the world is ending, and two, respecting the rules of human rights when applicable.

SECTION:When Not to Choose the Crusonia Plant

Although Cowen's Crusonia plant is an obvious push for choosing paths of greater economic growth, it's important to note that Cowen's primary goal is to return to a society based on good principles; human rights became a primary topic of the discussion.

QUOTE:We need to develop a tougher, more dedicated, and indeed a more stubborn attachment to prosperity and freedom.

He begins the book with a framework that ignores meta-ethics, states that there is an objective right or wrong, and assumes we as readers have an intuition of what that right or wrong is in any given scenario. He also recognizes both the limitations of the human mind and the fundamental messiness to the nature of good, holding pluralism as a core moral intuition.

Interestingly enough, when asked what Cowen said about human rights or why he argued their importance, I couldn't remember an answer. This is partially because when he first brings up The Principle of Growth Plus Rights, he simply states that we should think of rights as binding and absolute — we ought not to violate human rights. Later in Chapter 6, the argument for human rights becomes clearer when he discusses the epistemic critique:

QUOTE:We should choose the course that is most likely to be correct, keeping in mind that at the end of the day we are still more likely to be wrong than right.

Our radical uncertainty is actually the key to our freedom to act morally; since we most likely cannot predict the outcome of our actions, when faced with a frothy chance at high economic growth versus a path that protects human rights, we ought to just choose the path that protects human rights. There is a chance that choosing that path can also lead to beneficial economic growth.

SECTION:Great Ideas Are the Crusonia Plants?

Towards the end of the book, Cowen discusses once-and-for-all changes vs. growth rate changes by comparing the Solow Model and the Increasing Returns Model. The Solow Model is known as the most prominent economic approach to growth where "...national output is the result of capital inputs, labor inputs, and technological progress." One of the strengths of this model is its ability to provide quick economic recovery after one-time negative shocks. Boosts in savings and investment support fast catch-up growth during transition growth paths but do not provide long-run growth rates.

The Increasing Returns Model indicates growth leads to more growth; "...larger markets generate stronger incentives for idea production because innovators can sell their products to a larger market..." In this case, more growth continues to lead to new ideas, which leads to more growth. Here he says something interesting:

QUOTE:Once an idea has been generated, it can be used many times by many different people at very low marginal cost. The first idea spreads, begets subsequent ideas, and so growth increases.

The weakness of this model is that any negative shocks will shrink the economy and limit future growth rates without the catch-up methods that the Solow Model has.

The point of his discussion wasn't to pick which one of these models is better (which did confuse me at first). The point of discussing these models was to highlight that both "...emphasize ideas as the wellspring of economic growth." Ideas are fundamental to a world in which we aim to continue to chase paths leading to greater sustainable economic growth. This is very cool to me.

QUOTE:New ideas are the product of human reason; it was Aristotle who defined man as the rational animal. A preoccupation with pursuing growth—or some modified version of the growth ideal—therefore means a preoccupation with ideas, a preoccupation with cultivating human reason, and a preoccupation with the notion that man should realize, perfect, and extend his nature as a generator of powerful ideas that can change the world.

We live in a world of Crusonia plants. Cowen's ability to use such a strong idea to explain his arguments, in a book that arguably concludes with this message, has definitely caused me to be biased towards trusting the rest of his ideas.`
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f1eb 0%, #ebe3d5 100%)',
      fontFamily: '"Crimson Pro", "Noto Serif JP", serif',
      color: '#3d3028',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E")',
        pointerEvents: 'none',
        opacity: 0.4
      }} />

      {/* Decorative elements */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(205,180,155,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(188,143,143,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      {/* Main container */}
      <div className="main-container" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <header style={{
          marginBottom: '80px',
          borderBottom: '1px solid rgba(61,48,40,0.15)',
          paddingBottom: '40px',
          position: 'relative'
        }}>
          <div className="header-flex" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h1 className="site-title" style={{
                fontSize: '48px',
                fontWeight: '300',
                margin: '0 0 8px 0',
                letterSpacing: '-0.5px',
                fontFamily: '"Cormorant Garamond", "Noto Serif JP", serif'
              }}>
                Julianna Roberts
              </h1>
              <p style={{
                margin: 0,
                fontSize: '15px',
                color: '#8b7355',
                letterSpacing: '1px',
                fontWeight: '400'
              }}>
                Architecture × AI × Writing
              </p>
            </div>
            
            {/* Navigation */}
            <nav className="nav-links" style={{
              display: 'flex',
              gap: '32px',
              fontSize: '14px',
              letterSpacing: '0.5px'
            }}>
              {['home', 'about', 'writing', 'projects'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: activeSection === section ? '#3d3028' : '#9d8b7a',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    letterSpacing: 'inherit',
                    padding: '8px 0',
                    borderBottom: activeSection === section ? '2px solid #bc8f8f' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                    textTransform: 'lowercase'
                  }}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Margin note style annotation */}
          <div style={{
            position: 'absolute',
            right: '0',
            top: '-20px',
            fontSize: '11px',
            color: '#bc8f8f',
            fontStyle: 'italic',
            opacity: 0.6
          }}>
            ※ in progress
          </div>
        </header>

        {/* Content sections */}
        <main>
          {/* Home section */}
          {activeSection === 'home' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              {/* Intro */}
              <div style={{
                marginBottom: '60px',
                maxWidth: '700px'
              }}>
                <p style={{
                  fontSize: '19px',
                  lineHeight: '1.7',
                  color: '#3d3028',
                  marginBottom: '24px'
                }}>
                  Recent B. Arch graduate and architectural designer becoming an AI expert by implementing it into my daily practice with nothing but novice coding experience and Claude.
                </p>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#5a4a3a',
                  margin: 0
                }}>
                  This site collects my ongoing work, experiments, research notes and observations.
                </p>
              </div>

              {/* Currently Working On */}
              <div style={{
                marginBottom: '60px',
                paddingBottom: '40px',
                borderBottom: '1px solid rgba(205,180,155,0.3)'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  color: '#8b7355',
                  marginBottom: '16px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  Current Focus
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#5a4a3a',
                  margin: 0
                }}>
                  Integrating Claude into my daily motions, developing weekly reading and research practice, and publishing daily
                </p>
              </div>

              {/* Featured Blog Post */}
              <div style={{
                marginBottom: '60px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '32px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    margin: 0
                  }}>
                    Latest Writing
                  </h3>
                  <button
                    onClick={() => setActiveSection('writing')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#bc8f8f',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      textDecoration: 'underline',
                      padding: 0
                    }}
                  >
                    View all →
                  </button>
                </div>
                
                <article
                  onClick={() => {
                    setActiveSection('writing');
                    setActiveBlogPost(blogPosts[blogPosts.length - 1]);
                  }}
                  style={{
                    padding: '40px',
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(205,180,155,0.3)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,48,40,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: '12px',
                    color: '#bc8f8f',
                    marginBottom: '16px',
                    letterSpacing: '1px'
                  }}>
                    {blogPosts[blogPosts.length - 1].date}
                  </div>
                  
                  <h4 style={{
                    fontSize: '32px',
                    fontWeight: '400',
                    marginBottom: '20px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight: '1.3'
                  }}>
                    {blogPosts[blogPosts.length - 1].title}
                  </h4>
                  
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.8',
                    color: '#5a4a3a',
                    marginBottom: '20px'
                  }}>
                    {blogPosts[blogPosts.length - 1].excerpt.length > 200
                      ? `${blogPosts[blogPosts.length - 1].excerpt.substring(0, 200)}...`
                      : blogPosts[blogPosts.length - 1].excerpt}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    {blogPosts[blogPosts.length - 1].tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '12px',
                          padding: '4px 12px',
                          background: 'rgba(205,180,155,0.2)',
                          color: '#8b7355',
                          borderRadius: '2px',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '50px',
                    height: '50px',
                    borderTop: '2px solid rgba(188,143,143,0.3)',
                    borderRight: '2px solid rgba(188,143,143,0.3)'
                  }} />
                </article>
              </div>

              {/* Recent Projects */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '32px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    margin: 0
                  }}>
                    Recent Projects
                  </h3>
                  <button
                    onClick={() => setActiveSection('projects')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#bc8f8f',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      textDecoration: 'underline',
                      padding: 0
                    }}
                  >
                    View all →
                  </button>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px'
                }}>
                  <div
                    style={{
                      padding: '28px',
                      background: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(205,180,155,0.3)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,48,40,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      fontSize: '11px',
                      color: '#bc8f8f',
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Artifact Type
                    </div>
                    
                    <h4 style={{
                      fontSize: '19px',
                      fontWeight: '400',
                      marginBottom: '10px',
                      color: '#3d3028',
                      fontFamily: '"Cormorant Garamond", serif'
                    }}>
                      Title
                    </h4>
                    
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#5a4a3a',
                      marginBottom: '12px'
                    }}>
                      Summary
                    </p>
                    
                    <div style={{
                      fontSize: '12px',
                      color: '#9d8b7a',
                      borderTop: '1px solid rgba(205,180,155,0.2)',
                      paddingTop: '10px'
                    }}>
                      Date
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* About section */}
          {activeSection === 'about' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              <div className="about-grid" style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '60px',
                alignItems: 'start',
                marginBottom: '80px'
              }}>
                <div>
                  <h2 style={{
                    fontSize: '32px',
                    fontWeight: '300',
                    marginBottom: '24px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif'
                  }}>
                    About
                  </h2>
                  <div style={{
                    fontSize: '17px',
                    lineHeight: '1.8',
                    color: '#5a4a3a'
                  }}>
                    <p style={{ marginBottom: '20px' }}>
                      One year ago I was finishing a 5 year accredited architecture program at Illinois Tech. I was on track to follow the traditional path towards becoming a Licensed Architect through NCARB, but as I was nearing graduation I looked at the rapidly changing world around me, I looked at my field which seemed stuck in time... and I realized I wanted to respond to it. Now I'm taking the time to look into the future and predict the skills I will need to be successful in the future version of my field.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                      I will be developing valuable skills like: AI, writing, researching, and marketing and publishing those artifacts here to prepare for a future of entrepreneurship that implements both AI and my design practice.
                    </p>
                    <p style={{ 
                      marginBottom: '20px',
                      paddingLeft: '20px',
                      borderLeft: '3px solid #cdb49b',
                      fontStyle: 'italic',
                      fontSize: '16px',
                      color: '#8b7355'
                    }}>
                      "When you build a thing you cannot merely build that thing in isolation, but must repair the world around it, and within it, so that the larger world at that one place becomes more coherent, and more whole." — Christopher Alexander, The Timeless Way of Building
                    </p>
                  </div>
                </div>
                
                <div className="about-sidebar" style={{
                  background: 'rgba(255,255,255,0.4)',
                  padding: '32px',
                  borderRadius: '2px',
                  border: '1px solid rgba(205,180,155,0.3)',
                  backdropFilter: 'blur(10px)'
                }}>
                  {/* Profile Photo */}
                  <div style={{
                    marginBottom: '28px',
                    textAlign: 'center'
                  }}>
                    <img 
                      src="/profile-pic.jpg" 
                      alt="Julianna Roberts"
                      className="profile-image"
                      style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid rgba(205,180,155,0.4)',
                        boxShadow: '0 4px 12px rgba(61,48,40,0.1)'
                      }}
                    />
                  </div>

                  <h3 style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    color: '#8b7355',
                    fontWeight: '600'
                  }}>
                    Current Focus
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: '2'
                  }}>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#bc8f8f' }}>→</span> Integrating Claude into my daily motions
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#bc8f8f' }}>→</span> Developing weekly reading and research practice
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#bc8f8f' }}>→</span> Publishing daily
                    </li>
                  </ul>
                  
                  <div style={{
                    marginTop: '28px',
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(205,180,155,0.3)'
                  }}>
                    <p style={{
                      fontSize: '13px',
                      color: '#9d8b7a',
                      margin: 0
                    }}>
                      Contact: juliannaroberts18@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Resume Section */}
              <div style={{
                paddingTop: '60px',
                borderTop: '1px solid rgba(205,180,155,0.3)'
              }}>
                <div className="resume-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '40px'
                }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif',
                    margin: 0
                  }}>
                    Resume
                  </h3>
                  <button
                    onClick={() => window.print()}
                    style={{
                      fontSize: '14px',
                      color: '#bc8f8f',
                      textDecoration: 'none',
                      paddingBottom: '2px',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid #bc8f8f',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    Download PDF →
                  </button>
                </div>

                {/* Experience */}
                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#8b7355',
                    marginBottom: '24px',
                    fontWeight: '600'
                  }}>
                    Experience
                  </h4>

                  <div style={{ marginBottom: '24px' }}>
                    <div className="experience-row" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          margin: '0 0 4px 0',
                          color: '#3d3028'
                        }}>
                          Architectural Intern
                        </p>
                        <p style={{
                          fontSize: '15px',
                          color: '#bc8f8f',
                          margin: 0
                        }}>
                          Studio KZ + Scottsdale Design Build
                        </p>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#9d8b7a'
                      }}>
                        May 2022 - July 2023
                      </span>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Developed drawing sets through the CD & CA phases for both residential & commercial projects, built 3D SketchUp models for client presentations, participated in on-site field & construction work, assisted with contractual review, collaborated on structural calculations and detail design.
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div className="experience-row" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          margin: '0 0 4px 0',
                          color: '#3d3028'
                        }}>
                          Gallery Educator + Greeter
                        </p>
                        <p style={{
                          fontSize: '15px',
                          color: '#bc8f8f',
                          margin: 0
                        }}>
                          Wrightwood 659
                        </p>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#9d8b7a'
                      }}>
                        April 2024 - July 2024
                      </span>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Engaged & educated visitors on architecture & artworks, developed research & "educator talk" on artist.
                    </p>
                  </div>

                  <div>
                    <div className="experience-row" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div>
                        <p style={{
                          fontSize: '17px',
                          fontWeight: '400',
                          margin: '0 0 4px 0',
                          color: '#3d3028'
                        }}>
                          Gallery Service Assistant
                        </p>
                        <p style={{
                          fontSize: '15px',
                          color: '#bc8f8f',
                          margin: 0
                        }}>
                          Gallery 1957 | Expo Chicago
                        </p>
                      </div>
                      <span style={{
                        fontSize: '14px',
                        color: '#9d8b7a'
                      }}>
                        April 2023
                      </span>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Engaged with potential clients, learned artists & their works quickly, promoted & represented artists to the public.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#8b7355',
                    marginBottom: '24px',
                    fontWeight: '600'
                  }}>
                    Education
                  </h4>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{
                      fontSize: '17px',
                      fontWeight: '400',
                      margin: '0 0 8px 0',
                      color: '#3d3028'
                    }}>
                      Illinois Institute of Technology
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: '#5a4a3a',
                      margin: '0 0 6px 0'
                    }}>
                      Bachelor of Architecture (NAAB Accredited) | GPA: 3.71 | 2020-2025
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#9d8b7a',
                      margin: 0
                    }}>
                      Summer Study Abroad: Japan 2023 · U.S. Department of Energy Solar Decathlon
                    </p>
                  </div>

                  <div>
                    <p style={{
                      fontSize: '17px',
                      fontWeight: '400',
                      margin: '0 0 8px 0',
                      color: '#3d3028'
                    }}>
                      Westwood High School
                    </p>
                    <p style={{
                      fontSize: '15px',
                      color: '#5a4a3a',
                      margin: '0 0 6px 0'
                    }}>
                      International Baccalaureate | 2016-2020
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#9d8b7a',
                      margin: 0
                    }}>
                      Seal of Biliteracy & NHS Seal | Class Rank: 1 out of 638 | GPA: 5.0
                    </p>
                  </div>
                </div>

                {/* Three column section */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '40px'
                }}>
                  {/* Organizations */}
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#8b7355',
                      marginBottom: '16px',
                      fontWeight: '600'
                    }}>
                      Organizations
                    </h4>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{
                        fontSize: '15px',
                        margin: '0 0 4px 0',
                        color: '#3d3028'
                      }}>
                        Camras Scholars
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#9d8b7a',
                        margin: 0
                      }}>
                        2020-2025 | Mentor
                      </p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{
                        fontSize: '15px',
                        margin: '0 0 4px 0',
                        color: '#3d3028'
                      }}>
                        IIT Art × Architecture (AIAS)
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#9d8b7a',
                        margin: 0
                      }}>
                        Director | 2021-2024
                      </p>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '15px',
                        margin: '0 0 4px 0',
                        color: '#3d3028'
                      }}>
                        Kappa Phi Delta Sorority
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#9d8b7a',
                        margin: 0
                      }}>
                        Assis. Sec. | 2022-2024
                      </p>
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#8b7355',
                      marginBottom: '16px',
                      fontWeight: '600'
                    }}>
                      Awards
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a'
                    }}>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Dwight T. Black Memorial Scholarship Nomination (2024)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> U.S. Solar Decathlon Finalist (2024)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Anderson Presidential Scholarship (2022-present)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Camras Scholarship (2020-2025)
                      </li>
                      <li style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#bc8f8f' }}>→</span> Dean's List (2021-2025)
                      </li>
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#8b7355',
                      marginBottom: '16px',
                      fontWeight: '600'
                    }}>
                      Skills
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a',
                      margin: '0 0 16px 0'
                    }}>
                      Adobe Creative Cloud, AutoCAD, Rhino + V-Ray, Lumion, SketchUp, Microsoft Office 365
                    </p>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a',
                      margin: '0 0 16px 0'
                    }}>
                      Drafting, sketching, model making, laser cutting, wood shop, excavation
                    </p>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.8',
                      color: '#5a4a3a',
                      margin: 0
                    }}>
                      Communication, organization, leadership, creativity, attention to detail, conceptualization, critical thinking, problem solving
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Writing/Blog section */}
          {activeSection === 'writing' && !activeBlogPost && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '300',
                marginBottom: '40px',
                color: '#3d3028',
                fontFamily: '"Cormorant Garamond", serif'
              }}>
                Writing
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
              }}>
                {[...blogPosts].reverse().map(post => (
                  <article
                    key={post.id}
                    onClick={() => setActiveBlogPost(post)}
                    style={{
                      padding: '32px',
                      background: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(205,180,155,0.25)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.borderColor = 'rgba(188,143,143,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'rgba(205,180,155,0.25)';
                    }}
                  >
                    <div style={{
                      fontSize: '12px',
                      color: '#bc8f8f',
                      marginBottom: '12px',
                      letterSpacing: '1px'
                    }}>
                      {post.date}
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '400',
                      marginBottom: '16px',
                      color: '#3d3028',
                      fontFamily: '"Cormorant Garamond", serif'
                    }}>
                      {post.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                      color: '#5a4a3a',
                      marginBottom: '16px'
                    }}>
                      {post.excerpt.length > 200 ? `${post.excerpt.substring(0, 200)}...` : post.excerpt}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '12px',
                            padding: '4px 12px',
                            background: 'rgba(205,180,155,0.2)',
                            color: '#8b7355',
                            borderRadius: '2px',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Sketch-like corner accent */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      width: '40px',
                      height: '40px',
                      borderTop: '2px solid rgba(188,143,143,0.3)',
                      borderRight: '2px solid rgba(188,143,143,0.3)',
                      opacity: 0.5
                    }} />
                  </article>
                ))}
              </div>

            </section>
          )}

          {/* Individual Blog Post View */}
          {activeBlogPost && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              <button
                onClick={() => setActiveBlogPost(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#bc8f8f',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  marginBottom: '40px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                ← Back to Writing
              </button>
              
              <article style={{
                maxWidth: '700px'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#bc8f8f',
                  marginBottom: '16px',
                  letterSpacing: '1px'
                }}>
                  {activeBlogPost.date}
                </div>
                
                <h1 style={{
                  fontSize: '36px',
                  fontWeight: '400',
                  marginBottom: '24px',
                  color: '#3d3028',
                  fontFamily: '"Cormorant Garamond", serif',
                  lineHeight: '1.3'
                }}>
                  {activeBlogPost.title}
                </h1>
                
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginBottom: '40px',
                  paddingBottom: '40px',
                  borderBottom: '1px solid rgba(205,180,155,0.3)'
                }}>
                  {activeBlogPost.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        background: 'rgba(205,180,155,0.2)',
                        color: '#8b7355',
                        borderRadius: '2px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: '#3d3028'
                }}>
                  {(() => {
                    const content = activeBlogPost.content;
                    const lines = content.split('\n');
                    const elements = [];
                    let i = 0;
                    
                    while (i < lines.length) {
                      const line = lines[i];
                      
                      // Skip empty lines
                      if (line.trim() === '') {
                        i++;
                        continue;
                      }
                      
                      // Handle TIMESTAMP (collapsible)
                      if (line.startsWith('TIMESTAMP:')) {
                        const time = line.replace('TIMESTAMP:', '');
                        const timestampKey = `timestamp-${i}`;
                        const isExpanded = expandedHeaders[timestampKey];

                        // Collect ALL content until next TIMESTAMP, HEADER, or SECTION
                        const timestampContent = [];
                        let j = i + 1;
                        while (j < lines.length &&
                               !lines[j].startsWith('TIMESTAMP:') &&
                               !lines[j].startsWith('HEADER:') &&
                               !lines[j].startsWith('SECTION:') &&
                               !lines[j].startsWith('CLOSING:')) {
                          const itemLine = lines[j];
                          if (itemLine.trim() !== '') {
                            if (itemLine.startsWith('LISTITEM:')) {
                              timestampContent.push({ type: 'main', text: itemLine.replace('LISTITEM:', '') });
                            } else if (itemLine.startsWith('SUBITEM:')) {
                              timestampContent.push({ type: 'sub', text: itemLine.replace('SUBITEM:', '') });
                            } else if (itemLine.startsWith('NUMBERED:')) {
                              timestampContent.push({ type: 'numbered', text: itemLine.replace('NUMBERED:', '') });
                            } else if (itemLine.startsWith('DIALOGUE:')) {
                              timestampContent.push({ type: 'dialogue', text: itemLine.replace('DIALOGUE:', '') });
                            } else if (itemLine.startsWith('TERMINAL:')) {
                              timestampContent.push({ type: 'terminal', text: itemLine.replace('TERMINAL:', '') });
                            } else if (itemLine.startsWith('CODEBLOCK:')) {
                              // Collect codeblock lines
                              const codeLines = [itemLine.replace('CODEBLOCK:', '')];
                              j++;
                              while (j < lines.length && (lines[j].startsWith('├') || lines[j].startsWith('│') || lines[j].startsWith('└') || lines[j].trim().startsWith('├') || lines[j].trim().startsWith('│') || lines[j].trim().startsWith('└'))) {
                                codeLines.push(lines[j]);
                                j++;
                              }
                              timestampContent.push({ type: 'codeblock', text: codeLines.join('\n') });
                              continue;
                            } else if (itemLine.startsWith('Goal:')) {
                              timestampContent.push({ type: 'goal', text: itemLine });
                            } else {
                              // Plain text paragraph
                              timestampContent.push({ type: 'paragraph', text: itemLine });
                            }
                          }
                          j++;
                        }

                        elements.push(
                          <div key={timestampKey} style={{ marginTop: '48px' }}>
                            <h3
                              onClick={() => toggleHeader(timestampKey)}
                              style={{
                                marginBottom: isExpanded ? '16px' : '0',
                                fontWeight: '600',
                                color: '#8b7355',
                                fontSize: '18px',
                                letterSpacing: '0.5px',
                                borderBottom: '1px solid rgba(205,180,155,0.3)',
                                paddingBottom: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                userSelect: 'none'
                              }}
                            >
                              <span style={{
                                fontSize: '12px',
                                transition: 'transform 0.2s ease',
                                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                display: 'inline-block'
                              }}>
                                ▶
                              </span>
                              {time}
                            </h3>
                            {isExpanded && timestampContent.length > 0 && (
                              <div style={{ marginBottom: '24px', paddingLeft: '20px' }}>
                                {timestampContent.map((item, idx) => {
                                  if (item.type === 'dialogue') {
                                    return (
                                      <p key={idx} style={{
                                        marginBottom: '16px',
                                        fontStyle: 'italic',
                                        paddingLeft: '20px',
                                        borderLeft: '2px solid rgba(188,143,143,0.4)',
                                        color: '#5a4a3a'
                                      }}>
                                        {item.text}
                                      </p>
                                    );
                                  } else if (item.type === 'terminal') {
                                    const isError = item.text.toLowerCase().includes('error') || item.text.toLowerCase().includes('not found');
                                    return (
                                      <code key={idx} style={{
                                        display: 'block',
                                        marginBottom: '12px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        background: 'rgba(205,180,155,0.2)',
                                        color: isError ? '#dc3545' : '#28a745',
                                        padding: '8px 12px',
                                        borderRadius: '4px',
                                        fontWeight: '600'
                                      }}>
                                        {item.text}
                                      </code>
                                    );
                                  } else if (item.type === 'codeblock') {
                                    return (
                                      <pre key={idx} style={{
                                        marginBottom: '24px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        background: 'rgba(205,180,155,0.15)',
                                        padding: '16px',
                                        borderRadius: '4px',
                                        whiteSpace: 'pre',
                                        lineHeight: '1.6',
                                        overflowX: 'auto'
                                      }}>
                                        {item.text}
                                      </pre>
                                    );
                                  } else if (item.type === 'goal') {
                                    return (
                                      <p key={idx} style={{
                                        marginBottom: '16px',
                                        fontSize: '17px',
                                        fontWeight: '600',
                                        color: '#3d3028'
                                      }}>
                                        {item.text}
                                      </p>
                                    );
                                  } else if (item.type === 'paragraph') {
                                    return (
                                      <p key={idx} style={{
                                        marginBottom: '16px',
                                        fontSize: '17px',
                                        lineHeight: '1.8',
                                        color: '#5a4a3a'
                                      }}>
                                        {item.text}
                                      </p>
                                    );
                                  } else {
                                    return (
                                      <div key={idx} style={{
                                        marginBottom: '8px',
                                        paddingLeft: item.type === 'sub' ? '28px' : item.type === 'numbered' ? '20px' : '0',
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                      }}>
                                        {item.type !== 'numbered' && (
                                          <span style={{ color: '#bc8f8f', flexShrink: 0 }}>–</span>
                                        )}
                                        <span>{item.text}</span>
                                      </div>
                                    );
                                  }
                                })}
                              </div>
                            )}
                          </div>
                        );
                        i = j;
                        continue;
                      }

                      // Handle SECTION (major section headers)
                      if (line.startsWith('SECTION:')) {
                        const title = line.replace('SECTION:', '');
                        elements.push(
                          <h2 key={i} style={{
                            marginTop: '56px',
                            marginBottom: '24px',
                            fontSize: '28px',
                            fontWeight: '400',
                            color: '#3d3028',
                            fontFamily: '"Cormorant Garamond", serif',
                            borderBottom: '2px solid rgba(188,143,143,0.3)',
                            paddingBottom: '12px'
                          }}>
                            {title}
                          </h2>
                        );
                        i++;
                        continue;
                      }

                      // Handle NOTE (sidebar/aside style)
                      if (line.startsWith('NOTE:')) {
                        const text = line.replace('NOTE:', '');
                        elements.push(
                          <aside key={i} style={{
                            marginTop: '24px',
                            marginBottom: '32px',
                            padding: '20px 24px',
                            background: 'rgba(205,180,155,0.12)',
                            borderRadius: '4px',
                            fontSize: '14px',
                            fontStyle: 'italic',
                            color: '#8b7355',
                            lineHeight: '1.7',
                            borderLeft: '3px solid rgba(188,143,143,0.4)'
                          }}>
                            {text}
                          </aside>
                        );
                        i++;
                        continue;
                      }

                      // Handle HEADER (collapsible subsection headers)
                      if (line.startsWith('HEADER:')) {
                        const title = line.replace('HEADER:', '');
                        const headerKey = `header-${i}`;
                        const isExpanded = expandedHeaders[headerKey];

                        // Collect all list items that follow this header
                        const headerListItems = [];
                        let j = i + 1;
                        while (j < lines.length &&
                               (lines[j].startsWith('LISTITEM:') ||
                                lines[j].startsWith('SUBITEM:') ||
                                lines[j].startsWith('NUMBERED:') ||
                                lines[j].startsWith('DIALOGUE:') ||
                                lines[j].startsWith('TERMINAL:') ||
                                lines[j].trim() === '')) {
                          if (lines[j].trim() !== '') {
                            const itemLine = lines[j];
                            if (itemLine.startsWith('LISTITEM:')) {
                              headerListItems.push({ type: 'main', text: itemLine.replace('LISTITEM:', '') });
                            } else if (itemLine.startsWith('SUBITEM:')) {
                              headerListItems.push({ type: 'sub', text: itemLine.replace('SUBITEM:', '') });
                            } else if (itemLine.startsWith('NUMBERED:')) {
                              headerListItems.push({ type: 'numbered', text: itemLine.replace('NUMBERED:', '') });
                            } else if (itemLine.startsWith('DIALOGUE:')) {
                              headerListItems.push({ type: 'dialogue', text: itemLine.replace('DIALOGUE:', '') });
                            } else if (itemLine.startsWith('TERMINAL:')) {
                              headerListItems.push({ type: 'terminal', text: itemLine.replace('TERMINAL:', '') });
                            }
                          }
                          j++;
                        }

                        elements.push(
                          <div key={headerKey} style={{ marginTop: '24px' }}>
                            <h3
                              onClick={() => toggleHeader(headerKey)}
                              style={{
                                marginBottom: isExpanded ? '16px' : '0',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#8b7355',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                userSelect: 'none'
                              }}
                            >
                              <span style={{
                                fontSize: '12px',
                                transition: 'transform 0.2s ease',
                                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                display: 'inline-block'
                              }}>
                                ▶
                              </span>
                              {title}
                            </h3>
                            {isExpanded && headerListItems.length > 0 && (
                              <div style={{ marginBottom: '24px', paddingLeft: '20px' }}>
                                {headerListItems.map((item, idx) => (
                                  item.type === 'dialogue' ? (
                                    <p key={idx} style={{
                                      marginBottom: '16px',
                                      fontStyle: 'italic',
                                      paddingLeft: '20px',
                                      borderLeft: '2px solid rgba(188,143,143,0.4)',
                                      color: '#5a4a3a'
                                    }}>
                                      {item.text}
                                    </p>
                                  ) : item.type === 'terminal' ? (
                                    <div key={idx} style={{
                                      marginBottom: '8px',
                                      fontFamily: 'monospace',
                                      fontSize: '14px',
                                      color: item.text.toLowerCase().includes('error') || item.text.toLowerCase().includes('not found') ? '#dc3545' : '#28a745',
                                      fontWeight: '600'
                                    }}>
                                      {item.text}
                                    </div>
                                  ) : (
                                    <div key={idx} style={{
                                      marginBottom: '8px',
                                      paddingLeft: item.type === 'sub' ? '28px' : item.type === 'numbered' ? '20px' : '0',
                                      display: 'flex',
                                      gap: '12px',
                                      alignItems: 'flex-start'
                                    }}>
                                      {item.type !== 'numbered' && (
                                        <span style={{ color: '#bc8f8f', flexShrink: 0 }}>–</span>
                                      )}
                                      <span>{item.text}</span>
                                    </div>
                                  )
                                ))}
                              </div>
                            )}
                          </div>
                        );
                        i = j;
                        continue;
                      }

                      // Handle SEPARATOR (horizontal rule)
                      if (line.startsWith('SEPARATOR:')) {
                        elements.push(
                          <hr key={i} style={{
                            marginTop: '48px',
                            marginBottom: '48px',
                            border: 'none',
                            borderTop: '1px solid rgba(205,180,155,0.4)',
                            width: '60%',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                          }} />
                        );
                        i++;
                        continue;
                      }

                      // Handle QUOTE (styled blockquote)
                      if (line.startsWith('QUOTE:')) {
                        const text = line.replace('QUOTE:', '');
                        elements.push(
                          <blockquote key={i} style={{
                            marginTop: '24px',
                            marginBottom: '24px',
                            paddingLeft: '24px',
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            borderLeft: '3px solid #bc8f8f',
                            background: 'rgba(205,180,155,0.1)',
                            fontStyle: 'italic',
                            color: '#5a4a3a',
                            fontSize: '16px',
                            lineHeight: '1.8'
                          }}>
                            "{text}"
                          </blockquote>
                        );
                        i++;
                        continue;
                      }
                      
                      // Handle LISTITEM and collect consecutive list items
                      if (line.startsWith('LISTITEM:') || line.startsWith('SUBITEM:') || line.startsWith('NUMBERED:')) {
                        const listItems = [];
                        while (i < lines.length && (lines[i].startsWith('LISTITEM:') || lines[i].startsWith('SUBITEM:') || lines[i].startsWith('NUMBERED:'))) {
                          const currentLine = lines[i];
                          if (currentLine.startsWith('LISTITEM:')) {
                            listItems.push({ type: 'main', text: currentLine.replace('LISTITEM:', '') });
                          } else if (currentLine.startsWith('SUBITEM:')) {
                            listItems.push({ type: 'sub', text: currentLine.replace('SUBITEM:', '') });
                          } else if (currentLine.startsWith('NUMBERED:')) {
                            listItems.push({ type: 'numbered', text: currentLine.replace('NUMBERED:', '') });
                          }
                          i++;
                        }
                        elements.push(
                          <div key={`list-${i}`} style={{ marginBottom: '24px' }}>
                            {listItems.map((item, idx) => (
                              <div key={idx} style={{
                                marginBottom: '8px',
                                paddingLeft: item.type === 'sub' ? '28px' : item.type === 'numbered' ? '20px' : '0',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start'
                              }}>
                                {item.type !== 'numbered' && (
                                  <span style={{ color: '#bc8f8f', flexShrink: 0 }}>–</span>
                                )}
                                <span>{item.text}</span>
                              </div>
                            ))}
                          </div>
                        );
                        continue;
                      }
                      
                      // Handle DIALOGUE
                      if (line.startsWith('DIALOGUE:')) {
                        const text = line.replace('DIALOGUE:', '');
                        elements.push(
                          <p key={i} style={{
                            marginBottom: '16px',
                            fontStyle: 'italic',
                            paddingLeft: '20px',
                            borderLeft: '2px solid rgba(188,143,143,0.4)',
                            color: '#5a4a3a'
                          }}>
                            {text}
                          </p>
                        );
                        i++;
                        continue;
                      }
                      
                      // Handle CODEBLOCK
                      if (line.startsWith('CODEBLOCK:')) {
                        const codeLines = [line.replace('CODEBLOCK:', '')];
                        i++;
                        while (i < lines.length && (lines[i].startsWith('├') || lines[i].startsWith('│') || lines[i].startsWith('└') || lines[i].trim().startsWith('├') || lines[i].trim().startsWith('│') || lines[i].trim().startsWith('└') || lines[i].trim() === '')) {
                          if (lines[i].trim() !== '') {
                            codeLines.push(lines[i]);
                          }
                          i++;
                        }
                        elements.push(
                          <pre key={`code-${i}`} style={{
                            marginBottom: '24px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            background: 'rgba(205,180,155,0.15)',
                            padding: '16px',
                            borderRadius: '4px',
                            whiteSpace: 'pre',
                            lineHeight: '1.6',
                            overflowX: 'auto'
                          }}>
                            {codeLines.join('\n')}
                          </pre>
                        );
                        continue;
                      }
                      
                      // Handle Me: and Claude: dialogue
                      if (line.startsWith('Me:') || line.startsWith('Claude:')) {
                        elements.push(
                          <p key={i} style={{
                            marginBottom: '16px',
                            fontStyle: 'italic',
                            paddingLeft: '20px',
                            borderLeft: '2px solid rgba(188,143,143,0.4)',
                            color: '#5a4a3a'
                          }}>
                            {line}
                          </p>
                        );
                        i++;
                        continue;
                      }
                      
                      // Handle TERMINAL (terminal-style output)
                      if (line.startsWith('TERMINAL:')) {
                        const text = line.replace('TERMINAL:', '');
                        const isError = text.toLowerCase().includes('error') || text.toLowerCase().includes('not found');
                        elements.push(
                          <code key={i} style={{
                            display: 'block',
                            marginBottom: '16px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            background: 'rgba(205,180,155,0.2)',
                            color: isError ? '#dc3545' : '#28a745',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontWeight: '600'
                          }}>
                            {text}
                          </code>
                        );
                        i++;
                        continue;
                      }

                      // Handle CLOSING (paragraph outside of collapsible sections)
                      if (line.startsWith('CLOSING:')) {
                        const text = line.replace('CLOSING:', '');
                        elements.push(
                          <p key={i} style={{
                            marginTop: '32px',
                            marginBottom: '24px',
                            fontSize: '17px',
                            lineHeight: '1.8',
                            color: '#5a4a3a',
                            fontStyle: 'italic'
                          }}>
                            {text}
                          </p>
                        );
                        i++;
                        continue;
                      }

                      // Handle Goal: lines
                      if (line.startsWith('Goal:')) {
                        elements.push(
                          <p key={i} style={{
                            marginBottom: '16px',
                            fontWeight: '600',
                            color: '#3d3028'
                          }}>
                            {line}
                          </p>
                        );
                        i++;
                        continue;
                      }
                      
                      // Regular paragraph
                      elements.push(
                        <p key={i} style={{
                          marginBottom: '24px'
                        }}>
                          {line}
                        </p>
                      );
                      i++;
                    }
                    
                    return elements;
                  })()}
                </div>
              </article>

              {/* Feedback Section */}
              <div style={{
                marginTop: '64px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(205,180,155,0.3)'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#3d3028',
                  fontFamily: '"Cormorant Garamond", serif',
                  marginBottom: '8px'
                }}>
                  What did you think?
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#8b7355',
                  marginBottom: '20px'
                }}>
                  I'd love to hear your thoughts on this post
                </p>
                <form
                  name="feedback"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleFeedback}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    maxWidth: '500px'
                  }}
                >
                  <input type="hidden" name="form-name" value="feedback" />
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="post-title" value={activeBlogPost.title} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name (optional)"
                    style={{
                      padding: '10px 14px',
                      border: '1px solid rgba(205,180,155,0.4)',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.6)',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      color: '#3d3028',
                      outline: 'none'
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Share your thoughts..."
                    required
                    rows={4}
                    style={{
                      padding: '10px 14px',
                      border: '1px solid rgba(205,180,155,0.4)',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.6)',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      color: '#3d3028',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '10px 20px',
                      background: 'transparent',
                      color: '#8b7355',
                      border: '1px solid rgba(205,180,155,0.4)',
                      borderRadius: '2px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#bc8f8f';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = '#bc8f8f';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#8b7355';
                      e.currentTarget.style.borderColor = 'rgba(205,180,155,0.4)';
                    }}
                  >
                    Send Feedback
                  </button>
                </form>
                {feedbackStatus && (
                  <p style={{ fontSize: '14px', color: '#8b7355', marginTop: '12px' }}>
                    {feedbackStatus}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Projects section */}
          {activeSection === 'projects' && (
            <section style={{
              animation: 'fadeIn 0.6s ease'
            }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '300',
                marginBottom: '40px',
                color: '#3d3028',
                fontFamily: '"Cormorant Garamond", serif'
              }}>
                Projects & Artifacts
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px'
              }}>
                <div
                  style={{
                    padding: '32px',
                    background: 'rgba(255,255,255,0.4)',
                    border: '1px solid rgba(205,180,155,0.3)',
                    borderRadius: '2px',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,48,40,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: '11px',
                    color: '#bc8f8f',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Artifact Type
                  </div>
                  
                  <h3 style={{
                    fontSize: '21px',
                    fontWeight: '400',
                    marginBottom: '12px',
                    color: '#3d3028',
                    fontFamily: '"Cormorant Garamond", serif'
                  }}>
                    Title
                  </h3>
                  
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#5a4a3a',
                    marginBottom: '16px'
                  }}>
                    Summary
                  </p>
                  
                  <div style={{
                    fontSize: '12px',
                    color: '#9d8b7a',
                    borderTop: '1px solid rgba(205,180,155,0.2)',
                    paddingTop: '12px',
                    marginTop: 'auto'
                  }}>
                    Date
                  </div>
                </div>
              </div>
              
              {/* Work in progress note */}
              <div style={{
                marginTop: '48px',
                padding: '24px',
                background: 'rgba(205,180,155,0.15)',
                borderLeft: '3px solid #bc8f8f',
                fontSize: '14px',
                color: '#8b7355',
                fontStyle: 'italic'
              }}>
                More artifacts in development. This collection grows as research continues.
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="footer-container" style={{
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(61,48,40,0.15)',
          fontSize: '13px',
          color: '#9d8b7a'
        }}>
          {/* Subscribe Section */}
          <div style={{
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(205,180,155,0.2)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '13px',
              color: '#9d8b7a',
              marginBottom: '12px'
            }}>
              Get notified of new posts
            </p>
            <form
              name="subscribe"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                maxWidth: '320px',
                margin: '0 auto',
                justifyContent: 'center'
              }}
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <input type="hidden" name="bot-field" />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                style={{
                  flex: '1',
                  minWidth: '180px',
                  padding: '8px 12px',
                  border: '1px solid rgba(205,180,155,0.4)',
                  borderRadius: '2px',
                  background: 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  color: '#3d3028',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: '#8b7355',
                  border: '1px solid rgba(205,180,155,0.4)',
                  borderRadius: '2px',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#bc8f8f';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#bc8f8f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#8b7355';
                  e.currentTarget.style.borderColor = 'rgba(205,180,155,0.4)';
                }}
              >
                Subscribe
              </button>
            </form>
            {subscribeStatus && (
              <p style={{ fontSize: '13px', color: '#8b7355', marginTop: '12px' }}>
                {subscribeStatus}
              </p>
            )}
          </div>

          {/* Footer Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              © 2026 — Built with intention
            </div>
            <div style={{
              display: 'flex',
              gap: '24px'
            }}>
              <a href="https://linkedin.com/in/julianna-roberts-1118m/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
                LinkedIn
              </a>
              <a href="https://github.com/jannar18" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
                GitHub
              </a>
              <a href="mailto:juliannaroberts18@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Crimson+Pro:wght@300;400;600&family=Noto+Serif+JP:wght@300;400;600&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        a:hover {
          color: #bc8f8f !important;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          
          .about-sidebar {
            order: -1;
          }
          
          .main-container {
            padding: 32px 20px !important;
          }
          
          .header-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
          }
          
          .nav-links {
            gap: 20px !important;
            flex-wrap: wrap;
          }
          
          .site-title {
            font-size: 36px !important;
          }
          
          .section-title {
            font-size: 28px !important;
          }
          
          .resume-header {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .experience-row {
            flex-direction: column !important;
            gap: 4px !important;
          }
          
          .footer-container {
            flex-direction: column !important;
            text-align: center;
            gap: 16px !important;
          }
          
          .profile-image {
            width: 140px !important;
            height: 140px !important;
          }
          
          p, span, li, div {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-container {
            padding: 24px 16px !important;
          }
          
          .site-title {
            font-size: 32px !important;
          }
          
          .nav-links {
            gap: 16px !important;
            font-size: 13px !important;
          }
          
          .blog-card {
            padding: 24px !important;
          }
          
          .profile-image {
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;