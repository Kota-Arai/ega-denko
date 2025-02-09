import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">EGA電工株式会社</h3>
            <p className="text-gray-300">
              〒000-0000<br />
              東京都○○区○○1-1-1<br />
              TEL: 03-0000-0000
            </p>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  サービス内容
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 営業時間 */}
          <div>
            <h3 className="text-xl font-bold mb-4">営業時間</h3>
            <p className="text-gray-300">
              平日: 9:00 - 18:00<br />
              土曜: 9:00 - 15:00<br />
              日祝: 休業
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© 2024 EGA電工株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;