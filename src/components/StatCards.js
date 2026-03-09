export default function StatCard({ title, value }) {
    return(
        <div className="bg-surface rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-muted text-sm font-medium mb-2">{title}</p>
            <h2 className="text-3xl font-bold text-text-dark">{value}</h2>
        </div>
    )
}