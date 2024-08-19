import Link from 'next/link';
import styles from './footer.module.css';
import useWindowSize from '../hooks/windowSize';
import SocialLinks from './SocialLinks';

export default function footer() {
  const screenSize = useWindowSize();

  return (
    <footer className="bg-[#091C3E] text-white py-5">
      <div className="flex flex-col sm:mx-4 md:mx-16 px-3 ">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <Link href="/">
            <img src="/images/kdj_logo_og.png" alt="Kiriromm Digital Logo" width={200}/>
          </Link>
          <div className={"flex flex-col md:flex-row gap-2 md:gap-5 my-3"}>
            <ul className="md:mr-10">
              <li className={styles.navItem}>
                <Link href="/" className="p-0">ホーム</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about-us">会社情報</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/news">ニュース</Link>
              </li>
              {/* <li className={styles.navItem}>
                <a href="https://note.com/kirirom_ac/n/n3dd0016d6280" className="p-0" target="_blank">NOTE</a>
              </li>  */}
            </ul>
            <ul >
              {/* <li className={styles.navItem}>
                <a href="https://kirirom.studio/" className="p-0" target="_blank">Group Site</a>
              </li> */}
              <li className={styles.navItem}>
                <Link href="/recruitment" className="p-0" target="_blank">エンジニア募集</Link>
              </li>
              <li className={styles.navItem}>
                <a href="https://kgforum.info/" className="p-0" target="_blank">Kirirom Grobal Forum</a>
              </li>
              <li className={styles.navItem}>
                <a href="https://peerlearninghub.life/" className="p-0" target="_blank">ピアラーニングハブ</a>
              </li>
            </ul>
          </div>
        </section>
        {screenSize.width <= 576 && (
            <SocialLinks />
          )}
        <div className="border-top my-3"></div>
        <div className="d-flex justify-content-center justify-content-sm-between">
          <div className='d-flex justify-content-center my-3'>
            <div className="d-none d-md-flex justify-content-center align-items-center me-3" style={{fontSize: 12,whiteSpace: 'nowrap'}}>
              © KIRIROM DIGITAL Inc.
              
            </div>
            <div className="d-flex align-items-center me-3">
              <Link href="/privacy-policy" className="p-0"  style={{fontSize: 12,whiteSpace: 'nowrap'}}>Privacy Policy</Link>
            </div>
            <div className="d-flex align-items-center">
              <Link href="/terms-of-sale" className="p-0"  style={{fontSize: 12,whiteSpace: 'nowrap'}}>特定商取引法に基づく表記</Link>
            </div>
          </div>

          {screenSize.width > 576 && (
            <SocialLinks />
          )}
          
        </div>
        
      </div>
    </footer>
  );
}