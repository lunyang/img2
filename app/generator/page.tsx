import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  Gift,
  LockKeyhole,
  Maximize2,
  Minus,
  Plus,
  Save,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

const thumbs = [
  { src: "/assets/thumb-satellite.png", label: "卫星与地球", active: true },
  { src: "/assets/thumb-molecule.png", label: "分子结构示意" },
  { src: "/assets/thumb-microscope.png", label: "实验器械" },
  { src: "/assets/thumb-lab.png", label: "空间实验室" },
];

const history = [
  { src: "/assets/thumb-satellite.png", title: "卫星与地球", time: "今天 14:32 · 4张" },
  { src: "/assets/thumb-molecule.png", title: "分子结构示意", time: "今天 13:15 · 4张" },
  { src: "/assets/thumb-microscope.png", title: "实验器械", time: "今天 11:48 · 4张" },
  { src: "/assets/example-leaf.png", title: "细胞显微图", time: "昨天 16:20 · 4张" },
  { src: "/assets/example-brain.png", title: "材料微观结构", time: "昨天 10:05 · 4张" },
];

export default function GeneratorPage() {
  return (
    <div className="app-frame">
      <SiteHeader active="generator" />

      <main className="generator-main">
        <section className="settings-panel" aria-labelledby="settings-title">
          <div className="panel-title-row">
            <h1 id="settings-title">生成设置</h1>
          </div>

          <label className="field-label" htmlFor="prompt">
            提示词
            <button className="subtle-button" type="button">
              清空
            </button>
          </label>
          <div className="textarea-shell">
            <textarea
              id="prompt"
              defaultValue="一颗高精度科学卫星在地球轨道上运行，太阳光照亮卫星与地球，地球表面可见云层与城市灯光，真实、高清、摄影级，适用于科研报告与论文配图。"
              maxLength={1000}
            />
            <span>60 / 1000</span>
          </div>

          <div className="split-controls">
            <div className="control-group">
              <h2>尺寸比例</h2>
              <div className="ratio-grid">
                {["16:9", "4:3", "1:1", "3:4", "9:16"].map((ratio) => (
                  <button
                    className={ratio === "16:9" ? "ratio-button is-selected" : "ratio-button"}
                    key={ratio}
                    type="button"
                  >
                    <span aria-hidden="true" />
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <h2>分辨率</h2>
              <button className="select-button" type="button">
                高（2048x1152）
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="control-group">
              <h2>生成数量</h2>
              <div className="stepper">
                <button type="button" aria-label="减少数量">
                  <Minus size={16} />
                </button>
                <span>4</span>
                <button type="button" aria-label="增加数量">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <button className="generate-button" type="button">
            <SlidersHorizontal size={20} />
            开始生成
          </button>
          <p className="no-card-note">
            <CheckCircle2 size={15} />
            免费使用，无需信用卡
          </p>
        </section>

        <section className="results-column" aria-labelledby="results-title">
          <div className="results-panel">
            <div className="panel-title-row">
              <h1 id="results-title">生成结果</h1>
              <span className="done-label">
                <CheckCircle2 size={15} />
                生成完成 · 4 张图像
              </span>
              <span className="time-label">今天 14:32</span>
              <button className="dark-button" type="button">
                <Download size={17} />
                下载全部
              </button>
            </div>

            <div className="result-stage">
              <Image
                src="/assets/satellite-earth.png"
                alt="卫星与地球生成结果"
                fill
                sizes="(max-width: 1100px) 100vw, 62vw"
                priority
              />
              <div className="floating-tools" aria-label="图像操作">
                <button type="button">
                  <Maximize2 size={18} />
                  放大
                </button>
                <button type="button">
                  <Eye size={18} />
                  高清
                </button>
                <button type="button">
                  <Download size={18} />
                  下载
                </button>
                <button type="button">
                  <Save size={18} />
                  保存
                </button>
              </div>
            </div>

            <div className="thumb-row">
              {thumbs.map((thumb) => (
                <button
                  className={thumb.active ? "thumb-card is-selected" : "thumb-card"}
                  key={thumb.src}
                  type="button"
                >
                  <Image src={thumb.src} alt={thumb.label} fill sizes="18vw" />
                  {thumb.active && <CheckCircle2 size={22} />}
                </button>
              ))}
            </div>
          </div>

          <div className="history-panel">
            <div className="history-tabs">
              <button className="is-active" type="button">
                生成历史
              </button>
              <button type="button">快捷模板</button>
            </div>
            <div className="history-list">
              {history.map((item) => (
                <article className="history-card" key={item.title}>
                  <Image src={item.src} alt={item.title} width={48} height={48} />
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.time}</p>
                  </div>
                </article>
              ))}
              <button className="history-next" aria-label="查看更多历史" type="button">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="generator-footer">
        <div>
          <ShieldCheck size={26} />
          <span>
            <strong>科研级图像输出</strong>
            适用于论文、报告与专业出版
          </span>
        </div>
        <div>
          <Eye size={26} />
          <span>
            <strong>高分辨率</strong>
            最高支持 4K 输出
          </span>
        </div>
        <div>
          <Gift size={26} />
          <span>
            <strong>免费生成</strong>
            完全免费，无使用限制
          </span>
        </div>
        <div>
          <LockKeyhole size={26} />
          <span>
            <strong>隐私安全</strong>
            不保存您的生成内容
          </span>
        </div>
        <nav aria-label="页脚链接">
          <Link href="#">使用条款</Link>
          <Link href="#">隐私政策</Link>
          <Link href="#">联系我们</Link>
        </nav>
        <p className="footer-disclaimer">
          <AlertTriangle size={18} />
          免责声明：生成内容仅供科研构思、示意与参考，严禁未经核验、标注或实质性修改后直接用于论文发表、学位论文、报告投稿或任何学术出版。
        </p>
      </footer>
    </div>
  );
}
