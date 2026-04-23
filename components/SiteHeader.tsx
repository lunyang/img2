import Link from "next/link";
import { CircleCheck, Moon } from "lucide-react";

type SiteHeaderProps = {
  active: "home" | "generator";
};

const navItems = [
  { href: "/", label: "首页", key: "home" },
  { href: "/generator", label: "生成图像", key: "generator" },
  { href: "#explore", label: "探索", key: "explore" },
  { href: "#docs", label: "文档", key: "docs" },
  { href: "#about", label: "关于我们", key: "about" },
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Image-2 AI 首页">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span>Image-2 AI</span>
      </Link>

      <nav className="main-nav" aria-label="主导航">
        {navItems.map((item) => (
          <Link
            className={active === item.key ? "nav-link is-active" : "nav-link"}
            href={item.href}
            key={item.key}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <span className="free-pill">
          <CircleCheck size={14} strokeWidth={2.4} />
          完全免费使用
        </span>
        <button className="icon-button" aria-label="切换深色模式">
          <Moon size={18} />
        </button>
        <Link className="primary-button compact" href="/generator">
          开始生成
        </Link>
      </div>
    </header>
  );
}
