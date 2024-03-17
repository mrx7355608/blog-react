export default function Tag({ tag }: { tag: string }) {
    return (
        <span className="text-sm font-medium bg-transparent border-2 border-cyan-400 px-4 py-1 text-cyan-400 rounded-full">
            {tag}
        </span>
    );
}
