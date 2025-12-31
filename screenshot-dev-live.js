const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

// 定义要截图的路由
const routes = [
  '/',
  '/about',
  '/blog',
  '/projects',
  // 添加博客文章页面
  '/blog/getting-started-with-nextjs-13',
  '/blog/the-benefits-of-typescript',
  '/blog/building-responsive-uis-with-tailwind-css'
];

// 开发服务器地址
const baseUrl = 'http://localhost:3000';

async function takeScreenshots() {
  // 创建screenshots目录（如果不存在）
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  try {
    console.log('🔄 正在连接到Chrome浏览器...');
    
    // 启动Chrome浏览器，使用非无头模式确保渲染效果
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--window-size=1920,1080',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--allow-running-insecure-content'
      ],
      defaultViewport: null
    });

    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    });

    // 对每个路由进行截图
    for (const route of routes) {
      const url = `${baseUrl}${route}`;
      console.log(`\n📸 正在截取 ${url}...`);
      
      try {
        // 访问页面，等待页面完全加载
        await page.goto(url, {
          waitUntil: ['networkidle0', 'domcontentloaded', 'load'],
          timeout: 60000
        });
        
        // 等待页面渲染完成
        await page.waitForSelector('body', { timeout: 15000 });
        
        // 等待额外时间确保所有动态内容和样式加载完成
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // 确保页面滚动到顶部
        await page.evaluate(() => {
          window.scrollTo(0, 0);
        });
        
        // 等待滚动完成
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 生成截图文件名
        const filename = route === '/' ? 'index-dev-live' : `${route.substring(1).replace(/\//g, '-')}-dev-live`;
        const screenshotPath = path.join(screenshotsDir, `${filename}.png`);
        
        // 截图，使用fullPage选项
        await page.screenshot({
          path: screenshotPath,
          fullPage: true,
          type: 'png',
          omitBackground: false
        });
        
        console.log(`✅ ${route} 截图成功，保存为 ${screenshotPath}`);
      } catch (error) {
        console.error(`❌ ${route} 截图失败: ${error.message}`);
      }
    }

    await browser.close();
    console.log('\n🎉 所有页面截图完成！');
    console.log('📁 截图已保存到 screenshots 目录');
  } catch (error) {
    console.error('❌ 截图过程中发生错误:', error);
    process.exit(1);
  }
}

takeScreenshots();
