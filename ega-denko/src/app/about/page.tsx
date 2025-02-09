export default function About() {
    return (
      <div className="container mx-auto px-4 py-16">
        {/* ページヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">会社概要</h1>
          <p className="text-gray-600">永雅電工の企業情報をご紹介します</p>
        </div>
  
        {/* 会社情報 */}
        <div className="max-w-3xl mx-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">会社名</th>
                <td className="py-4 px-6">永雅電工株式会社</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">設立</th>
                <td className="py-4 px-6">1980年4月</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">資本金</th>
                <td className="py-4 px-6">1,000万円</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">代表取締役</th>
                <td className="py-4 px-6">永雅 太郎</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">所在地</th>
                <td className="py-4 px-6">
                  〒000-0000<br />
                  東京都○○区○○1-1-1
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">電話番号</th>
                <td className="py-4 px-6">03-0000-0000</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">事業内容</th>
                <td className="py-4 px-6">
                  <ul className="list-disc list-inside">
                    <li>電気設備工事</li>
                    <li>電気通信工事</li>
                    <li>消防設備工事</li>
                    <li>空調設備工事</li>
                    <li>LED照明工事</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/3 bg-gray-50">資格</th>
                <td className="py-4 px-6">
                  <ul className="list-disc list-inside">
                    <li>電気工事士</li>
                    <li>電気工事施工管理技士</li>
                    <li>消防設備士</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }