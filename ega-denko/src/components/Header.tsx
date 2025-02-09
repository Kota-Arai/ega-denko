import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* ロゴ部分 */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            EGA電工
          </Link>

          {/* ナビゲーションメニュー */}
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                会社概要
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス内容
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;