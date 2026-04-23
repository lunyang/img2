import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  CheckCircle2,
  Clock3,
  Infinity,
  LockKeyhole,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

const examples = [
  { src: "/assets/example-molecule.png", alt: "分子结构科学图像" },
  { src: "/assets/example-leaf.png", alt: "植物细胞显微图像" },
  { src: "/assets/example-city.png", alt: "未来城市飞行器图像" },
  { src: "/assets/example-brain.png", alt: "神经网络大脑图像" },
  { src: "/assets/example-observatory.png", alt: "天文台星空图像" },
];

const features = [
  {
    icon: Atom,
    title: "科研级图像生成",
    text: "支持复杂概念可视化，满足科学、技术开发等专业需求。",
  },
  {
    icon: ScanLine,
    title: "超高分辨率",
    text: "生成高分辨率图像，细节丰富，适用于论文、报告和展示。",
  },
  {
    icon: ShieldCheck,
    title: "完全免费",
    text: "所有功能免费开放，无限生成，助力科技创新与知识传播。",
  },
  {
    icon: LockKeyhole,
    title: "隐私安全",
    text: "不存储生成记录，保障您的数据隐私与安全。",
  },
];

export default function HomePage() {
  return (
    <div className="app-frame">
      <SiteHeader active="home" />

      <main className="home-main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="label-pill">IMAGE-2 AI</span>
            <h1 id="hero-title">
              先进的 AI 图像生成模型
              <span>由 Image-2 驱动</span>
            </h1>
            <p>
              Image-2 是一个强大的文本到图像生成模型，能够创建高度逼真、
              细节丰富的图像，助力科学研究与技术创新。
            </p>

            <div className="hero-cta-row">
              <Link className="primary-button" href="/generator">
                开始生成图像
                <ArrowRight size={18} />
              </Link>
              <span className="inline-promise">
                <CheckCircle2 size={16} />
                完全免费使用
              </span>
            </div>

            <div className="quick-stats" aria-label="产品能力">
              <span>
                <Sparkles size={16} />
                高质量输出
              </span>
              <span>
                <Zap size={16} />
                快速生成
              </span>
              <span>
                <Infinity size={16} />
                无限制使用
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="生成示例预览">
            <div className="ghost-panel panel-left">
              <Image
                src="/assets/thumb-molecule.png"
                alt=""
                fill
                sizes="180px"
                priority
              />
            </div>
            <div className="ghost-panel panel-right">
              <Image
                src="/assets/thumb-microscope.png"
                alt=""
                fill
                sizes="180px"
                priority
              />
            </div>
            <div className="hero-image-shell">
              <Image
                src="/assets/satellite-earth.png"
                alt="卫星在地球轨道运行的生成图像"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                priority
              />
              <div className="prompt-card">
                <span>/ 生成一个在太空中运行的卫星，地球为背景，高清，超真实</span>
                <button aria-label="提交提示词">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip" aria-label="核心特性">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-item" key={feature.title}>
                <Icon size={38} aria-hidden="true" />
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.text}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="examples-section" id="explore">
          <div className="section-heading">
            <div>
              <h2>探索示例</h2>
              <p>使用 Image-2 AI 生成的高质量图像</p>
            </div>
            <Link href="/generator">
              查看全部示例
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="example-grid">
            {examples.map((example) => (
              <article className="example-card" key={example.src}>
                <Image
                  src={example.src}
                  alt={example.alt}
                  fill
                  sizes="(max-width: 760px) 50vw, 250px"
                />
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
