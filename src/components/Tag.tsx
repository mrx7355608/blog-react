export default function Tag({ tag }: { tag: string }) {
    return (
        <span className="font-bold text-sm bg-transparent border border-gray-400 px-3 py-1 rounded-lg text-gray-500">
            #{tag}
        </span>
    );
}
