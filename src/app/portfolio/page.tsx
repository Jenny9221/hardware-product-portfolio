import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ProjectVisual } from "@/components/project-visual";
import { orderedProjects } from "@/data/projects";

const strengths = [
  { no: "01", title: "发现真实问题", skill: "场景观察、用户访谈、竞品拆解、需求优先级判断" },
  { no: "02", title: "定义产品机会", skill: "机会点提炼、用户旅程、产品定位、概念方向收敛" },
  { no: "03", title: "形成可体验方案", skill: "硬件形态、软硬件协同、交互流程、快速原型" },
  { no: "04", title: "推动方案落地", skill: "设计表达、评审材料、跨角色协作、风险与范围控制" },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <section className="portfolio-hero reference-hero">
        <div className="reference-hero__inner shell">
          <div className="reference-folder" aria-label="向下滚动查看作品集">
            <div className="reference-folder__tab">JENNY HUANG / PORTFOLIO</div>
            <div className="reference-folder__back" aria-hidden="true" />
            <div className="reference-folder__cards" aria-hidden="true">
              <div className="reference-folder__card reference-folder__card--one" style={{ backgroundImage: `url(${orderedProjects[0].cardImage})` }} />
              <div className="reference-folder__card reference-folder__card--two" style={{ backgroundImage: `url(${orderedProjects[1].cardImage})` }} />
              <div className="reference-folder__card reference-folder__card--three" style={{ backgroundImage: `url(${orderedProjects[2].cardImage})` }} />
            </div>
            <div className="reference-folder__glass">
              <div className="reference-folder__shine" />
              <div className="reference-folder__content">
                <div className="reference-folder__badge">JH<br /><small>DESIGN<br />PORTFOLIO</small></div>
                <div className="reference-folder__mark">Jenny<br />Huang</div>
                <div className="reference-folder__caption">HARDWARE / ROBOTICS / AI</div>
                <Link className="reference-folder__open" href="/#strengths" aria-label="查看我的能力">↗</Link>
              </div>
            </div>
          </div>
          <div className="reference-hero__footer"><span>SCROLL TO DISCOVER</span><a href="#about" aria-label="向下浏览作品">↓</a></div>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="capability-intro" id="strengths">
          <div className="capability-kicker"><span>01</span> METHOD &amp; CAPABILITY</div>
          <h2>从问题发现，到方案落地。</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.no}>
              <div className="strength-no">{item.no}</div>
              <h3>{item.title}</h3>
              <div className="capability-tags">
                {item.skill.split("、").map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="shell section-heading">
          <div className="section-label"><span>02</span> SELECTED WORKS</div>
        </div>
        <div className="project-list shell">
          {orderedProjects.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectVisual index={project.index} accent={project.accent} label={project.title} image={project.cardImage ?? project.image} imagePosition={project.imagePosition} imageRatio={project.slug === "embodied-intelligence" ? "2064 / 1568" : "8315 / 3401"} />
              <div className="project-card__content">
                <div className="project-index">CASE / {project.index}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-open">VIEW CASE <b>↗</b></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="site-footer shell" id="contact">
        <div className="section-label"><span>03</span> LET’S CONNECT</div>
        <div className="footer-row">
          <p>如果你正在寻找关于智能硬件、机器人产品或 AI 交互的下一种可能，欢迎联系我。</p>
          <a className="contact-button" href="mailto:hjn021229@126.com"><span>Email : hjn021229@126.com</span><b>↗</b></a>
        </div>
        <div className="footer-base"><span>© 2026 · JENNY HUANG</span><Link href="/">VISUAL INTRO ↑</Link></div>
      </footer>
    </main>
  );
}
