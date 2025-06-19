import homes from '../data/homes';
import HomeCard from '../components/HomeCard/HomeCard';

export default function HomesPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {homes.map(home => (
                <HomeCard key={home.id} home={home} />
            ))}
        </div>
    );
}
