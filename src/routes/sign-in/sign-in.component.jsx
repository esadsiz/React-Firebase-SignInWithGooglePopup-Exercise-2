import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // 1) Daha sonra burada response adinda asenkron bir fonksiyon olusturacagiz. Çünkü ne zaman bir veritabanıni cagiracaksak, bu asenkron olmalidir.
    const response = await signInWithGooglePopup();
    console.log(response); // 1) Bu fonksiyon bize kullanici bilgilerini iceren bir obje döndürecektir.
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>
        <h1>Sign In with Google Popup</h1>
      </button>
    </div>
  );
};

export default SignIn;
