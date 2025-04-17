import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.webp";
import sideProjectsImg from "../../Assets/sideProjectsImg.gif";
import debuggingImg from "../../Assets/debugging.png";
import consistencyImg from "../../Assets/consistencyImg.jpg";
import growthImg from "../../Assets/growthImg.jpg"

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
        id: 1,
        title: "How I Fell in Love with Programming",
      excerpt: "From writing my first 'Hello, World!' to building full-stack apps...",
      image: laptopImg, // Image added here
      content: (
        <div>
          <Row>
            <Col md={8}>
              <section style={{ lineHeight: "1.8" }}>
                <p>
                  From writing my first "Hello, World!" to building full-stack apps, my journey in programming has been a rollercoaster ride. Here's how it all started and why I'm still obsessed with code today.
                </p>

                <h4 className="purple pt-4">The Beginning</h4>
                <p>
                  Back in college, I was introduced to C++ as part of my BSc CSIT program. At first, it felt like learning a new language — because, well, it was! But there was something magical about writing a few lines of logic and seeing it actually <em>do</em> something.
                </p>

                <h4 className="purple pt-4">The Struggles</h4>
                <p>
                  There were days I questioned my path — bugs that made no sense, concepts I couldn't grasp, and late nights staring at code that just wouldn't work. But every challenge made me a better problem solver and sparked curiosity instead of frustration.
                </p>

                <h4 className="purple pt-4">What Keeps Me Going</h4>
                <p>
                  Now, with experience in Laravel, React, and Node.js, I've started building real-world solutions. Each project is a puzzle I enjoy solving. My current interest lies in AI and blockchain, and I'm diving deeper every day.
                </p>

                <h4 className="purple pt-4">Conclusion</h4>
                <p>
                  Programming changed the way I see the world. It's not just about writing code, it's about creating impact. If you're just starting, keep going — the fun really begins when you stop worrying about errors and start learning from them.
                </p>
              </section>
            </Col>
            <Col md={4}>
              <img 
                src={laptopImg} 
                alt="Programming journey" 
                className="img-fluid" 
                style={{ borderRadius: "10px", marginTop: "20px" }}
              />
            </Col>
          </Row>
        </div>
      ),
      date: "Febrary 16, 2025"
    },
    {
      id: 2,
      title: "Why Every Programmer Should Build Side Projects",
      excerpt: "In the world of programming, the best way to grow is not just by learning — but by building.",
      image: sideProjectsImg,
      content: (
        <div>
          <Row>
            <Col md={8}>
              <section style={{ lineHeight: "1.8" }}>
                <p>
                  In the world of programming, the best way to grow is not just by learning — but by building. While formal education and job experience teach the fundamentals, it's often side projects that shape your creativity, independence, and real-world problem-solving skills.
                </p>

                <h4 className="purple pt-4">🔧 Learning by Doing</h4>
                <p>
                  There's a big difference between knowing how to write a function and actually building an app that solves a problem. Side projects bridge that gap. Whether you're experimenting with a new framework, building a tool for your own use, or cloning your favorite app — every line of code adds value.
                </p>

                <h4 className="purple pt-4">🚀 Freedom to Experiment</h4>
                <p>
                  At your job, you might be limited by tools, tech stacks, or legacy code. With a side project, you call the shots. You can try out bleeding-edge technologies like Next.js, LangChain, or Supabase without permission — and discover what works best for you.
                </p>

                <h4 className="purple pt-4">💼 Boost Your Resume (and Confidence)</h4>
                <p>
                  Side projects are living proof of your skills. When someone asks, "What have you built?" — you don't just talk; you show. It's also one of the strongest signals to employers or clients that you're self-motivated and passionate about tech.
                </p>

                <h4 className="purple pt-4">🧠 Fail Fast, Learn Fast</h4>
                <p>
                  You'll make mistakes — lots of them. And that's the point. Deploying something to production, handling real-world errors, or debugging something that breaks at midnight teaches you more than 10 tutorials combined.
                </p>

                <h4 className="purple pt-4">🤝 Build a Personal Brand</h4>
                <p>
                  A polished GitHub repo, a blog post about your app, or a demo link you share online can spark connections and open doors. Some developers have turned their side projects into full-time startups, freelance gigs, or speaking opportunities.
                </p>

                <h4 className="purple pt-4">🧘 It's Fun (and Addictive)</h4>
                <p>
                  Unlike assigned work, side projects come from your heart. You're building something you care about. That joy of shipping something on your own terms is a rush like no other.
                </p>

                <blockquote className="blockquote mt-4">
                  <p className="mb-0">"If you're waiting for the perfect time or idea to start — don't. Just build. The lessons are in the doing."</p>
                </blockquote>

                <p className="mt-4">
                  Whether it's a portfolio site, a game, a SaaS tool, or even a to-do app that works the way you want it to — make it. Your future self (and career) will thank you.
                </p>
              </section>
            </Col>
            <Col md={4}>
              <img 
                src={sideProjectsImg} 
                alt="Side projects" 
                className="img-fluid" 
                style={{ borderRadius: "10px", marginTop: "20px" }}
              />
            </Col>
          </Row>
        </div>
      ),
      date: "June 10, 2025"
    },
    {
      id: 3,
      title: "How Debugging Made Me a Better Developer",
      excerpt: "Debugging is where real growth happens. It's the art of thinking clearly and truly understanding your code.",
      image: debuggingImg,
      content: (
        <div>
          <Row>
            <Col md={8}>
              <section style={{ lineHeight: "1.8" }}>
                <p>
                  At first, I thought debugging was a chore — something that got in the way of actual coding. But over time, I realized it's not just about fixing bugs. Debugging is where real growth happens. It's the art of thinking clearly, asking the right questions, and truly understanding your code.
                </p>

                <h4 className="purple pt-4">🧩 Understanding the Problem</h4>
                <p>
                  Before debugging taught me how to fix issues, it taught me how to spot them. Learning to read stack traces, follow error logs, and isolate causes changed how I write code from the start. Now, I think ahead — anticipating issues before they appear.
                </p>

                <h4 className="purple pt-4">🧠 Thinking Like a Detective</h4>
                <p>
                  Debugging sharpened my logical thinking. Every error became a mystery to solve:
                </p>
                <ul>
                  <li>Why did it break?</li>
                  <li>When did it start?</li>
                  <li>What changed?</li>
                </ul>
                <p>
                  This mindset transformed how I approached challenges — not just in code, but in real life too.
                </p>

                <h4 className="purple pt-4">🛠 Tools Don't Matter (Much)</h4>
                <p>
                  At first, I thought I needed fancy tools — debuggers, profilers, etc. But I soon learned that the best debugger is a <strong>curious brain</strong>. Console logs, breakpoints, and even pen-and-paper diagrams helped me find issues more effectively than any tool.
                </p>

                <h4 className="purple pt-4">💡 Bugs Reveal Weaknesses in Logic</h4>
                <p>
                  Every bug is a lesson. Off-by-one errors taught me attention to detail. Async issues taught me to respect JavaScript's event loop. Undefined variables taught me to slow down and check my assumptions. Over time, I began to see bugs not as setbacks, but opportunities to grow.
                </p>

                <h4 className="purple pt-4">🧘 Patience is Power</h4>
                <p>
                  Debugging builds patience like nothing else. That one semicolon, that missing bracket — they'll test you. But with time, you develop a calm, focused approach that benefits every aspect of your career.
                </p>

                <h4 className="purple pt-4">🚀 A Sign You're Doing Real Work</h4>
                <p>
                  The more complex the project, the more likely it is you'll run into bugs. And that's okay. It means you're pushing boundaries, working with real-world logic, and creating something meaningful.
                </p>

                <blockquote className="blockquote mt-4">
                  <p className="mb-0">"The best developers aren't the ones who write perfect code — they're the ones who know how to fix it when it breaks."</p>
                </blockquote>

                <p className="mt-4">
                  So next time you hit an error, take a deep breath. You're not failing — you're leveling up.
                </p>
              </section>
            </Col>
            <Col md={4}>
              <img 
                src={debuggingImg} 
                alt="Debugging journey" 
                className="img-fluid" 
                style={{ borderRadius: "10px", marginTop: "20px" }}
              />
            </Col>
          </Row>
        </div>
      ),
      date: "July 5, 2025"
    },
    
      {
        id: 4,
        title: "The Power of Consistency in Programming",
        excerpt: "When you first start programming, you often chase speed. But over time, one quiet truth becomes clear...",
        image: consistencyImg,
        content: (
          <div>
            <Row>
              <Col md={8}>
                <section style={{ lineHeight: "1.8" }}>
                  <p>
                    When you first start programming, you often chase speed — learning new frameworks, building fancy projects, and solving problems as fast as possible. But over time, one quiet truth becomes clear: <strong>Consistency beats intensity.</strong>
                  </p>
  
                  <h4 className="purple pt-4">📈 Tiny Steps = Big Growth</h4>
                  <p>
                    You don't need to code 10 hours a day to improve. You just need to show up — every day. Writing code for even 30 minutes a day compounds over time. One day you're learning syntax, the next you're building your own product.
                  </p>
  
                  <h4 className="purple pt-4">🔁 Practice Builds Intuition</h4>
                  <p>
                    The more consistent you are, the more coding becomes second nature. You stop Googling the same syntax. You begin to "feel" what works and what doesn't. That level of comfort only comes from regular repetition, not occasional marathons.
                  </p>
  
                  <h4 className="purple pt-4">📅 Momentum Over Motivation</h4>
                  <p>
                    Motivation comes and goes. Life gets busy. But consistency builds habits — and habits don't rely on motivation. Make coding a part of your daily routine, like brushing your teeth. It'll feel weird not to do it.
                  </p>
  
                  <h4 className="purple pt-4">🧠 Mental Clarity and Problem Solving</h4>
                  <p>
                    Have you noticed how your mind solves problems even when you're away from the keyboard? That's the magic of consistency. When your brain is used to working with code daily, it keeps processing in the background.
                  </p>
  
                  <h4 className="purple pt-4">💼 Career Wins Come From Consistency</h4>
                  <p>
                    From contributing to open source to finishing your portfolio, consistent effort is what gets you there. Employers value developers who are reliable and steady — not just brilliant for a week and gone the next.
                  </p>
  
                  <blockquote className="blockquote mt-4">
                    <p className="mb-0">"You don't need to be extreme, just consistent."</p>
                  </blockquote>
  
                  <p className="mt-4">
                    Whether you're learning your first language, building a startup, or trying to get better at debugging — keep going. Even on the days when you feel stuck. That's how real progress happens.
                  </p>
                </section>
              </Col>
              <Col md={4}>
                <img 
                  src={consistencyImg} 
                  alt="Consistency in programming" 
                  className="img-fluid" 
                  style={{ borderRadius: "10px", marginTop: "20px" }}
                />
              </Col>
            </Row>
          </div>
        ),
        date: "August 15, 2025"
      },
      {
        id: 5,
        title: "You Don't Need to Know Everything to Be a Great Developer",
        excerpt: "The tech world moves fast. New frameworks pop up every week, but here's a truth more developers need to hear...",
        image: growthImg,
        content: (
          <div>
            <Row>
              <Col md={8}>
                <section style={{ lineHeight: "1.8" }}>
                  <p>
                    The tech world moves fast. New frameworks pop up every week, trends shift overnight, and it's easy to feel like you're constantly behind. But here's a truth more developers need to hear:
                  </p>
  
                  <blockquote className="blockquote">
                    <p className="mb-0"><strong>You don't need to know everything. You just need to keep growing.</strong></p>
                  </blockquote>
  
                  <h4 className="purple pt-4">🧘 The Myth of "Knowing It All"</h4>
                  <p>
                    So many beginners get stuck thinking:
                  </p>
                  <ul>
                    <li>"I can't apply for jobs until I master every tool."</li>
                    <li>"I'm not good enough because I don't know [insert buzzword here]."</li>
                    <li>"Real developers know it all."</li>
                  </ul>
                  <p>
                    Wrong. The best developers aren't the ones who know everything — they're the ones who <strong>keep learning, ask great questions, and know how to figure things out.</strong>
                  </p>
  
                  <h4 className="purple pt-4">🧰 Tools Will Change — Fundamentals Stay</h4>
                  <p>
                    React today. Svelte tomorrow. Rust, Go, Astro, HTMX — the ecosystem evolves. But the <strong>fundamentals of problem-solving, clean code, and clear communication</strong> will always matter more than the hottest tool.
                  </p>
                  <p>
                    Focus on:
                  </p>
                  <ul>
                    <li>Writing readable, maintainable code</li>
                    <li>Understanding core programming concepts (like data structures, algorithms, and architecture)</li>
                    <li>Becoming great at learning itself</li>
                  </ul>
  
                  <h4 className="purple pt-4">🔎 Google Is Part of the Process</h4>
                  <p>
                    Even senior engineers Google stuff daily. Not because they're weak — but because they're smart. Real developers <strong>don't memorize everything</strong>; they know how to find and apply knowledge quickly.
                  </p>
  
                  <h4 className="purple pt-4">💬 Asking for Help Is a Strength</h4>
                  <p>
                    You grow faster when you're willing to say:
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-0">"I don't know this yet, but I'm working on it."</p>
                  </blockquote>
                  <p>
                    Asking for help, pair programming, and reading others' code all make you a stronger dev. Don't let ego block your progress.
                  </p>
  
                  <h4 className="purple pt-4">🚀 Focus on Progress, Not Perfection</h4>
                  <p>
                    Measure yourself by how much you've learned — not by what you haven't. Last month you didn't know how to build a form. Today, you're validating inputs and hitting APIs. That's real progress.
                  </p>
  
                  <blockquote className="blockquote mt-4">
                    <p className="mb-0">"You don't have to be perfect. You just have to be consistent, curious, and willing to grow."</p>
                  </blockquote>
  
                  <p className="mt-4">
                    So next time you feel overwhelmed, remember: even the best developers started where you are now. Just keep building. Keep learning. That's enough.
                  </p>
                </section>
              </Col>
              <Col md={4}>
                <img 
                  src={growthImg} 
                  alt="Growth mindset in programming" 
                  className="img-fluid" 
                  style={{ borderRadius: "10px", marginTop: "20px" }}
                />
              </Col>
            </Row>
          </div>
        ),
        date: "September 1, 2025"
      }
    
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.1em", padding: "20px 0", textAlign: "center" }}>
         <strong className="purple">Blogs</strong>
        </h1>
        
        <Row style={{ justifyContent: "center" }}>
          {posts.map((post) => (
            <Col key={post.id} md={5} className="blog-post-card" style={{ margin: "10px" }}>
              <Card className="blog-card-view" style={{ minHeight: "250px" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.5em" }}>
                    {post.title}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {post.excerpt}
                  </Card.Text>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleReadMore(post)}
                    style={{ marginTop: "10px" }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer style={{ background: "transparent", borderTop: "none" }}>
                  <small className="text-muted">{post.date}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for full post content */}
        <Modal 
          show={showModal} 
          onHide={handleCloseModal} 
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedPost?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "20px" }}>
            {selectedPost?.content}
          </Modal.Body>
          <Modal.Footer>
            <small className="text-muted" style={{ marginRight: "auto" }}>
              Published on: {selectedPost?.date}
            </small>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
}

export default Blog;