import { initializeApp } from "firebase/app";
// FireBase kimligimizi projeye tanitmis olduk.

// FireBase'in bu mikro kütüphanesi kimlik dogrulama ile ilgili.
import {
  getAuth, // Bir kimlik dogrulama örnegi olusturmak icin getAuth'u cektik.
  signInWithRedirect,
  signInWithPopup, // birisi yönlendirme ile, öteki acilir pencere ile oturum acmaya yarar.
  GoogleAuthProvider, // bu da google kimlik dogrulama saglayicisi
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLjvpulQ7NCwaylNM1zBy1arEfNj0bibU",
  authDomain: "fir-exercise-esadsiz.firebaseapp.com",
  projectId: "fir-exercise-esadsiz",
  storageBucket: "fir-exercise-esadsiz.appspot.com",
  messagingSenderId: "382589735773",
  appId: "1:382589735773:web:1771906974e5185b130eb4",
};

const firebaseApp = initializeApp(firebaseConfig);

// Bu Google kimlik doğrulamasını kullanmak için, önce aldığımız bu GoogleAuthProvider sınıfını kullanarak bir sağlayıcı başlatmamız gerekiyor.
// new GoogleAuthProvider'i cagiririz, bu da bize bir sağlayıcı örneği dönecek.
// Daha sonra yapmak isteyeceğimiz set özel parametreleri çağırmak istiyoruz.
const provider = new GoogleAuthProvider();
// Bir sonraki adim. custom parameter denilen bu özel parametreler bir tür yapılandırma nesnesi alir ve bu sayede GoogleAuthProvider'ın nasıl davranmasını istediğimizi belirleriz.
// Genel olarak isteyeceğimiz davranis tarzi "prompt"dur. Bu, kisiler sağlayıcımızla her etkileşime girdiğinde, onları her zaman bir hesap seçmeye zorlamis oluruz.
provider.setCustomParameters({
  prompt: "select_account",
});
// Simdi de kimlik doğrulamamızı dışa aktaralim.
export const auth = getAuth();
// Simdi de auth ve provider verilerini göndererek pop-up ile giris talep ediyoruz.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
