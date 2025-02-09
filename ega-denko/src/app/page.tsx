import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="電気工事現場"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            確かな技術と信頼で<br />
            未来を明るく
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            永雅電工は、40年以上の実績を持つ電気設備のプロフェッショナル集団です。
            安心・安全な電気設備工事をお届けします。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">サービス</span>内容
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "電気設備工事",
                description: "新築・改修工事における電気設備工事を承ります。",
                icon: "🏗️"
              },
              {
                title: "保守点検",
                description: "定期的な点検で設備の安全性を維持します。",
                icon: "🔧"
              },
              {
                title: "省エネ提案",
                description: "LED化など、省エネルギー化のご提案をいたします。",
                icon: "💡"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}