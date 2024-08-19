import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>特定商取引法に基づく表記</title>
      </Head>
      <div className="bg-kd-primary">
        <div className="py-5"></div>
        <div className="container text-kd-white py-4 px-3">
          <h3 className="text-start px-3">特定商取引法に基づく表記</h3>
        </div>
      </div>
      <div className="bg-kd-secondary py-5">
        <div className="container px-4">
          <br />
          <h5>販売価格について</h5>
          <p className="lead">
          販売価格は、表示された金額（表示価格・消費税込）とします。なお、商品代金以外に送料や各種手数料がかかる場合がございます。各商品ページや、お支払方法の選択ページ、注文内容のご確認ページをご確認ください。
          </p>
          <br />
          <h5>代金(対価)の支払時期と方法</h5>
          <p className="lead">
          ■ 支払方法
          クレジットカード、コンビニ決済、銀行振込がご利用いただけます。<br />
          ■ 支払時期
          ・クレジットカードは商品ご注文時点でお支払いが確定します。
          ・コンビニ決済、銀行振込
            商品注文時点から約3日間の期限内にお支払いください。お支払い期限を過ぎると、自動でキャンセルとなります。
          </p>
          <br />
          <h5>返品についての特約事項</h5>
          <p className="lead">
          商品に欠陥がある場合を除き、返品には応じません。
          </p>
          <br />
          <h5>役務または商品の引き渡し時期</h5>
          <p className="lead">
          配送のご依頼を受けてから7日以内に発送いたします。
          </p>
          <br />
          <h5>事業者の名称および連絡先</h5>
          <p className="lead">
            <dl>
              <dt>会社名</dt>
              <dd>キリロムデジタル株式会社</dd>
              <dt>代表者</dt>
              <dd>猪塚 武</dd>
              <dt>所在地</dt>
              <dd>〒102-0071東京都千代田区富士見１丁目３−１１</dd>
              <dt>電話番号</dt>
              <dd>0879-43-0311 受付時間 10:00-18:00（土日祝を除く）</dd>
              <dt>メールアドレス</dt>
              <dd>info @ kirirom-digital.com</dd>
              <dt>運営統括責任者</dt>
              <dd>猪塚 武</dd>
              <dt>追加手数料等の追加料金</dt>
              <dd>配送料 900円から4000円（地域次第）<br />諸税 （国外発送の場合）</dd>
              <dt>交換および返品（返金ポリシー）</dt>
              <dd>商品に欠陥がある場合を除き、返品には応じません。</dd>
              <dt>引渡時期</dt>
              <dd>配送のご依頼を受けてから7日以内に発送いたします。</dd>
              <dt>受け付け可能な決済手段</dt>
              <dd>クレジットカード、コンビニ決済、銀行振込</dd>
              <dt>決済期間</dt>
              <dd>クレジットカードは商品ご注文時点でお支払いが確定します。<br />コンビニ決済、銀行振込は商品注文時点から約3日間の期限内にお支払いください。お支払い期限を過ぎると、自動でキャンセルとなります。</dd>
              <dt>販売価格</dt>
              <dd>各商品ページや、お支払方法の選択ページ、注文内容のご確認ページをご確認ください。</dd>
            </dl>
          </p>
        </div>
      </div>
    </>
  );
}
