import Spinner from "../main/Spinner";

interface IPublishButtonProps {
    isLoading: boolean;
    publish: () => void;
}

export default function PublishButton({
    publish,
    isLoading,
}: IPublishButtonProps) {
    return (
        <button className="btn btn-ghost bg-zinc-900 flex-1" onClick={publish}>
            {isLoading ? <Spinner /> : "Publish"}
        </button>
    );
}
