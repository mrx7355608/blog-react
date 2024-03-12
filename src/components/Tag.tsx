export default function Tag({ tag }: { tag: string }) {
    return (
        <span className="font-medium bg-transparent border border-cyan-400 px-5 py-1 rounded-lg text-cyan-400 rounded-full">
            #{tag}
        </span>
    );
}
