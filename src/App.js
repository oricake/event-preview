import React, { useState } from 'react';
import './App.css';

function App() {
 const [hoveredItem, setHoveredItem] = useState(null);
 
 const menuItems = [
   { id: 'preview-nymph', text: '용광로의 부활', bgImage: '/images/event-nymph.jpg', link: 'https://gall.dcinside.com/m/mibj/5212701' },
   { id: 'preview-roguelike-sarkaz', text: '통합전략#5 살카즈의 영원한 불가사의', bgImage: '/images/event-roguelike-sarkaz.png' },
   { id: 'preview-concert-2024-ii', text: 'Ambience Synesthesia 2024 II', bgImage: '/images/event-concert-2024-ii.jpg' },
   { id: 'preview-dungeon-meshi', text: '테라밥', bgImage: '/images/event-dungeon-meshi.jpg', link: 'https://gall.dcinside.com/m/mibj/5436645' },
   { id: 'preview-moon', text: '아름다운때에 달을 맞이한다', bgImage: '/images/event-moon.jpg', link: 'https://gall.dcinside.com/m/mibj/5459774' },
   { id: 'preview-black-money-rerun', text: '부정축재 재개방', bgImage: '/images/event-black-money-rerun.jpg', link: 'https://gall.dcinside.com/m/mibj/5459920' },
   { id: 'preview-vector', text: '벡터 브레이크스루', bgImage: '/images/event-vector-breakthrough.jpg', link: 'https://gall.dcinside.com/m/mibj/5461517' },
   { id: 'preview-west', text: '해 지는 곳을 따라서', bgImage: '/images/event-west.jpg', link: 'https://gall.dcinside.com/m/mibj/5462923' },
   { id: 'preview-ggozzil', text: '벨벳의 폭로자들', bgImage: '/images/event-ggozzil.jpg' },
   { id: 'preview-stronghold', text: '방어협정', bgImage: '/images/event-stronghold.jpg' },
   { id: 'preview-wife-rerun', text: '츠빌링슈튀르메의 가을 재개방', bgImage: '/images/event-wife-rerun.jpg' },
 ];

 return (
  <div className="min-h-screen bg-white">
<header className="relative flex justify-between items-center p-4 mb-8">
  <h1 className="text-2xl font-bold">명일방주 이벤트 미래시 (없는건 없는거)</h1>
  <div className="flex gap-8">
    <a 
      href="https://gall.dcinside.com/m/mibj/4713556"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 bg-white bg-opacity-80 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      가챠 미래시 요약
    </a>
    <a 
      href="https://gall.dcinside.com/m/mibj/3997217"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 bg-white bg-opacity-80 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      파밍 미래시 요약
    </a>
  </div>
</header>

    <main className="max-w-3xl mx-auto mt-8">
      {menuItems.map(item => (
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          className="menu-item relative h-48 px-4 mb-4 cursor-pointer block"
        >
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="menu-text relative z-10">{item.text}</div>
        </a>
      ))}
    </main>
  </div>
);
}

export default App;