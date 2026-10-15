import Header from "../components/Header.jsx";

export default function Stats() {
    return (
        <div className="w-full">
            {/* Header */}
            <Header isToday={false} isStats={true} />
        </div>
    );
}