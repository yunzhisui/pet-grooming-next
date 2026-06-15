import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
  title: '宠沐轩 · 宠物洗护专门店',
  description: '专业宠物洗护、造型修剪、SPA 护理 - 用心呵护每一只毛孩子',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={notoSansSC.className}>{children}</body>
    </html>
  );
}
