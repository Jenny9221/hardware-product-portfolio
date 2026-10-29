export type Project = {
  slug: string;
  image?: string;
  cardImage?: string;
  imagePosition?: string;
  gallery: string[];
  index: string;
  title: string;
  shortTitle: string;
  tags: string[];
  summary: string;
  year: string;
  role: string;
  challenge: string;
  approach: { label: string; title: string; text: string; image: string }[];
  outputs: { title: string; image: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "embodied-intelligence", image: "/images/p01-cover.jpg", cardImage: "/images/p01-cover.jpg", gallery: [], index: "01",
    title: "华为具身智能\n前瞻概念设计与体验研究", shortTitle: "具身智能",
    tags: ["智能硬件", "前瞻产品定义", "校企科研"],
    summary: "在运动能力之外，探索家用机器人的交互与形态表达，在品牌、硬件、用户多重约束下迭代可评审的硬件概念方案。",
    year: "2026.03 — 2026.11", role: "团队核心成员",
    challenge: "行业聚焦机器人运动性能，产品形态与交互定义缺失，甲方需求持续迭代。",
    approach: [
      { label: "Research", title: "从技术竞赛回到家庭场景", text: "梳理家用场景、用户期待与现有机器人体验，寻找运动性能之外的产品机会。", image: "/images/p01-process-01.jpg" },
      { label: "Define", title: "建立多约束判断框架", text: "把用户体验、品牌基因、硬件边界与工程现实放进同一套方案评估逻辑。", image: "/images/p01-process-02.png" },
      { label: "Deliver", title: "让概念进入可评审状态", text: "通过形态与交互方向迭代，逐步收敛为可讨论、可对接研发的概念方案。", image: "/images/p01-process-03.jpg" },
    ],
    outputs: [
      { title: "前瞻机会地图", image: "/images/p01-output-01.png" }, { title: "产品形态方向", image: "/images/p01-output-02.jpg" },
      { title: "交互概念方案", image: "/images/p01-output-03.jpg" }, { title: "阶段评审材料", image: "/images/p01-output-04.jpg" },
    ], accent: "blue",
  },
  {
    slug: "smart-yoga-mat", image: "/images/projects/p02-smart-yoga-mat/portfolio_7-11_01.jpg", cardImage: "/images/projects/p02-smart-yoga-mat/p03-cover.png",
    gallery: ["/images/projects/p02-smart-yoga-mat/portfolio_7-11_01.jpg", "/images/projects/p02-smart-yoga-mat/portfolio_7-11_02.jpg", "/images/projects/p02-smart-yoga-mat/portfolio_7-11_03.jpg", "/images/projects/p02-smart-yoga-mat/portfolio_7-11_04.jpg", "/images/projects/p02-smart-yoga-mat/portfolio_7-11_05.jpg"],
    index: "02", title: "瑜悦智境\n智能运动辅助瑜伽垫", shortTitle: "瑜悦智境",
    tags: ["智能硬件", "Arduino 原型", "软硬件交互"],
    summary: "从居家瑜伽训练中的指导与反馈需求出发，\n探索传感器、灯光反馈、Arduino 原型与 APP 服务如何协同。",
    year: "2024.03", role: "产品设计",
    challenge: "居家练习缺少及时、清晰的动作反馈。\n如何把训练指导转化为易理解的硬件反馈，\n并让实体瑜伽垫与数字服务形成连贯体验，是项目关注的问题。",
    approach: [], outputs: [], accent: "violet",
  },
  {
    slug: "smart-kitchen", image: "/images/projects/p03-smart-kitchen/portfolio_1-6_03.jpg", cardImage: "/images/projects/p03-smart-kitchen/p02-cover.jpg",
    gallery: ["/images/projects/p03-smart-kitchen/portfolio_1-6_03.jpg", "/images/projects/p03-smart-kitchen/portfolio_1-6_04.jpg", "/images/projects/p03-smart-kitchen/portfolio_1-6_05.jpg", "/images/projects/p03-smart-kitchen/portfolio_1-6_06.jpg"],
    index: "03", title: "净界厨联\n开放式厨房烹饪智能助手", shortTitle: "净界厨联",
    tags: ["智能家居", "系统产品设计", "硬件方案"],
    summary: "针对开放式厨房的空气管理需求，规划新风、环境感知与安全提醒之间的产品系统关系。",
    year: "2024.05", role: "产品设计",
    challenge: "开放式厨房的空气流通和安全需求彼此关联。\n探索如何通过多设备协同构成完整的厨房体验。",
    approach: [], outputs: [], accent: "amber",
  },
  {
    slug: "remembrance-camera", image: "/images/projects/p04-remembrance-camera/portfolio_12-16_01.jpg", cardImage: "/images/projects/p04-remembrance-camera/p04-cover.jpg",
    gallery: ["/images/projects/p04-remembrance-camera/portfolio_12-16_01.jpg", "/images/projects/p04-remembrance-camera/portfolio_12-16_02.jpg", "/images/projects/p04-remembrance-camera/portfolio_12-16_03.jpg", "/images/projects/p04-remembrance-camera/portfolio_12-16_04.jpg", "/images/projects/p04-remembrance-camera/portfolio_12-16_05.jpg"],
    index: "04", title: "记忆相机：AI 回忆辅助设备", shortTitle: "记忆相机",
    tags: ["AI 智能硬件", "适老化交互", "情感化设计"],
    summary: "围绕家庭回忆体验，探索老照片、动态影像与实体设备交互的结合，并关注老年用户的操作负担和内容可信度。",
    year: "2024.01", role: "产品设计",
    challenge: "如何让熟悉的家庭照片成为自然的回忆媒介，\n同时避免复杂操作、AI 生成内容误导和隐私风险，是项目需要面对的问题。",
    approach: [], outputs: [], accent: "violet",
  },
];

const projectOrder = ["embodied-intelligence", "smart-yoga-mat", "smart-kitchen", "remembrance-camera"];
export const orderedProjects = projectOrder.map((slug) => projects.find((project) => project.slug === slug)!);

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
