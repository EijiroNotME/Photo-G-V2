import { useState } from "react"
import { db, projectAuth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

function useSignup() {
    // const [isCancelled, setisCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    // const { dispatch } = useAuthContext()

    const signup = async (email: string, password: string, firstName: string, lastName: string, userName: string, school: string, campus: string, course: string) => {
        setError(null)
        setIsPending(true)
        try {
            const res = await createUserWithEmailAndPassword(projectAuth, email, password)
            // Get the user ID from the response
            if (!res) {
                throw new Error('Could not complete signup')
            }
            
            const userId = res.user.uid;
            // Set user document in Firestore
            await setDoc(doc(db, "users", userId), {
                firstName,
                lastName,
                userName,
                school,
                campus,
                course,
                email
            });

            setIsPending(false);
        }  catch (error: any) {
            console.error("Error during signup:", error);
            setError(error.message);
            setIsPending(false);
        }   
    }
    return { error, isPending, signup }
}

export default useSignup