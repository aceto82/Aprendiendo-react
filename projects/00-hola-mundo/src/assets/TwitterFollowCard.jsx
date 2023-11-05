export function TwitterFollowCard({children, userName, isFollowing}) {
    const imageSrc = 'https://avatars.githubusercontent.com/u/8404328?v=4'
    return (
        <article className='tw-follow-card'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Imagen avatar" src={imageSrc}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}