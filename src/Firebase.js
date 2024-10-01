import { getAuth, signInWithEmailAndPassword, onAuthStateChanged,  createUserWithEmailAndPassword, signOut } from "firebase/auth"
import React, { useContext ,useState , useEffect} from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBem-_GHx-zBaL2bbJlQdQ6CUXeXal4DCA",
    authDomain: "book-my-show-8819b.firebaseapp.com",
    projectId: "book-my-show-8819b",
    storageBucket: "book-my-show-8819b.appspot.com",
    messagingSenderId: "1077012336307",
    appId: "1:1077012336307:web:1f8af517b4285f315faac6"
  };
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const Data = createContext();

export const useFirebase = ()=> useContext(Data);

export function FirebaseProvider(props) {


    const [currUser, seCurrUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
                seCurrUser(user);
            }else {
                seCurrUser(null);
            }
        })
    }, [])

   const SignUpUser = (email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password).then(()=>alert("Sucess")).catch((error)=>{alert("email is allready registered")});
   }

   const SigniN = (email,password)=>{
    setIsLogin(true);
    return signInWithEmailAndPassword(auth,email,password).then(()=>alert("Sucess")).catch((error)=>{alert("Please Enter Valid Email & Password")})
   }

 const[islogin,setIsLogin] = useState(false);

    
  return (
    <Data.Provider value={{islogin , SignUpUser , SigniN , signOut , auth , currUser , setIsLogin}}>
      {props.children}
    </Data.Provider>
  )
}

