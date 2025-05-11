//使用@符号导入其他js文件中的对象，和python类似

import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
