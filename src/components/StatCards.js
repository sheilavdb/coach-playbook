import Image from "next/image";

export default function StatCard({ title, value, image }) {
    return(
        <div className="bg-surface rounded-xl border border-gray-100 overflow-hidden w-42 p-4 hover:shadow-lg cursor-pointer">
            <div className="relative w-full h-40">
                <Image src={image} alt={title} width={130} height={120} className="object-cover"></Image>
            </div>
            <p className="text-muted text-sm font-medium mb-2">{title}</p>
            <h2 className="text-2xl font-bold text-text-dark">{value}</h2>
        </div>
    )
}

