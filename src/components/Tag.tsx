export default function Tag({ tag }: { tag: string }) {
    return (
        <span className="bg-transparent border border-gray-500 px-3 py-1 rounded-lg text-gray-700">
            #{tag}
        </span>
    );
}
