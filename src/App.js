import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [touchedItem, setTouchedItem] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const timeoutRef = useRef(null); // 타이머 관리용 ref 추가

  const menuItems = [
    { id: 'preview-nymph', text: '용광로의 부활', bgImage: `${process.env.PUBLIC_URL}/images/event-nymph.jpg`, link: 'https://gall.dcinside.com/m/mibj/5212701' },
    { id: 'preview-roguelike-sarkaz', text: '통합전략#5 살카즈의 영원한 불가사의', bgImage: `${process.env.PUBLIC_URL}/images/event-roguelike-sarkaz.png`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-concert-2024-ii', text: 'Ambience Synesthesia 2024 II', bgImage: `${process.env.PUBLIC_URL}/images/event-concert-2024-ii.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-dungeon-meshi', text: '테라밥', bgImage: `${process.env.PUBLIC_URL}/images/event-dungeon-meshi.jpg`, link: 'https://gall.dcinside.com/m/mibj/5436645' },
    { id: 'preview-moon', text: '아름다운때에 달을 맞이한다', bgImage: `${process.env.PUBLIC_URL}/images/event-moon.jpg`, link: 'https://gall.dcinside.com/m/mibj/5459774' },
    { id: 'preview-black-money-rerun', text: '부정축재 재개방', bgImage: `${process.env.PUBLIC_URL}/images/event-black-money-rerun.jpg`, link: 'https://gall.dcinside.com/m/mibj/5459920' },
    { id: 'preview-vector', text: '벡터 브레이크스루', bgImage: `${process.env.PUBLIC_URL}/images/event-vector-breakthrough.jpg`, link: 'https://gall.dcinside.com/m/mibj/5461517' },
    { id: 'preview-west', text: '해 지는 곳을 따라서', bgImage: `${process.env.PUBLIC_URL}/images/event-west.jpg`, link: 'https://gall.dcinside.com/m/mibj/5462923' },
    { id: 'preview-ggozzil', text: '벨벳의 폭로자들', bgImage: `${process.env.PUBLIC_URL}/images/event-ggozzil.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-stronghold', text: '방어협정', bgImage: `${process.env.PUBLIC_URL}/images/event-stronghold.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-wife-rerun', text: '츠빌링슈튀르메의 가을 재개방', bgImage: `${process.env.PUBLIC_URL}/images/event-wife-rerun.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-pale-sea', text: '창백한 바다를 떠나며', bgImage: `${process.env.PUBLIC_URL}/images/event-pale-sea.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-china-film', text: '흔적을 남겨 현재를 빛내다', bgImage: `${process.env.PUBLIC_URL}/images/event-china-film.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-lake-rerun', text: '은심호 재개방', bgImage: `${process.env.PUBLIC_URL}/images/event-lake-rerun.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-new-year-2025', text: '2025년 신년 기념 이벤트 (CN기준)', bgImage: `${process.env.PUBLIC_URL}/images/event-new-year-2025.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
    { id: 'preview-lunear-moon-2025', text: '상견환', bgImage: `${process.env.PUBLIC_URL}/images/event-lunar-moon-2025.jpg`, link: 'https://gall.dcinside.com/m/mibj/5464489' },
  ];

  const handleTouchStart = (id) => {
    // 기존 타이머 정리
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  
    // 터치 시작 시 상태 업데이트
    setTouchedItem(id);
    setActiveButton(id);
  
    // 일정 시간 후 상태 초기화 (600ms)
    timeoutRef.current = setTimeout(() => {
      setTouchedItem(null);
      setActiveButton(null);
    }, 600);
  };
  
  const handleTouchEnd = () => {
    // 터치가 끝난 직후 상태 초기화
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTouchedItem(null);
    setActiveButton(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative p-4 mb-8">
        <div className="content-wrapper w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold">명일방주 이벤트 미래시 (없는건 없는거)</h1>
            <div className="flex gap-8">
              <a
                href="https://gall.dcinside.com/m/mibj/4713556"
                target="_blank"
                rel="noopener noreferrer"
                className={`header-button ${activeButton === 'gacha' ? 'active' : ''}`}
                onTouchStart={() => handleTouchStart('gacha')}
                onTouchEnd={handleTouchEnd}
              >
                <span data-hover="가챠 요약">가챠 요약</span>
              </a>
              <a
                href="https://gall.dcinside.com/m/mibj/3997217"
                target="_blank"
                rel="noopener noreferrer"
                className={`header-button ${activeButton === 'farming' ? 'active' : ''}`}
                onTouchStart={() => handleTouchStart('farming')}
                onTouchEnd={handleTouchEnd}
              >
                <span data-hover="파밍 요약">파밍 요약</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full mx-auto mt-8 px-4 sm:px-2">
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className={`menu-item relative w-full h-[50vh] sm:h-[40vh] cursor-pointer block ${touchedItem === item.id ? 'active' : ''}`}
              onTouchStart={() => handleTouchStart(item.id)}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                }}
              />
              <div className="menu-text">{item.text}</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
