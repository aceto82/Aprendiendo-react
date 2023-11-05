import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="Aceto82" isFollowing={true}>
                Diego Ortiz
            </TwitterFollowCard>
            <TwitterFollowCard userName="Aceto82" isFollowing={false}>
                Diego Ortiz
            </TwitterFollowCard>
        </section>
    )
}
