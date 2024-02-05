/**Component Yazım Kuralı
 * Her react componenti bir javascript fonksiyonudur
 * Baş harfi büyük harfle başlar
 * içerisinde mutlaka jsx return eder
 * daha sonra istenilen yerlerde kullanılmak üzere export edilir
 *
 */

import Button from "./button";
import Button2 from "./button2";
//Java script fonksiyonu baş harfi büyük
const Header = () => {
  //içerisinde jsx return etme
  return (
    <header>
      <h1>Fcoder</h1>
      <nav>
        <a href="classNAme">Ana Sayfa</a>
        <a href="ClassName">Ürünler</a>
        <a href="className">Hakkımızda</a>
        <a href="className">İletişim</a>
      </nav>
      <div>
        {/*<Button butonMetni={'Kullanıcı Girişi'}/>
                <Button butonMetni={'Yönetici Girişi'}/>
                <button butonMetni={'Kayıt Ol'} />*/}
        <Button2 buttonTitle={"Kullanıcı Girişi"} buttonColor={"greenyellow"} />
        <Button2 buttonTitle={"Yönetici Girişi"} buttonColor={"orangered"} />
      </div>
    </header>
  );
};
//dışarıya çıkartma
export default Header;
