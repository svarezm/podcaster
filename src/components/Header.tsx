import { Link } from "react-router-dom"
import "../styles/components/Header.scss"

const EpisodeDetail: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                Podcaster
            </Link>
        </header>
    )
}

export default EpisodeDetail
