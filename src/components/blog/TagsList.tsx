import Tag from "./Tag";

export default function TagsList({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
                <Tag tag={tag} key={index} />
            ))}
        </div>
    );
}
