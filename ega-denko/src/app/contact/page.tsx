"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信の処理を実装
    console.log(formData);
    alert("お問い合わせを受け付けました。");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
        <p className="text-gray-600">
          お気軽にお問い合わせください。担当者より折り返しご連絡いたします。
        </p>
      </div>

      {/* 連絡先情報 */}
      <div className="max-w-3xl mx-auto mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">お電話でのお問い合わせ</h2>
        <p className="text-3xl font-bold text-blue-600 mb-2">03-0000-0000</p>
        <p className="text-gray-600">
          受付時間: 平日 9:00〜18:00（土日祝を除く）
        </p>
      </div>

      {/* お問い合わせフォーム */}
      <form 
        onSubmit={handleSubmit} 
        className="max-w-3xl mx-auto"
      >
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              会社名
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              電話番号
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}