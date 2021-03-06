import {useRouter} from 'next/router'
import {useEffect} from 'react'
import useLocalStorage from '../src/hooks/useLocalStorage'


export default function Home() {
    const router = useRouter()

    const [data] = useLocalStorage('store', null)

    useEffect(() => {
        if (data) {
            router.push('/dashboard')
        } else {
            router.push('/login')
        }
    }, [])

}
