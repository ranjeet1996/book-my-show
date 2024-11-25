import { getAuth, signInWithEmailAndPassword, onAuthStateChanged,  createUserWithEmailAndPassword, signOut } from "firebase/auth"
import React, { useContext ,useState , useEffect} from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBTw-NPhYEfG-yQ4YmINHi1eBzA-RlD7Eg",
  authDomain: "book-my-show-680b6.firebaseapp.com",
  projectId: "book-my-show-680b6",
  storageBucket: "book-my-show-680b6.firebasestorage.app",
  messagingSenderId: "647152365471",
  appId: "1:647152365471:web:daab14d9e3d17cbb56d7aa",
  measurementId: "G-6RQ5WTDW94"
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

