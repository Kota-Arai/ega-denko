export default function Services() {
    return (
      <div className="container mx-auto px-4 py-16">
        {/* ページヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">サービス内容</h1>
          <p className="text-gray-600">
            永雅電工が提供する電気工事サービスをご紹介します
          </p>
        </div>
  
        {/* サービス一覧 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 電気設備工事 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">電気設備工事</h2>
            <p className="text-gray-600 mb-4">
              新築・改修工事における電気設備工事全般を承ります。
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>受変電設備工事</li>
              <li>動力設備工事</li>
              <li>照明設備工事</li>
              <li>配線工事</li>
            </ul>
          </div>
  
          {/* 保守点検 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">保守点検サービス</h2>
            <p className="text-gray-600 mb-4">
              定期的な点検で設備の安全性を維持します。
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>年次点検</li>
              <li>月次点検</li>
              <li>緊急対応</li>
              <li>設備診断</li>
            </ul>
          </div>
  
          {/* 省エネ提案 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">省エネソリューション</h2>
            <p className="text-gray-600 mb-4">
              電気使用量の削減とコスト削減をサポートします。
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>LED照明導入</li>
              <li>省エネ診断</li>
              <li>設備更新提案</li>
              <li>補助金申請支援</li>
            </ul>
          </div>
  
          {/* 通信設備 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">通信設備工事</h2>
            <p className="text-gray-600 mb-4">
              最新の通信設備の設計・施工を行います。
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>LAN配線工事</li>
              <li>防犯カメラ設置</li>
              <li>インターホン設置</li>
              <li>電話設備工事</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }