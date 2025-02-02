import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';

/* Header 버튼 컴포넌트 */
const HeaderButton = ({ href, label, id, activeId, onPointerDown, onPointerUp }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`header-button ${activeId === id ? 'active' : ''}`}
      onPointerDown={() => onPointerDown(id)}
      onPointerUp={onPointerUp}
    >
      <span data-hover={label}>{label}</span>
    </a>
  );
};

/* Header 컴포넌트 */
const Header = ({ activeId, onPointerDown, onPointerUp }) => (
  <header className="p-4 mb-8">
    <div className="content-wrapper w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">명일방주 이벤트 미래시 (없는건 없는거)</h1>
        <div className="flex gap-8">
          <HeaderButton
            href="https://gall.dcinside.com/m/mibj/4713556"
            label="가챠 요약"
            id="gacha"
            activeId={activeId}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          />
          <HeaderButton
            href="https://gall.dcinside.com/m/mibj/3997217"
            label="파밍 요약"
            id="farming"
            activeId={activeId}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          />
        </div>
      </div>
    </div>
  </header>
);

/* MenuItem 컴포넌트 */
const MenuItem = ({ item, activeId, onPointerDown, onPointerUp }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.text}
      className={`menu-item ${activeId === item.id ? 'active' : ''}`}
      onPointerDown={() => onPointerDown(item.id)}
      onPointerUp={onPointerUp}
    >
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${item.bgImage})` }}
      />
      <div className="menu-text">{item.text}</div>
    </a>
  );
};

function App() {
  const [activeId, setActiveId] = useState(null);
  const timeoutRef = useRef(null);

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

  const handlePointerDown = useCallback((id) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveId(id);
    // 600ms 후에 활성 상태 해제 (터치 효과 유지)
    timeoutRef.current = setTimeout(() => {
      setActiveId(null);
    }, 600);
  }, []);

  const handlePointerUp = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveId(null);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeId={activeId} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} />
      <main className="w-full mx-auto mt-8 px-4 sm:px-2">
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              activeId={activeId}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
