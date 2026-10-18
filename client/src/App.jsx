import Header from "./components/Header.jsx";

export default function App() {    
    return (
        <div className="w-full">
            {/* Header */}
            <Header isToday={true} isStats={false} />
        </div>
    );
}